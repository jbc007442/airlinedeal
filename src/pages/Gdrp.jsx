import React from 'react'

const Gdrp = () => {
  return (
    <section className="bg-blue-50 text-gray-800 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl max-w-4xl mx-auto font-bold text-center border-b-4 border-blue-500 pb-4 text-blue-800">
          General Data Protection Regulation (GDPR)
        </h1>

        {/* Content */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed mt-8">

          <p>
            The General Data Protection Regulation (“GDPR”) is a comprehensive data protection law that came into
            effect on May 25, 2018. It strengthens the rights of individuals within the European Union (EU) regarding
            their personal data and sets out obligations for organizations that handle such data.
          </p>

          <h3 className="font-bold text-blue-700">Our Commitment</h3>
          <p>
            AirLineDealHub  is fully committed to ensuring the privacy and protection of all users' personal
            data, in line with GDPR requirements. Whether you are booking travel services or simply browsing our site,
            your data is treated with the highest level of care and responsibility.
          </p>

          <h3 className="font-bold text-blue-700">Your Rights Under the GDPR</h3>

          <ul className="list-disc list-inside pl-4 space-y-2">
            <li><strong>Right to Access:</strong> You have the right to request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete data.</li>
            <li><strong>Right to Erasure:</strong> You have the right to ask us to delete your personal data in certain circumstances.</li>
            <li><strong>Right to Restrict Processing:</strong> You may request us to suspend the processing of your data.</li>
            <li><strong>Right to Data Portability:</strong> You may request to receive your data in a structured, commonly used format.</li>
            <li><strong>Right to Object:</strong> You can object to processing when it's based on legitimate interest or direct marketing.</li>
          </ul>

          <h3 className="font-bold text-blue-700">How We Use Your Data</h3>
          <p>
            We collect and process personal information to provide travel booking services, customer support,
            communications, marketing (with consent), and legal compliance. Your information is never sold, and is
            only shared with trusted service providers or when legally required.
          </p>

          <h3 className="font-bold text-blue-700">Security Measures</h3>
          <p>
            We implement strong technical and organizational measures to protect your data against unauthorized access,
            loss, misuse, or alteration. All sensitive data is encrypted and stored securely.
          </p>

          <h3 className="font-bold text-blue-700">Data Retention</h3>
          <p>
            Personal data is only retained for as long as necessary to fulfill the purposes for which it was collected,
            including legal, regulatory, and accounting obligations.
          </p>

          <h3 className="font-bold text-blue-700">How to Contact Us</h3>
          <p>
            If you have questions or would like to exercise any of your GDPR rights, you may contact our Data Protection Officer (DPO) at:
          </p>
          <p className="text-blue-600 font-semibold">
            <a href="mailto:support@AirLineDeals.com" className="underline hover:text-blue-800">
              support@AirLineDeals.com
            </a>
          </p>

          <p>
            Please include your name, contact information, and a clear description of your request. We will respond
            within 30 days, as required by law.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Gdrp
