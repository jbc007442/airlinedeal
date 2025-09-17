import React from "react";

const Price_Match_Promise = () => {
  return (
    <div className="bg-blue-50 border-b border-blue-300 text-gray-800 px-6 md:px-24 py-16">
      {/* Page Header */}
      <h1 className="text-4xl max-w-4xl mx-auto font-bold text-center border-b-4 border-blue-600 pb-4 text-blue-800">
        PRICE MATCH PROMISE
      </h1>

      <div className="max-w-4xl mt-8 mx-auto space-y-6 text-base leading-7">
        {/* Section 1 */}
        <div>
          <h2 className="text-blue-700 font-semibold text-lg mb-2">
            When you book with AirLineDealHub, our Travel Experts make sure you
            find the best-offered price.
          </h2>
          <p>
            To do the same, we have incorporated the Price Match Policy. Under
            this policy, if you find an all-inclusive price that is lower than
            our offered price—with the same itinerary on a Major OTA within
            24-hours of booking—we will match the price and refund the
            difference.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-blue-700 font-semibold text-lg mb-2">
            What's meant by the 'same itinerary'?
          </h2>
          <p>
            'The same itinerary' implies that every element of the booking
            matches our quoted booking details. It includes flight number,
            airline carrier, dates of travel, number of passengers, and seat
            type.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-blue-700 font-semibold text-lg mb-2">
            Why is it a requirement that bookings under PMP must be 'offered and
            available'?
          </h2>
          <p>
            You are required to make sure that the itinerary you find to beat
            our rate is live on a competitor’s site; and at the time when our
            agent visits the website it is available to be booked.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-blue-700 font-semibold text-lg mb-2">
            How can I notify AirLineDealHub  regarding invoking PMP?
          </h2>
          <p>
            To invoke PMP, you are required to contact us at{" "}
            <a
              href="mailto:support@AirLineDealHub.com"
              className="text-blue-600 underline font-medium"
            >
              support@AirLineDealHub.com
            </a>{" "}
            or call us on{" "}
            <a
              href="tel:18339142482"
              className="text-blue-600 underline font-medium"
            >
              1-833-914-2482
            </a>{" "}
            to share your AirLineDealHub  booking reference number and all the
            details of the lower priced itinerary.
            <br />
            <br />
            With this, you must share the URL or screenshot that enables our
            customer service representatives to verify the itinerary. Our Travel
            Experts should be able to find the lower rate from the information
            you provide. We reserve the right to deny claims if we cannot verify
            the itinerary details.
            <br />
            <br />
            If verified, you will be offered to choose from retaining the
            itinerary or getting a refund of the difference.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-blue-700 font-semibold text-lg mb-2">
            Are there any exceptions to Price Match Policy?
          </h2>
          <p>
            The fares under PMP are not applicable on membership programs,
            corporate discounts, group discounts, charter, rewards programs,
            incentives, meetings, conventions, or consolidated fares.
            <br />
            <br />
            Even the coupon promotions, or any other promotional offer which is
            not valid for the general public is excluded.
          </p>
          <p className="mt-2">
            <strong>Exclusions:</strong> military, student, government, tour
            operator, bulk, vacation package, and fare errors are excluded.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price_Match_Promise;
