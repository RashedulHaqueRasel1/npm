import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function getRangeContent(from, to) {
  const startEl = document.querySelector(from);
  const endEl = document.querySelector(to);

  if (!startEl || !endEl) {
    throw new Error("Invalid selector provided");
  }

  const range = document.createRange();
  range.setStartBefore(startEl);
  range.setEndAfter(endEl);

  return range.cloneContents();
}

function createHiddenContainer() {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "0";
  container.style.width = "794px";
  container.style.background = "white";
  container.style.padding = "20px";

  document.body.appendChild(container);
  return container;
}

export async function generatePDF(config) {
  const { pages, filename = "document.pdf" } = config;

  const pdf = new jsPDF("p", "mm", "a4");
  let isFirstPage = true;

  for (const page of pages) {
    const { from, to } = page;

    const content = getRangeContent(from, to);
    const container = createHiddenContainer();
    container.appendChild(content);

    // We must manually convert all computed oklch colors to rgb/rgba
    const canvasColor = document.createElement("canvas");
    canvasColor.width = 1;
    canvasColor.height = 1;
    const ctxColor = canvasColor.getContext("2d");

    const forceRgb = (color) => {
      if (!color || typeof color !== "string" || !color.includes("oklch"))
        return color;
      return color.replace(/oklch\([^)]+\)/g, (match) => {
        ctxColor.clearRect(0, 0, 1, 1);
        ctxColor.fillStyle = match;
        ctxColor.fillRect(0, 0, 1, 1);
        const data = ctxColor.getImageData(0, 0, 1, 1).data;
        return `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
      });
    };

    const elements = [container, ...container.getElementsByTagName("*")];
    for (const el of elements) {
      const style = window.getComputedStyle(el);

      // Aggressively check all CSS properties for oklch values
      for (let i = 0; i < style.length; i++) {
        const prop = style[i];
        const val = style.getPropertyValue(prop);
        if (val && val.includes("oklch")) {
          // Setting the property via setProperty to ensure inline override
          el.style.setProperty(
            prop,
            forceRgb(val),
            style.getPropertyPriority(prop)
          );
        }
      }

      // Handle common shorthand/computed properties that may not be in the iteration
      const extraProps = ["backgroundImage", "boxShadow", "fill", "stroke"];
      for (const prop of extraProps) {
        const val = style[prop];
        if (val && val.includes("oklch")) {
          el.style[prop] = forceRgb(val);
        }
      }
    }

    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      windowWidth: 794,
      onclone: (clonedDoc) => {
        // html2canvas uses the cloned document for rendering.
        // We should repeat the color conversion here to be absolutely sure.
        const clonedContainer = clonedDoc.body.lastChild;
        if (clonedContainer) {
          const allCloned = [
            clonedContainer,
            ...clonedContainer.getElementsByTagName("*"),
          ];
          for (const el of allCloned) {
            const style = window.getComputedStyle(el);
            for (let i = 0; i < style.length; i++) {
              const prop = style[i];
              const val = style.getPropertyValue(prop);
              if (val && val.includes("oklch")) {
                el.style.setProperty(
                  prop,
                  forceRgb(val),
                  style.getPropertyPriority(prop)
                );
              }
            }
          }
        }
      },
    });

    const imgData = canvas.toDataURL("image/png");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    if (!isFirstPage) {
      pdf.addPage();
    }

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    isFirstPage = false;

    document.body.removeChild(container);
  }

  pdf.save(filename);
}
