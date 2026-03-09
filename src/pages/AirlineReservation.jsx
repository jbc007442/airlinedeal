import { useEffect, useState, useRef } from "react";
// import "react-datepicker/dist/react-datepicker.css";
import beachImg from "../assets/Aero.jpg";
import toll from "../assets/Tollfree.jpg";
import {
  Users,
  Heart,
  Plane,
  Phone,
  ClockAlert,
  X,
  PhoneCall,
} from "lucide-react";
import Searchbar from "../components/Searchbar.jsx";

const reasons = [
  {
    icon: Users,
    title: "Family Travel",
    desc: `Family travel is more than just a trip; it's an opportunity to reconnect, bond, and create lifelong memories. From multi-generational vacations to weekend getaways with your children, we ensure that every moment is meaningful. Our curated family packages include activities that cater to all age groups,`,
  },
  {
    icon: Heart,
    title: "Honeymoon",
    desc: `A honeymoon is the most cherished trip a couple takes, and we make it magical. Whether you dream of pristine beaches, cozy mountain cabins, or romantic European cities, we tailor your journey to match your love story. Our luxurious honeymoon packages include private transfers, couple spa treatments, candlelit dinners, and exclusive experiences. `,
  },
  {
    icon: Plane,
    title: "Travel Plans",
    desc: `We believe that every travel plan should be effortless and exciting. Whether it’s a last-minute business trip or a year-in-the-making bucket list adventure, our team handles every aspect—flights, hotels, transfers, tours, and more. We specialize in creating end-to-end itineraries that match your budget, interests, and schedule.`,
  },
];

