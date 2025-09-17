import { useEffect, useRef } from "react";

const Home = () => {
   const scriptContainerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const script = document.createElement("script");
      script.src =
        "https://tpemb.com/content?currency=usd&trs=451608&shmarker=533736&show_hotels=false&powered_by=false&locale=en_us&searchUrl=www.aviasales.com%2Fsearch&primary_override=%23007BFF&color_button=%23007BFF&color_icons=%23007BFF&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%233399FF&border_radius=10&no_labels=true&plain=true&promo_id=7879&campaign_id=100"
      script.async = true;
      script.charset = "utf-8";
      scriptContainerRef.current?.appendChild(script);
    }, 100); // Delay to ensure container is rendered

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577278254637-a8b6a7f3614e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3eW9ya3xlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Search Container */}
        {/* <div className="relative z-10 bg-purple-50 p-4 rounded-xl shadow-lg w-full max-w-6xl">
         
          <div className="flex flex-wrap gap-4 mb-4">
            <select className="bg-transparent border-b-2 border-transparent hover:border-purple-600 focus:outline-none focus:border-purple-600">
              <option>Round trip</option>
              <option>One way</option>
            </select>
            <select className="bg-transparent border-b-2 border-transparent hover:border-purple-600 focus:outline-none focus:border-purple-600">
              <option>Traveler 1</option>
              <option>Traveler 2</option>
            </select>
            <select className="bg-transparent border-b-2 border-transparent hover:border-purple-600 focus:outline-none focus:border-purple-600">
              <option>Economy</option>
              <option>Business</option>
            </select>
          </div>

         
          <form className="grid grid-cols-1 md:grid-cols-5 gap-2">
           
            <div className="flex items-center border rounded-md bg-white p-2">
              <MapPin className="text-blue-900 mr-2" size={20} />
              <input
                type="text"
                placeholder="Leaving From"
                className="flex-1 outline-none"
              />
            </div>

          
            <div className="flex items-center border rounded-md bg-white p-2">
              <MapPin className="text-blue-900 mr-2" size={20} />
              <input
                type="text"
                placeholder="Where To"
                className="flex-1 outline-none"
              />
            </div>

            
            <div className="flex items-center border rounded-md bg-white p-2">
              <Calendar className="text-blue-900 mr-2" size={20} />
              <input
                type="date"
                className="flex-1 outline-none"
                defaultValue="2025-08-12"
              />
            </div>

       
            <div className="flex items-center border rounded-md bg-white p-2">
              <Calendar className="text-blue-900 mr-2" size={20} />
              <input
                type="date"
                className="flex-1 outline-none"
                defaultValue="2025-08-13"
              />
            </div>

            
            <button
              type="submit"
              className="flex items-center justify-center bg-blue-700 text-white rounded-md px-4 py-3 hover:bg-blue-600 transition"
            >
              <Search className="mr-2" size={18} /> Search
            </button>
          </form>
        </div> */}

        <div className="relative z-10 bg-purple-50 p-4 rounded-xl shadow-lg w-full max-w-6xl">
          <div ref={scriptContainerRef} />
        </div>
      </section>
      <section className="bg-blue-500 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          {/* Item 1 */}
          <div className="flex items-start space-x-3">
            <img
              src="https://www.travelocompare.us/images/home/service1.svg"
              alt="Booking Icon"
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-semibold text-lg">Simple Booking Process</h3>
              <p className="text-sm text-gray-200">Search, Compare, Book</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start space-x-3">
            <img
              src="https://www.travelocompare.us/images/home/service2.svg"
              alt="Travel Expert Icon"
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-semibold text-lg">Speak To Travel Experts</h3>
              <p className="text-sm text-gray-200">
                Connect over call for help
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start space-x-3">
            <img
              src="https://www.travelocompare.us/images/home/service3.svg"
              alt="User Friendly Icon"
              className="w-8 h-8"
            />
            <div>
              <h3 className="font-semibold text-lg">User-Friendly Platform</h3>
              <p className="text-sm text-gray-200">
                The one-stop destination for travel
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start space-x-3">
            <img
              src="https://www.travelocompare.us/images/home/service4.svg"
              alt="Transparency Icon"
              className="w-8 h-8"
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
            <h2 className="text-4xl font-bold text-gray-900">
              Popular Destination
            </h2>
            <p className="text-gray-500">
              So many places.. So little time! Hurry up.
            </p>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dubai */}
            <div className="relative rounded-xl overflow-hidden group">
              <img
                src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                alt="Dubai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-bold">Dubai</h3>
                <p className="text-sm">United Arab Emirates</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* New York */}
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1577278254637-a8b6a7f3614e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3eW9ya3xlbnwwfHwwfHx8MA%3D%3D"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">New York</h3>
                  <p className="text-sm">United States</p>
                </div>
              </div>

              {/* Bangkok */}
              <div className="relative rounded-xl overflow-hidden group">
                <img
                  src="https://www.travelocompare.us/images/home/bangkok.webp"
                  alt="Bangkok"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Bangkok</h3>
                  <p className="text-sm">Thailand</p>
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
            <h2 className="text-[28px] font-bold text-[#1e1e1e]">
              Popular Deals
            </h2>
            <p className="text-[#555]">Come let's fly</p>
          </div>

          {/* Deals Grid */}
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-5 flex justify-between items-center border border-gray-200">
              <div className="flex items-center gap-3">
               
                <div>
                  <div className="text-xl font-bold">LAX ✈ LAS</div>
                  <div className="text-sm text-[#555]">Oct-17 – Oct-20</div>
                </div>
              </div>
              <a
                href="#"
                className="border border-[#1a2a7a] px-4 py-2 rounded-full text-[#1a2a7a] font-medium hover:bg-[#1a2a7a] hover:text-white transition"
              >
                Book Now
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-5 flex justify-between items-center border border-gray-200">
              <div className="flex items-center gap-3">
               
                <div>
                  <div className="text-xl font-bold">MCO ✈ ORD</div>
                  <div className="text-sm text-[#555]">Oct-20 – Oct-28</div>
                </div>
              </div>
              <a
                href="#"
                className="border border-[#1a2a7a] px-4 py-2 rounded-full text-[#1a2a7a] font-medium hover:bg-[#1a2a7a] hover:text-white transition"
              >
                Book Now
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-5 flex justify-between items-center border border-gray-200">
              <div className="flex items-center gap-3">
               
                <div>
                  <div className="text-xl font-bold">NYC ✈ MIA</div>
                  <div className="text-sm text-[#555]">Nov-01 – Nov-05</div>
                </div>
              </div>
              <a
                href="#"
                className="border border-[#1a2a7a] px-4 py-2 rounded-full text-[#1a2a7a] font-medium hover:bg-[#1a2a7a] hover:text-white transition"
              >
                Book Now
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg p-5 flex justify-between items-center border border-gray-200">
              <div className="flex items-center gap-3">
              
                <div>
                  <div className="text-xl font-bold">NYC ✈ MIA</div>
                  <div className="text-sm text-[#555]">Nov-01 – Nov-05</div>
                </div>
              </div>
              <a
                href="#"
                className="border border-[#1a2a7a] px-4 py-2 rounded-full text-[#1a2a7a] font-medium hover:bg-[#1a2a7a] hover:text-white transition"
              >
                Book Now
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg p-5 flex justify-between items-center border border-gray-200">
              <div className="flex items-center gap-3">
               
                <div>
                  <div className="text-xl font-bold">NYC ✈ MIA</div>
                  <div className="text-sm text-[#555]">Nov-01 – Nov-05</div>
                </div>
              </div>
              <a
                href="#"
                className="border border-[#1a2a7a] px-4 py-2 rounded-full text-[#1a2a7a] font-medium hover:bg-[#1a2a7a] hover:text-white transition"
              >
                Book Now
              </a>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-lg p-5 flex justify-between items-center border border-gray-200">
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-xl font-bold">NYC ✈ MIA</div>
                  <div className="text-sm text-[#555]">Nov-01 – Nov-05</div>
                </div>
              </div>
              <a
                href="#"
                className="border border-[#1a2a7a] px-4 py-2 rounded-full text-[#1a2a7a] font-medium hover:bg-[#1a2a7a] hover:text-white transition"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

           {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Embark on your remedial journey stress-free with AirLineDealHub,
              your trusted independent travel portal. Unlike others, we have no
              airline affiliations, ensuring unbiased and optimal choices for
              our users. Proudly under the umbrella of{" "}
              <strong>AirLineDealHub</strong>, AirLineDealHub prioritizes
              your desires and requirements. We welcome you to the most reliable
              and one-stop destination for all your travel needs.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are a travel company that puts our client’s desires and
              requirements as our top-most priority. We can fulfill all your
              travel dreams and needs without any hassle. We are a travel
              planning and booking platform that offers you class-apart travel
              services at the most affordable prices.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww"
              alt="About us"
              className="rounded-2xl relative z-10 shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
