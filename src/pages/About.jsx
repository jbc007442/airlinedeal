
import { Check } from "lucide-react";

const About = () => {
  return (
    <>
      <section
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1577278254637-a8b6a7f3614e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3eW9ya3xlbnwwfHwwfHx8MA%3D%3D)` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About <br className="block md:hidden" /> Company
          </h1>
        </div>
      </section>
      <section className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              About Us
            </h2>
            <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                At <strong>AirLineDealHub</strong>,  we’re not just about
                booking flights — we’re about crafting meaningful travel
                experiences that elevate every journey.
              </p>
              <p>
                We believe travel should be seamless, enriching, and tailored to
                your needs. That’s why we blend smart technology with
                personalized service to help you explore more, spend less, and
                travel better.
              </p>
              <p>
                Whether you're seeking cultural immersion, luxury escapes, or
                family vacations, our team of experienced travel advisors
                ensures every itinerary is memorable and stress-free.
              </p>
              <p>
                Our core values — transparency, innovation, and integrity —
                shape everything we do. We’re committed to creating connections,
                inspiring discovery, and giving back to communities around the
                world.
              </p>
              <p>
                With AirLineDealHub, you're not just booking a trip — you're
                unlocking possibilities. Let’s plan something unforgettable.
              </p>
            </div>
          </div>
          {/* Image with background block */}
          <div className="relative w-fit">
            <div className="absolute bottom-[-20px] right-[-20px] w-[80%] h-[80%] bg-[#243C94] z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              alt="About bookskytrip"
              className="relative z-10 shadow-lg h-[500px]"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Why do you choose us?
          </h3>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base">
            {[
              "Personalized Service: Every trip is crafted uniquely for you.",
              "Extensive Packages: From luxury escapes to budget-friendly adventures.",
              "Local Knowledge: Travel like a local with insider insights..",
              "Sustainable Travel: Eco-friendly options that support local communities.",
              "24/7 Support: We’re with you at every step of your journey.",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="text-blue-900 mt-1 w-4 h-4" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;