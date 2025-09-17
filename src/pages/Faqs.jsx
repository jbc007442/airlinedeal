import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const faqsData = [
  {
    question: "WHAT IS MEANT BY ONLINE CHECK–IN FOR AIRLINES?",
    answer:
      "Online check-in is the process of verifying your tickets online. This procedure verifies that you are on the scheduled flight. You can either scan your boarding card at the airport or print it whenever it is convenient for you. It assists you in avoiding lengthy lines to check in. You just drop off your bags and head straight to the security gates after completing the online check-in process. The online check-in process for the majority of airlines opens 24 to 48 hours prior to the flight departure time and remains open for one to two hours after that. To learn more, visit the website of the relevant airline and review their check-in policy.",
  },
  {
    question: "HOW TO PLACE A REQUEST FOR AN IN–FLIGHT MEAL?",
    answer:
      "The majority of low-cost airlines do not provide free meals to passengers when they are on board. Typically, they charge extra for the meals that are provided to the passengers. You have the choice to choose an in-flight meal when making your reservation. After then, the request is sent to the airlines, and you must submit it at least 24 hours prior to the flight's departure time. AirLineDealHub agents have the authority to request your meal from the airlines on your behalf. However, the airline has the last say over whether or not to fulfill your meal request, thus we cannot guarantee it.",
  },
  {
    question:
      "WHY DID THE FARE INCREASE AFTER I PLACED MY BOOKING AND RECEIVED CONFIRMATION?",
    answer:
      "AirLineDealHub notifies you that your booking request has been received through the email you receive confirming your reservation. Our agents start working on your query as soon as we receive it. Every minute, the airline regulates and changes its airfares. Depending on your trip's demand and supply matrix, you can notice a fluctuation in the fare. Our agent may sell out of certain inventory or specific seats on the aircraft when they identify a ticket that works for you and book it. This also causes the airfare to vary. The airline then gives customers more options, and the newly available seats or class can cost more. As a result, the airline that is shown on the website could not be the one you ultimately choose to book.",
  },
  {
    question: "HOW TO SELECT SPECIAL SEATS WHEN ONBOARD?",
    answer:
      "Please let us know in advance if you would prefer an aisle or a window seat in order to request a special seat. When checking in online, several airlines allow passengers to choose their seat. Our travel specialists will reserve your seat and submit a request to the airline if you would like. Please be aware, though, that our representatives cannot promise this as it is merely a request. Particularly if you are traveling on a low-cost carrier, the choice might not be available and you would have to pay more for the same.",
  },
  {
    question: "HOW TO KNOW THAT I HAVE A CONFIRMED BOOKING?",
    answer:
      "We give you a confirmation email with all the ticket details, including the advertised airfare, as soon as you finish the online booking request. The email confirming your reservation indicates that we have received it, and our representatives will immediately begin searching for flights to the location of your choice.",
  },
  {
    question: "WHAT IS A HOLIDAY PACKAGE ON AirLineDealHub?",
    answer:
      "A flight and hotel are combined in a holiday package created by AirLineDealHub vacation specialists, which entitles you to better deals than if you order the services separately. Typically, the bundle shown is for one person and includes double sharing.",
  },
  {
    question:
      "WHAT ARE THE BENEFITS OF PURCHASING A HOLIDAY PACKAGE WITH AirLineDealHub?",
    answer:
      "You can save time and money by purchasing a holiday package from AirLineDealHub. With the Book Now, Pay Later option, our vacation packages offer the cheapest ticket available. After that, we bargain for lower lodging rates to give you even more savings. You are free to travel on any day and remain for however long you like. You are not restricted to a set amount of days by us.",
  },
  {
    question:
      "HOW DO I KNOW IF THE HOLIDAY PACKAGE I PURCHASED IS WORTH MY MONEY?",
    answer:
      "If you are flexible with your vacation dates, AirLineDealHub specialists advise you to go during the off-peak season. We advise you to stay away from the weekends and important holidays. Aside from that, we have seen a pattern that indicates the cheapest airfares, if you are looking for a flight, are found on Tuesdays, Wednesdays, and occasionally Saturdays. Additionally, the cost of lodging is lower on weekdays than on weekends. To receive the best holiday rates, you can make your reservation on one of these days. We strongly advise against selecting Friday departure and Sunday return if you intend to travel to destinations like Orlando or Vegas. These are the most expensive days to visit these locations. The weekends are the most costly for places like Orlando, Jackson Hole, and Las Vegas. Additionally, packages in Chicago, a corporate hub, are less expensive on weekends. That being said, our agents are knowledgeable about industry standards and will do their best to advise you on the best available vacation packages.",
  },
  {
    question:
      "WHEN I AM BOOKING A HOLIDAY PACKAGE, CAN I OPT FOR A FLIGHT OR A HOTEL OF MY CHOICE?",
    answer:
      "You certainly can. Packages for AirLineDealHub are completely personalized. Based on pricing, location, and reviews, we combine the options that include the travel service you need. You could be requiblue to pay our service fee in addition to the fare or tariff difference, if applicable, if you wish to choose the hotel or flight of your choosing. By getting in touch with AirLineDealHub professionals, you can receive a personalized vacation package of your choosing.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-gray-900 font-bold text-center border-b border-blue-600 pb-4">
          Frequently Asked Questions
        </h1>

        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`my-8 border border-blue-600 rounded-tl-2xl rounded-br-2xl overflow-hidden `}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between bg-gradient-to-r from-blue-800 to-blue-600 px-6 py-4 text-left text-sm sm:text-base font-semibold uppercase tracking-wide hover:opacity-90 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <FaQuestionCircle className="text-white text-lg" />
                {faq.question}
              </div>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && faq.answer && (
              <div className="bg-gray-100 text-gray-900 px-6 py-4 text-sm sm:text-base leading-relaxed border-t border-blue-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;