const WhyTravelWithUs = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Why Travel with Us
        </h2>
        <p className="text-lg text-gray-600">
          We create travel experiences that are meaningful, luxurious, and
          unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-sm rounded-2xl p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
              <item.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 text-justify leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const AirlineReservations = () => {
  const scriptContainerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  // Show modal only on mobile when page reloads
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src = "";
      script.async = true;
      script.charset = "utf-8";
      scriptContainerRef.current?.appendChild(script);
    }, 100); // Delay to ensure container is rendered

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Modal for mobile */}
      {showModal && (
        <a href="tel:+18885016590">
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
              <h1 className="text-xl font-bold text-blue-600">Airlinedealhub</h1>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+18885016590"
                  className="flex items-center gap-1 text-gray-800 font-semibold"
                >
                  <PhoneCall /> (888) 501-6590
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="bg-blue-800 text-white py-3 text-center font-semibold text-lg">
              Air Reservations
            </div>

            <div className="flex-1 flex flex-col items-center justify-start px-6 py-8 overflow-y-auto">
              <img
                src={toll}
                alt=""
                className="mx-auto rounded-full border-4 border-blue-200 w-40 h-40 mb-20"
              />

              <p className="text-gray-800 text-lg font-medium mb-6">24/7 Reservation & Support</p>

              <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-6">
                <button className="bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                  New Booking
                </button>
                <button className="bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Changes
                </button>
                <button className="bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Cancellation
                </button>
                <button className="bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                  Customer Service
                </button>
              </div>

              <a
                href="tel:+18888081635"
                className="flex items-center justify-center gap-2 w-full max-w-sm bg-orange-500  text-white py-3 rounded-full font-bold text-lg shadow-lg hover:from-orange-600 hover:to-red-600 transition transform hover:scale-105"
              >
                <span className="phone-wave">
                  <PhoneCall className="w-6 h-6 relative z-10 text-white" />
                </span>{' '}
                (888) 501-6590
              </a>

              <p className="mt-4 text-blue-700 text-sm font-medium text-center">
                No Hold – Calls Answered in 5 Seconds
              </p>
            </div>

            <div className="bg-blue-800 text-white py-3 text-center text-lg font-semibold">
              📞 (888) 501-6590
            </div>
          </div>
        </a>
      )}

      {!showModal && (
        <>
          <section
            className="relative w-full lg:h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${beachImg})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Content wrapper */}
            <div className="relative z-20 flex flex-col items-center justify-center px-6 md:px-16 py-12 w-full">
              {/* ✅ Your Searchbar placed here */}
              <Searchbar />
            </div>
          </section>

          <WhyTravelWithUs />

          <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Airline Reservation</h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-base leading-relaxed text-justify">
                  The technologies that enable an airline to sell its inventory (seats) are known as
                  airline reservation systems (ARS). Schedules, rates, and a database of
                  reservations (or passenger name records) and tickets issued (if appropriate) are
                  all included. ARSs are a component of passenger service systems (PSS), which are
                  programs that facilitate face-to-face communication with travelers. Eventually,
                  the computer reservations system (CRS) replaced ARS. Reservations for a specific
                  airline are made through a computer reservation system that links with a global
                  distribution system (GDS), which facilitates reservations for the majority of
                  major airlines in a single system for travel agents and other distribution
                  channels.
                </p>
              </div>

              {/* Reservation by Phone */}
              <div className="bg-white shadow-md rounded-2xl p-8 mb-12 border border-gray-100">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
                  Airline Reservation Phone Number
                </h3>
                <p className="text-gray-700 text-sm font-bold leading-relaxed mb-4">
                  You can take the following actions to book an airline reservation over the phone:
                </p>
                <p className="list-disc list-inside text-gray-600 text-sm leading-relaxed space-y-2">
                  Visit the airline's official website to make your reservation. Search for their
                  customer care section or contact details. Locate the Telephone Number: Look for a
                  phone number associated with booking, reservations, or customer support once you
                  are on the website. Typically, the "Contact Us" or "Support" pages contain the
                  contact details. Give the airline a call: Wait for a customer support agent to
                  help you by dialing the number you discovered. Have all of your trip information
                  ready, including the destination, dates, number of passengers, and any special
                  needs. Booking Procedure: The customer support agent will walk you through the
                  procedure, offering flight choices and answering any questions you might have.
                  Payment: In order to validate your reservation, you will need to submit payment
                  details. You can try looking online or going to a local travel agency that can
                  assist you with making the reservation over the phone if you can not find the
                  airline's phone number on their website. It is a good idea to ask about any
                  potential fees during the call because certain airlines might charge an extra
                  price for reservations booked over the phone.
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  💡 Tip: Some airlines may charge a small fee for reservations made over the phone,
                  so always confirm during your call.
                </p>
              </div>

              {/* Assistance Section */}
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-blue-900 mb-2">
                  Flight Booking, Changes, Cancellations & Name Corrections – 24/7 Assistance
                </h3>
                <p className="text-gray-700 text-sm font-medium">
                  Get Instant Help From Certified Travel Agents
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">Our Services</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-2">
                    <li>✅ New Flight Bookings – Domestic & International Routes</li>
                    <li>✅ Flight Date & Time Changes</li>
                    <li>✅ Name Correction or Passenger Details Update</li>
                    <li>✅ Ticket Cancellations & Refund Support</li>
                    <li>✅ Seat Upgrade or Special Request Assistance</li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3">
                    We help you find the best available options through trusted airline systems to
                    make your travel smooth and hassle-free.
                  </p>
                </div>

                {/* Right Side */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">Why Choose Us</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm leading-relaxed space-y-2">
                    <li>🌐 24/7 Customer Support via Phone</li>
                    <li>⚡ Fast and Reliable Booking Assistance</li>
                    <li>🧾 Transparent Policies with No Hidden Fees</li>
                    <li>👨‍💼 Experienced Travel Consultants</li>
                    <li>🔒 Safe & Secure Payment Channels</li>
                  </ul>
                </div>
              </div>

              {/* How It Works */}
              <div className="mt-16 bg-blue-50 rounded-2xl p-8 shadow-inner">
                <h3 className="text-2xl font-semibold text-center text-blue-800 mb-4">
                  How It Works
                </h3>
                <ol className="list-decimal list-inside text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto space-y-2">
                  <li>
                    📞 <strong>Call Our Support Line</strong> – Speak with a trained agent
                    immediately.
                  </li>
                  <li>
                    🧳 <strong>Share Your Travel Details</strong> – Date, destination, and airline
                    preferences.
                  </li>
                  <li>
                    ✈️ <strong>Get Options & Confirm</strong> – Receive the best available flight
                    solutions.
                  </li>
                  <li>
                    💳 <strong>Secure Payment & Confirmation</strong> – Get instant confirmation via
                    email or SMS.
                  </li>
                </ol>
                <p className="text-center text-gray-600 text-sm mt-6">
                  We are an independent travel service provider and are not directly affiliated with
                  any airline. Our agents assist travelers in managing reservations, changes, and
                  cancellations through authorized airline systems.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Flight Reservations Made Easy with{' '}
                <span className="text-blue-600">Airlinedealhub</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Whether you’re planning a quick getaway or a long vacation,
                <span className="font-semibold"> Airlinedealhub </span> ensures hassle-free flight
                bookings, best fares, and 24/7 travel support. Fly smarter, not harder.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-xl transition">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
                  <Plane />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Flight Deals</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Find exclusive airfare discounts and offers with Airlinedealhub. Save more every
                  time you book.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-xl transition">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
                  <ClockAlert />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexible Booking</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Change of plans? No worries. Enjoy flexible flight reservation options with easy
                  modifications.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 text-center hover:shadow-xl transition">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6">
                  <Phone />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">24/7 Travel Support</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our experts are here around the clock to assist you with booking, cancellations,
                  or queries.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <a
                href="tel:+18885016590"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold text-lg shadow-lg hover:opacity-90 transition"
              >
                Book Your Flight Now <Plane />
              </a>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AirlineReservations;



// Airlines Reservations