import { useEffect, useState } from 'react';
import aero from '../assets/Aero.jpg';
import Searchbar from '../components/Searchbar';
import book from '../assets/booking.png';
import globe from '../assets/globe.png';
import user from '../assets/user.png';
import eye from '../assets/eye.png';
import paris from '../assets/paris.jpg';
import amster from '../assets/amster.jpg';
import dubai from '../assets/dubai.jpg';
import { useNavigate } from 'react-router-dom';
import { PhoneCall, X } from 'lucide-react';
import logo from '../assets/A.png';
import { Link, useLocation } from 'react-router-dom';
import DateNow from '../components/DateNow';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import toll from '../assets/Tollfree.jpg';
import expedia from '../assets/expedia.png';

const Flight = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Show modal only on mobile when page reloads
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowModal(true);
    }
  }, []);

  //header hide logic
  const location = useLocation();

  // hide entire header only on specific routes
  const hideHeaderRoutes = ['/results'];
  const hideHeader = hideHeaderRoutes.includes(location.pathname);

  if (hideHeader) return null;

  // ✅ Function to get formatted dates dynamically
  const getDynamicDates = () => {
    const today = new Date();
    const depart = new Date(today);
    depart.setDate(today.getDate() + 7);
    const ret = new Date(today);
    ret.setDate(today.getDate() + 14);

    const options = { month: 'short', day: '2-digit' };
    const departFormatted = depart.toLocaleDateString('en-US', options);
    const retFormatted = ret.toLocaleDateString('en-US', options);

    return `${departFormatted} – ${retFormatted}`;
  };

  const handleBookNow = (from, to) => {
    const today = new Date();
    const depart = new Date(today);
    depart.setDate(today.getDate() + 7);
    const ret = new Date(today);
    ret.setDate(today.getDate() + 14);

    const formatDate = (d) => d.toISOString().split('T')[0];

    const formDataToSend = {
      tripType: 'round',
      from: `${from} Airport`,
      to: `${to} Airport`,
      from_iata: from,
      to_iata: to,
      passengers: 1,
      adults: 1,
      children: 0,
      infants: 0,
      travelClass: 'Economy',
      depart: formatDate(depart),
      ret: formatDate(ret),
    };

    navigate('/results', { state: formDataToSend });
  };

  const deals = [
    { from: 'LAX', to: 'LAS' },
    { from: 'MCO', to: 'ORD' },
    { from: 'NYC', to: 'MIA' },
    { from: 'DFW', to: 'SFO' },
    { from: 'SEA', to: 'PHX' },
    { from: 'BOS', to: 'ATL' },
  ];

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
              Airlines Reservation
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
          <header className="bg-blue-500 text-white">
            <div className="container mx-auto flex justify-between items-center p-2 md:p-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="AirLineDealHub Icon"
                  className="h-8 w-auto md:h-14 transition-all"
                />
                <span className="text-sm md:text-xl font-extrabold tracking-wide text-white font-[Poppins] leading-none">
                  AirLine<span className="text-yellow-400">Deal</span>Hub
                </span>
              </Link>

              {/* Phone Number */}
              <div className="flex items-center gap-2 md:gap-3">
                {/* Phone Icon */}
                <span className="relative inline-flex h-7 w-7 md:h-10 md:w-10 rounded-full bg-blue-600 text-white items-center justify-center animate-pulse">
                  <PhoneCall size={16} className="md:size-6" />
                </span>

                {/* Phone Number */}
                <a
                  href="tel:8885016590"
                  className="font-bold text-white text-sm md:text-xl leading-none hover:text-yellow-300 transition"
                >
                  (888) 501-6590
                </a>
              </div>
            </div>
          </header>
          <section
            className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${aero})`,
            }}
          >
            <div className="px-4 md:px-8 lg:px-16 w-full">
              <Searchbar />
            </div>
          </section>
          <section className="bg-blue-500 py-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
              {/* Item 1 */}
              <div className="flex items-start space-x-3">
                <img
                  src={book}
                  alt="Booking Icon"
                  className="w-8 h-8 filter invert brightness-200"
                />
                <div>
                  <h3 className="font-semibold text-lg">Simple Booking Process</h3>
                  <p className="text-sm text-gray-200">Search, Compare, Book</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src={globe}
                  alt="Travel Expert Icon"
                  className="w-8 h-8 filter invert brightness-200"
                />
                <div>
                  <h3 className="font-semibold text-lg">Speak To Travel Experts</h3>
                  <p className="text-sm text-gray-200">Connect over call for help</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-3">
                <img src={user} alt="User Friendly Icon" className="w-8 h-8 " />
                <div>
                  <h3 className="font-semibold text-lg">User-Friendly Platform</h3>
                  <p className="text-sm text-gray-200">The one-stop destination for travel</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start space-x-3">
                <img
                  src={eye}
                  alt="Transparency Icon"
                  className="w-8 h-8 filter invert brightness-200"
                />
                <div>
                  <h3 className="font-semibold text-lg">Transparency</h3>
                  <p className="text-sm text-gray-200">Promising fair dealing</p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
              {/* Section Title */}
              <div className="mb-6">
                <h2 className="text-4xl font-bold text-gray-900">Popular Flight Destination</h2>
                <p className="text-gray-500">So many places.. So little time! Hurry up.</p>
              </div>

              {/* Destination Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Dubai */}
                <div className="relative rounded-xl overflow-hidden group">
                  <img
                    src={dubai}
                    alt="Dubai"
                    className="w-full h-[660px] object-fit group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">Dubai</h3>
                    <p className="text-sm">United Arab Emirate</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* New York */}
                  <div className="relative rounded-xl overflow-hidden group">
                    <img
                      src={paris}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">Paris</h3>
                      <p className="text-sm">France</p>
                    </div>
                  </div>

                  {/* Bangkok */}
                  <div className="relative rounded-xl overflow-hidden group">
                    <img
                      src={amster}
                      alt="Amster"
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">Amsterdam</h3>
                      <p className="text-sm">Netherland</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-100 py-10">
            <div className="max-w-[1100px] mx-auto px-5">
              {/* Section Heading */}
              <div className="mb-5">
                <h2 className="text-[28px] font-bold text-[#1e1e1e]"> Airlines Reservation</h2>
                <p className="text-[#555]">
                  Airlinedealhub offers you some incredible airfare discounts that will undoubtedly
                  improve your trip. These are the greatest and most recent offers we have
                  discovered. Stop waiting. Reserve them right away!
                </p>
              </div>

              {/* Deals Grid */}
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {deals.map((deal, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-5 flex justify-between items-center border border-gray-200 hover:shadow-lg transition"
                  >
                    <div>
                      <div className="text-xl font-bold">
                        {deal.from} ✈ {deal.to}
                      </div>
                      <div className="text-sm text-[#555]">{getDynamicDates()}</div>
                    </div>
                    <button
                      onClick={() => handleBookNow(deal.from, deal.to)}
                      className="border border-[#1a2a7a] px-4 py-2 rounded-full text-[#1a2a7a] font-medium hover:bg-[#1a2a7a] hover:text-white transition"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <p className=" text-red-500 my-1"> *Note: All fares are quoted in USD. </p>
                <p className="text-xs">
                  Last updated on Wednesday
                  <span className="text-red-500">
                    {' '}
                    <DateNow /> at 05:00 AM
                  </span>
                  , the fares mentioned above are for Round Trip flight tickets and inclusive of
                  fuel surcharges,{' '}
                  <Link to="/tax-fee" className="underline">
                    {' '}
                    service fee and taxes
                  </Link>{' '}
                  . Based on historical data, these fares are subject to change without prior notice
                  and cannot be guaranteed at the time of booking. Kindly go through our
                  <Link to="/TermAndCondition" className="underline">
                    {' '}
                    terms and conditions
                  </Link>{' '}
                  before booking.
                </p>
              </div>
            </div>
          </section>
          <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              {/* Heading */}
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">
                  Special Offers & Bookings on Airline Tickets
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Traveling the world doesn’t have to come at a high cost. At Airlinedealhub , we
                  help you discover cheap flight tickets to destinations across the globe. Whether
                  you're planning a short getaway, a business trip, or a long-awaited international
                  vacation, booking with us means saving on airfare while enjoying reliable travel
                  assistance every step of the way.
                </p>
              </div>

              {/* Why Choose Cheap Flights */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why Choose Cheap Flights?
                </h3>
                <p className="text-gray-600 mb-3">
                  Cheap flight tickets make travel more accessible, practical, and spontaneous. With
                  lower airfare, you can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Reallocate your budget toward hotels, dining, or experiences</li>
                  <li>Take more trips throughout the year</li>
                  <li>Travel with family or in groups without overspending</li>
                  <li>Make last-minute plans without worrying about high costs</li>
                </ul>
                <p className="mt-3 text-gray-600">
                  The key is knowing when, where, and how to book airline reservations—and that’s
                  where Airlinedealhub steps in.
                </p>
              </div>

              {/* Why Book With Us */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Book with Us?</h3>
                <p className="text-gray-600 mb-4">
                  Booking with Airlinedealhub offers more than just a seat on a plane—it’s a
                  complete, stress-free travel experience. Here’s why thousands of travelers trust
                  us when booking cheap flight with airline reservation:
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>
                    <strong>Personalized Flight Search Assistance</strong> – Our travel
                    professionals help you explore all options—budget carriers, flexible dates,
                    alternative airports—to secure the best available fares based on your
                    preferences.
                  </li>
                  <li>
                    <strong>User-Friendly Booking Platform</strong> – Our website is designed for
                    ease of use, with intuitive tools to help you search, filter, and compare cheap
                    flights quickly and efficiently.
                  </li>
                  <li>
                    <strong>Access to a Wide Range of Airlines</strong> – We provide access to
                    hundreds of domestic and international airlines—helping you find flights that
                    fit your schedule and budget.
                  </li>
                  <li>
                    <strong>24/7 Customer Support</strong> – Have questions before, during, or after
                    booking? Our team is here around the clock to help with any queries, changes, or
                    assistance you need.
                  </li>
                  <li>
                    <strong>Transparent Pricing – No Hidden Fees</strong> – What you see is what you
                    pay. We believe in clear, upfront pricing with no hidden costs or surprise
                    charges at checkout.
                  </li>
                  <li>
                    <strong>Options for Every Traveler</strong> – From economy to business class,
                    one-way to round-trip, direct or connecting—we offer a range of airline group
                    booking flight options to suit every traveler and budget.
                  </li>
                  <li>
                    <strong>Secure and Reliable Transactions</strong> – Book with peace of mind. Our
                    platform uses industry-standard encryption and payment security protocols to
                    protect your personal and payment information.
                  </li>
                  <li>
                    <strong>Price Match Assurance</strong> – If you come across a lower fare for the
                    same flight itinerary elsewhere, we’ll work with you to match it—ensuring you
                    always get the best possible price.
                  </li>
                </ol>
              </div>

              {/* Classes of Service */}
              <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Classes of Service</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg">Basic Economy Class</h4>
                  <p>
                    Take advantage of the cheapest airfare in Basic Economy. Complimentary
                    refreshments, soft drinks, in-flight entertainment, and cozy seating are
                    included. Passengers are permitted to bring one carry-on bag per ticket.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg">Economy Class</h4>
                  <p>
                    Includes Main Cabin Extra and Main Cabin options. Main Cabin Extra offers early
                    boarding, free alcoholic beverages, extra legroom, Wi-Fi, and entertainment.
                    Main Cabin includes complimentary snacks, soft drinks, Wi-Fi, and in-flight
                    entertainment.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg">Premium Economy</h4>
                  <p>
                    Wider seats with more legroom, priority check-in/boarding, chef-inspired meals
                    with beverages, plus amenities like headphones, bedding, skincare kits, USB
                    charging, and Wi-Fi.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg">Business Class</h4>
                  <p>
                    Options include business cabins and flagship business. Amenities include
                    lie-flat seats, chef-prepared meals, premium bedding, Wi-Fi, entertainment,
                    priority services, and access to flagship lounges.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg">First Class</h4>
                  <p>
                    Domestic and international options available. Amenities include priority
                    check-in, additional baggage allowance, premium dining, lie-flat seats,
                    entertainment, Wi-Fi, lounge access, and luxury amenity kits.
                  </p>
                </div>
              </div>

              {/* Baggage Policy */}
              <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Baggage Policy</h3>
              <p className="mb-4">
                Travelers may bring one complimentary carry-on bag plus a personal item (22 x 14 x 9
                inches). Domestic flights allow up to 50 lbs per bag, while business/first-class
                tickets may allow up to 70 lbs. Premium cabins may include up to 3 complimentary
                checked bags. Overweight or additional luggage may incur extra fees.
              </p>

              {/* Web Check-in */}
              <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Web Check-in</h3>
              <p className="mb-4">
                Passengers can check in online 24 to 1 hour before departure via the official
                website or mobile app. This service allows travelers to access boarding passes
                quickly and skip long airport lines.
              </p>

              {/* 24/7 Assistance */}
              <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">
                24/7 Post-Flight Booking Assistance
              </h3>
              <p className="mb-6">
                Our travel experts are available 24/7 to help with reservations, cancellations,
                passenger information updates, and refunds. We ensure seamless support and flexible
                options to meet your travel needs. Contact us anytime to manage your trip with
                confidence.
              </p>

              {/* Smart Ways */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Smart Ways to Book Cheap Flights
                </h3>
                <p className="text-gray-600 mb-3">
                  Getting the best price on a flight often comes down to strategy. Here are proven
                  tips to help you save:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Book in Advance:</strong> Plan your trip early—ideally 30–60 days before
                    your departure—for the most favorable rates.
                  </li>
                  <li>
                    <strong>Be Flexible with Dates:</strong> Slight changes in your travel schedule
                    can lead to big savings. Midweek flights (especially Tuesdays and Wednesdays)
                    are often cheaper than weekend travel.
                  </li>
                  <li>
                    <strong>Use Nearby Airports:</strong> Check flights departing from or arriving
                    at alternative airports near your destination for better deals.
                  </li>
                  <li>
                    <strong>Travel During Off-Peak Seasons:</strong> Avoid school holidays, major
                    festivals, or high-tourism months to find lower fares.
                  </li>
                  <li>
                    <strong>Mix and Match Airlines:</strong> Sometimes, booking different carriers
                    for outbound and return flights offers better value than round-trip tickets from
                    a single airline.
                  </li>
                </ul>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Take Off?</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  With Airlinedealhub, booking cheap flight tickets with airline reservation is
                  simple, reliable, and tailored to your travel style. Whether you're flying across
                  the country or across the globe, we’re here to help you travel smarter—and for
                  less.
                </p>
                <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                  Let your next adventure begin with the right flight, at the right price.
                </p>
              </div>
            </div>
          </section>
          <footer className="bg-gray-200 text-black text-sm">
            <div className=" py-10 px-6 grid md:grid-cols-4 gap-8 border-b border-gray-700">
              {/* Logo + Social */}
              <div className="col-span-1 flex flex-col items-center text-center space-y-4">
                {/* Logo & Heading */}
                <div className="flex flex-col items-center space-y-2">
                  <img src={logo} className="h-32 rounded" alt="Expedai Logo" />
                  <h2 className="text-3xl font-bold">
                    <span className="text-blue-600">Airlinedealhub</span>
                  </h2>
                </div>
              </div>

              {/* Important Links */}
              <div>
                <h3 className="text-blue-600 font-semibold mb-3">IMPORTANT LINKS</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/disclaimer">Disclaimer</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/baggage-policy">Baggage Policy</Link>
                  </li>
                  <li>
                    <Link to="/Advisory">Advisory Disclosure</Link>
                  </li>
                  <li>
                    <Link to="/cookie-policy">Cookie Policy</Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-blue-600 font-semibold mb-3">LEGAL</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/t&c" className="hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/price-match" className="hover:underline">
                      Price Match Promise
                    </Link>
                  </li>
                  <li>
                    <Link to="/taxes-fees" className="hover:underline">
                      Taxes & Fees
                    </Link>
                  </li>
                  <li>
                    <Link to="/post-ticketing-fee" className="hover:underline">
                      Post Ticketing Fee
                    </Link>
                  </li>
                  <li>
                    <Link to="/damage-policy" className="hover:underline">
                      Damage Management Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/service-fees" className="hover:underline">
                      Our Service Fees
                    </Link>
                  </li>
                  <li>
                    <Link to="/ccpa" className="hover:underline">
                      California Consumer Privacy Act
                    </Link>
                  </li>
                  <li>
                    <Link to="/gdpr" className="hover:underline">
                      GDPR
                    </Link>
                  </li>
                  <li>
                    <Link to="/cancel-policy" className="hover:underline">
                      Cancellation policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-blue-600 font-semibold mb-3">CONTACT US</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaMapMarkerAlt className="mt-1" />
                    <span>1798 D ST, HAYWARD, CA 94541 USA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhone />
                    <a href="tel:1-833-914-2482">(888) 501-6590</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEnvelope />
                    <a href="mailto:support@airlinedealhub.com">support@airlinedealhub.com</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Disclaimer and Terms */}
            <div className="text-gray-900 text-[12px] px-6 py-6 space-y-2 leading-relaxed">
              <p>
                <span className="font-bold">DISCLAIMER:</span> AirLineDealHub is an independent
                online travel agency operating under the umbrella of your trip charge LLC. We are
                the resellers of travel Products & services i.e. vacation packages, hotels, flight
                deals & attractions. We are a travels company associated with travels consolidators
                and 3rd party travels suppliers. We are neither directly or indirectly associated
                with any airlines. All prices quoted through us include all taxes and fees. The
                flight search engine used is a third-party tool used for just providing the
                information, we are not associated with any company available on it.
                <Link to="/disclaimer" className="text-blue-600 underline">
                  read more...
                </Link>
              </p>

              <p></p>

              <p>
                SUBJECT TO{' '}
                <a href="/service-fees" className="text-blue-600 underline">
                  Our Service Fees
                </a>{' '}
                AND{' '}
                <Link to="/fullfill" className="text-blue-600 underline">
                  Fulfill Policy
                </Link>
                . SEE AirLineDealHub{' '}
                <Link to="/cookie-policy" className="text-blue-600 underline">
                  Cookie Policy
                </Link>
              </p>

              <p>
                **$25 DISCOUNT: OFFERS AND DISCOUNTS ARE FOR A LIMITED TIME AND SUBJECT TO
                AVAILABILITY. SAVINGS APPLY ONLY TO AirLineDealHub SERVICE FEES ON SELECT
                UNPUBLISHED FARES AND PHONE-ONLY BOOKINGS. PROMOTIONS MAY BE MODIFIED OR
                DISCONTINUED WITHOUT PRIOR NOTICE. VALID UNTIL JUL, 31 2025, AT 11:59 PM EST.
                ADDITIONAL{' '}
                <Link to="t&c" className="text-blue-600 underline">
                  Terms & Conditions
                </Link>{' '}
                APPLY.
              </p>
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default Flight;
