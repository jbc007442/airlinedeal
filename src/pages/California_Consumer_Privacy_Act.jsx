import React from 'react'

const California_Consumer_Privacy_Act = () => {
  return (
    <section className="bg-white text-gray-800 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl max-w-4xl mx-auto font-bold text-center border-b-4 border-blue-500 pb-4 text-blue-700">
          California Consumer Privacy Act (CCPA) Notice
        </h1>

        {/* Body */}
        <div className="space-y-6 text-sm md:text-base mt-8 leading-relaxed">
          <p>
            This California Consumer Privacy Act (“CCPA”) privacy notice (this “CCPA Notice”) is incorporated into the
            AirLineDealHub Privacy Policy and applies specifically to our handling of personal information of
            California consumers, as defined by the CCPA (referred to collectively as “Consumers,” “you,” or “your”).
            Any capitalized terms used but not defined in this CCPA Notice shall have the meanings provided in the
            Privacy Policy or, if not defined there, the meanings set forth in the CCPA. In the event of a conflict
            between this CCPA Notice and the main Privacy Policy, this CCPA Notice will govern solely with respect to
            California Consumers and their personal information.
          </p>

          <h3 className="font-bold text-blue-700 mt-6">Your Rights Under the CCPA</h3>

          <h4 className="font-semibold text-blue-600">Access to Personal Information</h4>
          <p>
            You have the right to request access to the personal information that AirLineDealHubHolidays has collected
            and maintained about you over the past twelve (12) months, including details regarding how that information
            has been used and disclosed. Such requests may be made no more than twice within a twelve (12) month period
            and are subject to appropriate identity verification.
          </p>

          <h4 className="font-semibold text-blue-600">Deletion of Personal Information</h4>
          <p>
            You have the right to request that AirLineDealHub delete the personal information we have collected
            and retained about you, subject to certain legal exceptions. Once your request is verified and we confirm
            that we are legally obligated to delete the information, we will do so. Your request may be denied if
            retention of the information is required or permitted under applicable law. We may also retain a record of
            your deletion request to comply with legal obligations.
          </p>

          <h4 className="font-semibold text-blue-600">“Do Not Sell My Personal Information”</h4>
          <p>
            Under the CCPA, you may opt out of the “sale” of your personal information, as broadly defined by the law.
            AirLineDealHub may share certain categories of personal information (excluding financial data) with
            advertising and marketing partners in a way that could be interpreted as a “sale.” California residents may
            opt out by clicking the “Do Not Sell My Personal Information” link, which is displayed to users accessing
            our website from California IP addresses.
          </p>
          <p>
            Please note that opting out of “sales” does not limit our ability to share personal information with
            affiliates or with third parties for non-marketing purposes, such as to complete a booking or process a
            transaction. This opt-out also does not apply to transfers of information as part of a merger, acquisition,
            or other corporate event.
          </p>

          <h4 className="font-semibold text-blue-600 mt-6">How to Exercise Your Rights</h4>
          <p>
            To exercise your rights to access or delete your personal information, please contact us by:
          </p>
          <p className="text-blue-500 font-semibold">
            Emailing us at:{" "}
            <a href="mailto:support@AirLineDeals.com" className="underline hover:text-blue-700">
              support@AirLineDeals.com
            </a>
          </p>
          <p>
            To opt out of the sale of personal information, please refer to the “Do Not Sell My Personal Information”
            section above. AirLineDealHub will not discriminate against you for exercising your rights under the
            CCPA.
          </p>
        </div>
      </div>
    </section>
  )
}

export default California_Consumer_Privacy_Act
