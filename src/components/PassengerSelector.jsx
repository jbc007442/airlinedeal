import { useState, useEffect, useRef } from "react";

const PassengerSelector = ({
  passengers = { adult: 1, child: 0, infant: 0 },
  setPassengers,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleChange = (type, delta) => {
    // ✅ Compute new value from current prop (not updater, since setPassengers expects direct new value)
    const safeCurrent = {
      adult: passengers?.adult ?? 0,
      child: passengers?.child ?? 0,
      infant: passengers?.infant ?? 0,
    };

    const total = safeCurrent.adult + safeCurrent.child + safeCurrent.infant;
    if (delta > 0 && total >= 27) return; // stop at max 27
    if (safeCurrent[type] + delta < 0) return; // stop at 0
    if (delta > 0 && safeCurrent[type] >= 9) return; // stop each type at max 9

    const newPassengers = {
      ...safeCurrent,
      [type]: safeCurrent[type] + delta,
    };

    setPassengers(newPassengers);
  };

  const totalPassengers =
    (passengers?.adult ?? 0) +
    (passengers?.child ?? 0) +
    (passengers?.infant ?? 0);

  const labels = {
    adult: "Adults",
    child: "Children",
    infant: "Infants",
  };

  const canDecrement = (type) => (passengers?.[type] ?? 0) > 0;
  const canIncrement = (type) => {
    const current = passengers?.[type] ?? 0;
    return current < 9 && totalPassengers < 27;
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Display Field */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full max-w-xs border border-gray-300 rounded-lg px-4 py-1.5 text-sm cursor-pointer bg-white shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="text-gray-700">
          {totalPassengers} Passenger{totalPassengers !== 1 ? "s" : ""}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-1 w-full max-w-xs bg-white shadow-xl rounded-lg border border-gray-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="p-4 space-y-4">
            {["adult", "child", "infant"].map((type) => (
              <div key={type} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 capitalize">
                  {labels[type]}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => canDecrement(type) && handleChange(type, -1)}
                    disabled={!canDecrement(type)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                      canDecrement(type)
                        ? "bg-blue-100 text-blue-600 hover:bg-blue-200 focus:bg-blue-200 ring-2 ring-blue-300"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    aria-label={`Decrease ${labels[type].toLowerCase()}`}
                  >
                    −
                  </button>
                  <div className="w-8 text-center text-sm font-semibold text-gray-900">
                    {passengers?.[type] ?? 0}
                  </div>
                  <button
                    type="button"
                    onClick={() => canIncrement(type) && handleChange(type, 1)}
                    disabled={!canIncrement(type)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                      canIncrement(type)
                        ? "bg-blue-100 text-blue-600 hover:bg-blue-200 focus:bg-blue-200 ring-2 ring-blue-300"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    aria-label={`Increase ${labels[type].toLowerCase()}`}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 focus:bg-blue-700 transition-all duration-200 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PassengerSelector;