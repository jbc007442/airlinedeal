import React from "react";

const Cookie_Policy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-12 px-4 border-b border-gray-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b border-blue-600 pb-4 text-blue-700">
          Cookies Policy
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">1. Introduction</h2>
          <p>
            Welcome to AirLineDealHub (hereafter referred to as “we,” “us,” or
            “our”). We value your privacy and are committed to being transparent
            about the technologies we use on our website. This Cookies Policy
            explains what cookies are, how we use them, the types of cookies we
            use, and how you can manage your cookie preferences while using our
            travel website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are created by your web browser
            when you visit a website. They store certain information about your
            visit, such as your language preference, log in details, or items in
            your shopping cart. Cookies help improve your browsing experience by
            enabling our website to remember your actions and preferences over
            time.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">3. How We Use Cookies</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the website to
              function correctly and allow navigation and secure access.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help analyze site usage and
              performance.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Store preferences like
              username, language, and region.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> Used by
              advertising partners to show relevant ads on other sites.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
            4. Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Session Cookies:</strong> Temporary cookies that expire
              when you close your browser.
            </li>
            <li>
              <strong>Persistent Cookies:</strong> Remain on your device for a
              set time or until deleted.
            </li>
            <li>
              <strong>Third-Party Cookies:</strong> Used by external sites
              linked through our platform.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
            5. GDPR Data Protection Rights
          </h2>
          <p>Every user is entitled to the following rights:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>The right to access:</strong> Request copies of your
              personal data.
            </li>
            <li>
              <strong>The right to rectification:</strong> Request corrections
              of inaccurate or incomplete data.
            </li>
            <li>
              <strong>The right to erasure:</strong> Request deletion of your
              data under certain conditions.
            </li>
            <li>
              <strong>The right to restrict processing:</strong> Request
              limitation of how your data is processed.
            </li>
            <li>
              <strong>The right to object to processing:</strong> Object to our
              processing of your data.
            </li>
            <li>
              <strong>The right to data portability:</strong> Request transfer
              of your data to another organization or to you.
            </li>
          </ul>
          <p className="mt-2">
            If you make a request, we have one month to respond. Please contact
            us if you would like to exercise any of these rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
            6. Managing Your Cookie Preferences
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Browser Settings:</strong> Control cookie usage via your
              browser settings.
            </li>
            <li>
              <strong>Opt-Out Links:</strong> Manage advertising cookies via{" "}
              <a
                href="https://www.networkadvertising.org/choices"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Network Advertising Initiative
              </a>{" "}
              or{" "}
              <a
                href="https://www.aboutads.info/choices"
                className="text-blue-500 underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Digital Advertising Alliance
              </a>
              .
            </li>
            <li>
              <strong>Cookie Consent Banner:</strong> Customize preferences via
              the banner shown on first visit.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
            7. Changes to This Cookies Policy
          </h2>
          <p>
            We may update this policy periodically to reflect changes in our
            practices or legal requirements. Please review this page regularly
            to stay informed.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Cookie_Policy;
