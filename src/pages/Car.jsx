import { Link } from 'react-router-dom';
import car from '../assets/car.jpg';
import com from '../assets/com.jpg';
import t from '../assets/te.jpg';
import l from '../assets/lu.jpg';
import v from '../assets/van.jpg';
import g from '../assets/girl.jpg';
import { Percent, Clock4, CheckCircle } from 'lucide-react';

const carTypes = [
  {
    title: 'Cars',
    description: 'Choicest range of vehicles that are compact and fuel-efficient',
    image:
      com,
  },
  {
    title: 'Electric',
    description: 'Drive eco-friendly and sustainable electric, hybrid or plug-in cars',
    image:
      t,
  },
  {
    title: 'Prestige',
    description: 'Ultra-luxury rides that are comfort-first and innovative marvels',
    image: l,
  },
  {
    title: 'Vans',
    description: 'Spacious plus-size vehicles that are comfortable and secure',
    image: v,
  },
];

const Car = () => {
  return (
    <>
      <section className="w-full bg-white text-center pb-12 relative">
        {/* Image with Tagline Overlay */}
        <div className="max-w-7xl mx-auto relative rounded-lg overflow-hidden">
          <img
            src={car}
            alt="Car Rental Banner"
            className="w-full object-cover h-64 md:h-[600px]"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <h1 className="text-white text-2xl md:text-4xl font-bold px-4">
              Drive Your Journey with Comfort & Savings
            </h1>
          </div>
        </div>

        {/* Text Below Image */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-8 mb-2">
          Cheap Car Rentals on BookSkyTrip
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          Now book car rentals on an array of new car models all around Europe and the United
          States. Get the best deals that offer you the best value for inter-city trips and make the
          most of your on-road experiences. Select from affordable cars, luxury vehicles or fleets
          suitable for an off-road adventure.
        </p>
      </section>

      <section className="w-full bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carTypes.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden "
            >
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{car.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{car.description}</p>
                <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition">
                  See More
                </button>
              </div>
              <img src={car.image} alt={car.title} className="w-full h-64 object-cover mt-auto" />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
          {/* Text + Icons Overlayed */}
          <div className="relative z-10 w-full md:w-1/2 p-6 md:p-12 bg-gradient-to-r from-white/90 via-white/70 to-transparent backdrop-blur-md">
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 text-orange-500 p-3 rounded-full">
                  <Percent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Additional Discounts</h3>
                  <p className="text-sm text-gray-700">
                    Get unpublished deals and exclusive promotional offers every time you rent with
                    us.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                  <Clock4 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Flexible Rentals</h3>
                  <p className="text-sm text-gray-700">
                    Choose from daily, weekly, or monthly rental plans that suit all kinds of travel
                    needs.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="bg-green-100 text-green-600 p-3 rounded-full">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Online Check-in</h3>
                  <p className="text-sm text-gray-700">
                    Reserve your car from anywhere using our fast and convenient online platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <div className="w-full md:w-1/2 h-72 md:h-auto">
            <img
              src={g}
              alt="Car Rental Benefits"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* CTA + Footer */}
        <div className="text-center mt-8">
          <a
            href="tel:8555016590"
            className="text-white font-bold text-lg px-6 py-3 bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition inline-block"
          >
            Call Us at : - (855) 501-6590
          </a>

          <p className="text-lg mt-2">and get assistance 24/7</p>
          <p className="text-xs text-gray-500 mt-4 max-w-2xl mx-auto mb-4">
            * All Car rental fares are non-transferable and non-refundable once the booking is
            confirmed.
            <a href="/service-fee" className="text-blue-600 underline ml-1">
              Our Service Fees
            </a>
            ,
            <a href="/tax-fee" className="text-blue-600 underline ml-1">
              Taxes and Fees
            </a>{' '}
            may be applicable. For more details, read our{' '}
            <Link to="/TermAndCondition" className="text-blue-600 underline">
              Terms and Conditions
            </Link>{' '}
            carefully.
          </p>
        </div>
      </section>
    </>
  );
};

export default Car;
