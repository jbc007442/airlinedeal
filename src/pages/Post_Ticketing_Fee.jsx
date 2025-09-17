import React from 'react'

const Post_Ticketing_Fee = () => {
  return (
     <div className="max-w-7xl mx-auto py-10 px-4 min-h-screen text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">POST–TICKETING FEES</h2>

      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="min-w-[1200px] w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-900 text-white text-left">
            <tr>
              <th className="p-3 border">Applies To</th>
              <th className="p-3 border">For</th>
              <th className="p-3 border">Amount per Ticket</th>
            </tr>
          </thead>
          <tbody>
            {/* Agent Assisted Cancellation */}
            <tr className="bg-gray-50">
              <td className="p-3 border" rowSpan={2}>
                Agent Assisted Cancellation <sup className="text-blue-600">1</sup>
              </td>
              <td className="p-3 border">Request of Cancellation made within 24 hours of booking</td>
              <td className="p-3 border">
                <div>Domestic: $50</div>
                <div>International: $75</div>
                <div>(after 24 hrs) Business/First Class: $75</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="bg-blue-700 text-white text-center font-semibold p-2">
                Cancellation & Refunds (after 24 hrs)
              </td>
            </tr>

            {/* Flights Header */}
            <tr className="bg-gray-200 text-center font-semibold text-sm uppercase">
              <td colSpan={3}>FLIGHTS - Economy / Business / First</td>
            </tr>

            {/* Cancellation assisted by agent */}
            <tr className="bg-white">
              <td className="p-3 border" rowSpan={2}>Cancellation assisted by Agent - w/Future Cblueit</td>
              <td className="p-3 border">Domestic / International</td>
              <td className="p-3 border">
                $50 / $50 — Econ<br />
                $100 / $100 — Business
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">w/Refund</td>
              <td className="p-3 border">
                $100 / $250 — Econ<br />
                $250 / $250 — Business
              </td>
            </tr>

            {/* Changes Section */}
            <tr>
              <td colSpan={3} className="bg-blue-700 text-white text-center font-semibold p-2">
                Changes to Existing Bookings (Exchange)
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Within 10 days of new travel date <sup>2</sup></td>
              <td className="p-3 border">Domestic / International</td>
              <td className="p-3 border">
                $50 / $50 — Econ<br />
                $100 / $100 — Business
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Beyond 10 days of new travel date <sup>2</sup></td>
              <td className="p-3 border">Domestic / International</td>
              <td className="p-3 border">
                $100 / $250 — Econ<br />
                $250 / $250 — Business
              </td>
            </tr>

            {/* Hotel Section */}
            <tr>
              <td colSpan={3} className="bg-blue-700 text-white text-center font-semibold p-2">
                HOTEL
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Agent Assisted Cancellation</td>
              <td className="p-3 border">Within 24 hours</td>
              <td className="p-3 border">$50 (Dom) / $75 (Intl)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">After 24 hours</td>
              <td className="p-3 border">Within cancellation validity</td>
              <td className="p-3 border">$35 (Dom) / $50 (Intl)</td>
            </tr>

            {/* Holidays Section */}
            <tr>
              <td colSpan={3} className="bg-blue-700 text-white text-center font-semibold p-2">
                HOLIDAYS
              </td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Agent Assisted Cancellation</td>
              <td className="p-3 border">Within 24 hours</td>
              <td className="p-3 border">$50–75 (Flight) / $35 (Hotel)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Cancellation w/ Future Cblueit</td>
              <td className="p-3 border">After 24 hrs</td>
              <td className="p-3 border">$50 (Flight) / $50 (Hotel)</td>
            </tr>
            <tr className="bg-white">
              <td className="p-3 border">Cancellation w/ Refund</td>
              <td className="p-3 border">After 24 hrs</td>
              <td className="p-3 border">$100–250 (Flight) / $100 (Hotel)</td>
            </tr>

            {/* Special Assistance Footer */}
            <tr>
              <td colSpan={3} className="bg-blue-700 text-white text-center font-semibold p-2">
                Fees charged for an agent assisted refund or future airline cblueit for any of the reasons listed below <sup>3</sup>
              </td>
            </tr>
            <tr className="bg-white">
              <td colSpan={3} className="p-4 text-gray-700 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Death/Bereavement, Infant, Visa Issues, Duplicate Ticket</li>
                  <li>Routing/Medical Changes, UNMR, No Show, Name Correction, Ticket Validity</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footnotes */}
      <div className="text-xs text-gray-600 mt-6 space-y-2 leading-relaxed max-w-4xl mx-auto">
        <p><sup>1</sup> Our booking fees, all post-ticketing service fees are non-refundable & subject to change without prior notice.</p>
        <p><sup>2</sup> Date change fees depend on airline policies.</p>
        <p><sup>3</sup> Special services, name correction, no-show, denied boarding, and duplicate ticket cases require documentation.</p>
      </div>
    </div>
  )
}

export default Post_Ticketing_Fee