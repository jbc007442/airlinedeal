import React from "react";

const Disclaimer = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-12 px-4 border-b border-gray-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center border-b border-blue-600 pb-4 text-blue-700">
          Disclaimer
        </h1>

        <section className="mb-6">
          <p>
            AirLineDeals is an independent online travel agency operating under
            the umbrella of Your trip charge LLC. We are the resellers of travel
            products & services, i.e., vacation packages, hotels, flight deals &
            attractions. We are a travel company associated with travel
            consolidators and third-party travel suppliers. We are neither
            directly nor indirectly associated with any airlines. All prices
            quoted through us include all taxes and fees. The flight search
            engine used is a third-party tool provided solely for informational
            purposes; we are not associated with any company listed in it.
          </p>
          <p className="mt-4">
            All prices quoted through us include all taxes and fees. The flight
            search engine used on this website is a third-party tool provided
            for informational purposes only. AirLineDeals is not affiliated
            with any company listed in that tool.
          </p>
        </section>

        <section className="mb-6">
          <p>
            While the AirLineDeals website provides travelers with useful
            information, we disclaim any liability for harm resulting from the
            use of our services. Clients are encouraged to verify details
            independently and use discretion.
          </p>
          <p className="mt-4">
            In addition, the inclusion of third-party links on our site expands
            the range of information available to users. These links may lead to
            additional resources, enabling travelers to access a comprehensive
            array of insights and services beyond what AirLineDeals directly
            offers.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Third-Party Links</h2>
          <p>
            There may be links on our website to products, services, or websites
            owned by third parties. These external sites are linked for your
            convenience and do not imply any endorsement or responsibility for
            their availability, accuracy, or content. We advise users visiting
            any third-party websites to review their terms of service and
            privacy policies. Using these external websites may result in damage
            or loss, for which our travel website is not responsible.
          </p>
          <p className="mt-4">
            To protect you from potential harm, we emphasize that any
            transactions conducted with unaffiliated websites are outside of our
            service area.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Risk</h2>
          <p>
            Since we are the sole owners of this website, you acknowledge that
            using or consuming our content is at your own risk. Regarding the
            truthfulness, reliability, or sufficiency of our website or its
            contents, we make no claims or guarantees. Therefore, we disclaim
            all liability for any harm that may arise from using our website.
          </p>
          <p className="mt-4">
            By using our website, you agree to our terms and disclaimer. We
            consider that continued use implies acceptance of our policies and
            acknowledgment that you do so at your own risk. If you disagree with
            any part of this disclaimer, please stop using our website and its
            contents until you are fully satisfied.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;

