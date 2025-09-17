import React from 'react'

const Damage_Management_Policy = () => {
  return (
    <section className="min-h-screen border-b border-gray-300 bg-gray-100 text-gray-800 px-4 py-10">
      {/* Pill-shaped title */}
      <h1 className="text-4xl max-w-4xl mx-auto font-bold text-center border-b border-blue-600 pb-4 text-blue-700">
        Car Rental – Damage Management Policy
      </h1>

      <div className="max-w-4xl mt-8 mx-auto space-y-10 leading-relaxed text-sm md:text-base">
        {/* 1 ─ What occurs… */}
        <section>
          <h3 className="font-bold text-lg md:text-xl mb-2 text-blue-600">
            What occurs if you damage the car while it’s being rented?
          </h3>
          <p>
            Our renters generally drive defensively, and accidents don’t happen
            very often. Thus, rather than being the norm, car damage is the
            exception rather than the rule. But it’s important to consider how
            we’re going to deal with the damage if it happens.
          </p>
          <p className="mt-3">
            To help you understand the cost you will be charged for any damage
            you do to the car while renting it, AirLineDealHub Holidays has
            developed a clear damage management policy. Please carefully read
            our&nbsp;
            <span className="underline">Terms and Conditions</span> for more
            details.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>You may not be fully liable.</li>
            <li>
              Your liability for the damage may be limited or nonexistent,
              depending on the type of rental protection you purchased.
            </li>
          </ul>
        </section>

        {/* 2 ─ Types of Damage */}
        <section>
          <h3 className="font-bold text-lg md:text-xl mb-2 text-blue-600">Types of Damage</h3>
          <p className="mb-3">
            The cost of damages will change based on the type of damage.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>"Light Damage"</strong> includes any minor harm done to
              the car as well as any misplacement, theft, or harm done to the
              car’s accessories, papers, or keys, as appropriate. Any minor
              dents, chips, or scratches to any part of the car are considered
              light damage.
            </li>
            <li>
              <strong>"Tyre Replacement"</strong> describes any damage to the
              tires that requires a new tire to be installed on the car.
            </li>
            <li>
              <strong>"Total Loss"</strong> describes a situation in which we
              determine that the vehicle’s damage has become too great to be
              repaired, or that doing so would be not feasible or impossible.
            </li>
            <li>
              <strong>"Serious Damage"</strong> describes any damage to the car
              other than minor dents, tire replacements, or total loss.
            </li>
          </ul>
        </section>

        {/* 3 ─ Damages during return */}
        <section>
          <h3 className="font-bold text-lg md:text-xl mb-2 text-blue-600">
            DAMAGES IDENTIFIED DURING VEHICLE RETURN
          </h3>
          <p className="mb-3">
            When you bring the car back to us, we examine it in front of you.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              We will send you an invoice detailing the necessary charges if
              light damage is found, and you sign the vehicle’s statement of
              return indicating your acceptance and consent to the damage. As
              per our policies, a Light Damage Administration Charge will be
              included in these expenses.
            </li>
            <li>
              We will have the damage examined and provide you with the
              following documents if we find significant damage or believe the
              car may be a total loss and you sign the statement of return
              voluntarily acknowledging and agreeing to the degree of damage.
            </li>
            <li>
              Vehicle return statement with damage details include:
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Images of the damage that occurred</li>
                <li>
                  An invoice outlining all applicable fees will be provided,
                  along with (i) an engineer’s charge for evaluating the damage,
                  excluding tyre and windscreen damage, and (ii) a charge for
                  our loss of use of the vehicle as a result of its
                  immobilization.
                </li>
                <li>
                  The costs of the Light Damage Administration Charge, Serious
                  Damage, Tyre or Windscreen Damage Administration Charges, and
                  Engineer’s Charge are specified at the time of booking.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* 4 ─ Damages after finished */}
        <section>
          <h3 className="font-bold text-lg md:text-xl mb-2 text-blue-600">
            DAMAGES IDENTIFIED AFTER THE RENTAL IS FINISHED
          </h3>
          <p className="mb-3">
            After you complete your rental and leave, we will inspect the car
            and if we then find any damage, we will provide you with the
            following documentation alongside the vehicle return statement:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Images of the damage that occurred</li>
            <li>
              The invoice with a breakdown of the costs involved. It will
              include an administration charge (either the Serious, Tyre, or
              Windscreen Damage Administration Charges for Serious Damage,
              depending on which one applies). If the damage is serious or
              total, it will also include an engineer’s charge for assessing the
              damage (unless it’s Tyre or Windscreen Damage), as well as a
              charge for our loss of use of the vehicle.
            </li>
          </ul>
        </section>

        {/* 5 ─ Claims */}
        <section>
          <h3 className="font-bold text-lg md:text-xl mb-2 text-blue-600">CLAIMS</h3>
          <p>
            Within 14 days of receiving the documentation, please send us an
            email or notification if you have any questions about the identified
            damage or the associated charges. We may send you an invoice for the
            required fees if we don’t hear from you after the first 14 days.
          </p>
          <p className="mt-3">
            Please contact our customer service agent at{" "}
            <a
              href="mailto:support@AirLineDealHub.com"
              className="text-blue-500 underline hover:text-blue-700"
            >
              support@AirLineDealHub.com
            </a>{" "}
            or give us a call at{" "}
            <a
              href="tel:+18339142482"
              className="text-blue-500 underline hover:text-blue-700"
            >
              (888) 507-5909
            </a>{" "}
            if you have any questions concerning your car rental damage
            documentation or fees.
          </p>
        </section>
      </div>
    </section>
  )
}

export default Damage_Management_Policy
