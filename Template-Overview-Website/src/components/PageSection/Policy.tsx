"use client";
import { generatePDF } from "smart-dom-pdf";

export default function Policy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-8 py-24">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-16 md:p-20">
        {/* Title */}
        <h1
          id="p1-start"
          className="text-5xl font-extrabold text-gray-900 mb-16 text-center"
        >
          Privacy Policy
        </h1>

        <div className="flex justify-center mb-10">
          <button
            onClick={() =>
              generatePDF({
                pages: [
                  { from: "#p1-start", to: "#p1-end" },
                  { from: "#p2-start", to: "#p2-end" },
                  { from: "#p3-start", to: "#p3-end" },
                  { from: "#p4-start", to: "#p4-end" },
                ],
                filename: "Privacy-Policy.pdf",
              })
            }
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Download PDF
          </button>
        </div>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-20 text-center">
          Your privacy is extremely important to us. This Privacy Policy
          describes in detail the types of information we collect, how we use
          it, and the steps we take to protect it. Please read carefully to
          understand your rights and how we handle your information.
        </p>

        {/* Section 1 */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. Information We Collect
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We collect personal information you voluntarily provide, including
            your name, email, phone number, and other contact details. We also
            track your interactions with our website, including pages visited,
            time spent, and actions performed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Additionally, we may collect information from third-party sources or
            social media accounts if you connect them to our platform.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            2. How We Use Your Information
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We use your information to operate and improve our services,
            communicate with you, deliver updates, and provide support when
            necessary.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We may also use data for security purposes, fraud prevention, and
            analytics to enhance user experience.
          </p>
        </section>

        <div id="p1-end"></div>

        {/* Section 3 */}

        <div id="p2-start"></div>
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            3. Data Protection & Security
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We implement technical, administrative, and organizational measures
            to protect your data, including encryption, secure servers, access
            controls, and audits.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            While we strive for maximum security, no system is completely
            secure. In case of a breach, affected users will be notified
            immediately.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            4. Cookies & Tracking Technologies
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our website uses cookies and similar tracking technologies to
            enhance user experience, analyze trends, and gather demographic
            information.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            You can choose to disable cookies via your browser settings, but
            some features of the website may not function properly without them.
          </p>
        </section>

        <div id="p2-end"></div>

        {/* Section 5 */}
        <div id="p3-start"></div>
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            5. Third-Party Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We may work with trusted third-party providers to deliver services,
            process payments, or host data. These providers are obligated to
            protect your data under strict agreements.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are not responsible for the privacy practices of third parties.
            Please review their policies if you interact with their services.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            6. Children&apos;s Privacy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our services are not directed to children under the age of 13. We do
            not knowingly collect personal information from children.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If we become aware that a child has provided personal information,
            we will take steps to delete it immediately.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            7. Your Rights
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            You have the right to access, correct, or delete your personal
            information. You may also object to processing or request data
            portability where applicable.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            To exercise these rights, please contact us using the information
            below.
          </p>
        </section>

        <div id="p3-end"></div>

        {/* Section 8 */}
        <div id="p4-start"></div>
        <section className="mb-28">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            8. Contact Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            If you have any questions or concerns about this Privacy Policy or
            how your information is handled, please reach out to us.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Email:</strong> support@yourcompany.com <br />
            <strong>Phone:</strong> +123-456-7890
          </p>
        </section>

        {/* Footer */}
        <div className="border-t pt-10 text-center">
          <p className="text-lg text-gray-500">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>

        <div id="p4-end"></div>
      </div>
    </div>
  );
}
