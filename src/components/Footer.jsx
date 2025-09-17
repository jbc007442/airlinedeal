import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 text-black text-sm">
        <div className=" py-10 px-6 grid md:grid-cols-4 gap-8 border-b border-gray-700">
          {/* Logo + Social */}
          <div className="col-span-1 flex flex-col items-center text-center space-y-4">
            {/* Logo & Heading */}
            <div className="flex flex-col items-center space-y-2">
              <img src="" className="h-32 rounded" alt="Expedai Logo" />
              <h2 className="text-lg font-bold">
                <span className="text-red-600"></span> TRAVEL
              </h2>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-xl">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-red-600 cursor-pointer" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-red-600 cursor-pointer" />
              </a>
            </div>

            {/* Footer Image */}
            <div className="pt-2">
              <img
                src=""
                alt="Footer Logo"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-red-600 font-semibold mb-3">IMPORTANT LINKS</h3>
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
            <h3 className="text-red-600 font-semibold mb-3">LEGAL</h3>
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
            <h3 className="text-red-600 font-semibold mb-3">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>1805 HILL AVE HAYWARD, CA 94541 USA</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <a href="tel:1-833-914-2482">(888) 507-5909</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:support@AirLineDealHubs.com">
                  support@AirLineDealHubs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer and Terms */}
        <div className="text-gray-900 text-[12px] px-6 py-6 space-y-2 leading-relaxed">
          <p>
            <span className="font-bold">DISCLAIMER:</span> AirLineDealHub is an
            independent online travel agency operating under the umbrella of
            your trip charge LLC. We are the resellers of travel Products &
            services i.e. vacation packages, hotels, flight deals & attractions.
            We are a travels company associated with travels consolidators and
            3rd party travels suppliers. We are neither directly or indirectly
            associated with any airlines. All prices quoted through us include
            all taxes and fees. The flight search engine used is a third-party
            tool used for just providing the information, we are not associated
            with any company available on it.
            <Link to="/disclaimer" className="text-red-600 underline">
              read more...
            </Link>
          </p>

          <p></p>

          <p>
            SUBJECT TO{" "}
            <a href="#" className="text-red-600 underline">
              Our Service Fees
            </a>{" "}
            AND{" "}
            <Link to="/fullfill" className="text-red-600 underline">
              Fulfill Policy
            </Link>
            . SEE AirLineDealHub{" "}
            <Link to="/cookie-policy" className="text-red-600 underline">
              Cookie Policy
            </Link>
          </p>

          <p>
            **$25 DISCOUNT: OFFERS AND DISCOUNTS ARE FOR A LIMITED TIME AND
            SUBJECT TO AVAILABILITY. SAVINGS APPLY ONLY TO AirLineDealHub
            SERVICE FEES ON SELECT UNPUBLISHED FARES AND PHONE-ONLY BOOKINGS.
            PROMOTIONS MAY BE MODIFIED OR DISCONTINUED WITHOUT PRIOR NOTICE.
            VALID UNTIL JUL, 31 2025, AT 11:59 PM EST. ADDITIONAL{" "}
            <Link to="t&c" className="text-red-600 underline">
              Terms & Conditions
            </Link>{" "}
            APPLY.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
