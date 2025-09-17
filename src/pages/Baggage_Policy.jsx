import React from 'react';

const Baggage_Policy = () => {
  return (
    <div className="bg-blue-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gray-100"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-center text-blue-600 tracking-wide">
          Baggage Information
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        
        {/* Carry-On Baggage */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
            Carry-On Baggage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Most airlines allow one carry-on bag and one personal item (such as a laptop bag or handbag) per passenger. 
            Carry-on bags must fit in the overhead bin and usually have a size limit of 
            <span className="text-blue-600 font-semibold"> 22 x 14 x 9 inches (56 x 36 x 23 cm)</span>, including handles and wheels. 
            Weight limits may vary by airline and destination.
          </p>
        </section>

        {/* Checked Baggage */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
            Checked Baggage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Checked baggage allowances depend on your airline and ticket type. Economy passengers generally get 
            <span className="text-blue-600 font-semibold"> 1 checked bag up to 23kg (50lbs)</span>, while business and first-class passengers 
            may get 2 or more bags. Oversized or overweight bags will incur additional fees.
          </p>
        </section>

        {/* Excess Baggage Charges */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
            Excess Baggage Charges
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If your bag exceeds the permitted weight or size, airlines may charge excess baggage fees ranging from 
            <span className="text-blue-600 font-semibold"> $50 to $200+</span> depending on the route and airline policy. These fees are usually 
            higher at the airport, so pre-book excess baggage online if possible.
          </p>
        </section>

        {/* Restricted Items */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
            Restricted Items
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Items like flammable liquids, sharp objects, and lithium-ion batteries may be restricted in carry-on or checked baggage. 
            Always check the airline’s list of dangerous goods before traveling.
          </p>
        </section>

        {/* Lost or Damaged Baggage */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
            Lost or Damaged Baggage
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In case of lost or damaged baggage, report it to the airline immediately at the airport. Keep your baggage tags 
            and travel receipts — they are essential for any compensation claim.
          </p>
        </section>

        {/* Tips for Travelers */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 border-l-4 border-blue-500 pl-3 mb-3">
            Tips for Travelers
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Label your bags with your name, email, and contact number.</li>
            <li>Weigh your bags at home before heading to the airport.</li>
            <li>Carry valuables and important documents in your hand luggage.</li>
            <li>Check airline baggage policies before departure.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Baggage_Policy;
