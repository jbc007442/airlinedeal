import { useState, useEffect, useRef } from "react";
import Autosuggest from "react-autosuggest";
import { DateRange } from "react-date-range";
import airports from "../data/airports.js";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";
import {
  FaExchangeAlt,
  FaMapMarkerAlt,
  FaPlaneDeparture,
  FaCalendarAlt,
  FaUserFriends,
  FaPlus,
  FaMinus,
  FaChevronDown,
} from "react-icons/fa";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// ✅ Custom CSS for animation
const fadeInStyle = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn { animation: fadeInUp 0.25s ease-out; }
`;

const AirportInput = ({ placeholder, name, value, onChange, onSelect }) => {
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (input) => {
    const q = (input || "").trim().toLowerCase();
    if (!q) return [];
    return airports
      .filter((a) =>
        [a.city, a.name, a.iata].some((field) =>
          field?.toLowerCase().includes(q)
        )
      )
      .slice(0, 15);
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={({ value }) =>
        setSuggestions(getSuggestions(value))
      }
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={(s) => `${s.city} (${s.iata})`}
      renderSuggestion={(s) => (
        <div className="px-3 py-2 hover:bg-blue-50 transition-colors cursor-pointer">
          <strong>{s.iata}</strong> - {s.name} ({s.city})
        </div>
      )}
      onSuggestionSelected={(_, { suggestion }) =>
        onSelect(name, suggestion)
      }
      inputProps={{
        placeholder,
        value,
        onChange: (_, { newValue }) =>
          onChange({ target: { name, value: newValue } }),
        className:
          "w-full bg-gray-50 text-sm px-3 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all",
      }}
    />
  );
};

const SearchBar = () => {
  const navigate = useNavigate();
  const passengerBtnRef = useRef(null);
  const dropdownRef = useRef(null);
  const dateRef = useRef(null);
  const styleRef = useRef(null);

  // ✅ Inject fadeIn style
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = fadeInStyle;
    document.head.appendChild(style);
    styleRef.current = style;
    return () => document.head.removeChild(styleRef.current);
  }, []);

  const [form, setForm] = useState({
    tripType: "round",
    from: "",
    from_iata: "",
    to: "",
    to_iata: "",
    passengers: 1,
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: "Economy",
  });

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().setDate(new Date().getDate() + 7)), // ✅ +7 days
      key: 'selection',
    },
  ]);


  const [errors, setErrors] = useState({});
  const [showPassengers, setShowPassengers] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Dropdown close handler

  useEffect(() => {
  const handleClickOutside = (e) => {
    // ✅ Close passengers dropdown if click outside it AND not on button
    if (
      showPassengers &&
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      !passengerBtnRef.current.contains(e.target)
    ) {
      setShowPassengers(false);
    }

    // ✅ Close date picker if click outside date area and not in calendar
    if (
      showDatePicker &&
      dateRef.current &&
      !dateRef.current.contains(e.target) &&
      !e.target.closest(".rdrCalendarWrapper")
    ) {
      setShowDatePicker(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [showPassengers, showDatePicker]);


  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleAirport = (field, s) =>
    setForm((st) => ({
      ...st,
      [field]: `${s.city} (${s.iata})`,
      [`${field}_iata`]: s.iata,
    }));

  const swapAirports = () =>
    setForm((s) => ({
      ...s,
      from: s.to,
      to: s.from,
      from_iata: s.to_iata,
      to_iata: s.from_iata,
    }));

  const updatePassengers = (type, change) => {
    setForm((prev) => {
      const newValue = prev[type] + change;
      if (newValue < 0 || newValue > 9) return prev;
      const newTotal =
        (type === "adults" ? newValue : prev.adults) +
        (type === "children" ? newValue : prev.children) +
        (type === "infants" ? newValue : prev.infants);
      if (newTotal > 27) return prev;
      return { ...prev, [type]: newValue, passengers: newTotal };
    });
  };

  const validate = () => {
    const e = {};
    if (!form.from) e.from = "Enter departure";
    if (!form.to) e.to = "Enter destination";
    if (form.from_iata === form.to_iata) e.same = "Airports cannot be same!";
    if (!dateRange[0].startDate) e.date = "Select travel dates";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const formatLocalDate = (date) => {
  if (!date) return null;
  const local = new Date(date);
  const year = local.getFullYear();
  const month = String(local.getMonth() + 1).padStart(2, "0");
  const day = String(local.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`; // e.g. 2025-10-27
};

const depart = formatLocalDate(dateRange[0].startDate);
const ret =
  form.tripType === "round" && dateRange[0].endDate
    ? formatLocalDate(dateRange[0].endDate)
    : null;


    const formDataToSend = { ...form, depart, ret };
    setTimeout(() => navigate("/results", { state: formDataToSend }), 700);
  };

  const formatDateRange = () => {
    const { startDate, endDate } = dateRange[0];
    if (!startDate) return "Select date";
    const start = startDate.toLocaleDateString("en-GB");
    const end =
      form.tripType === "round" && endDate
        ? ` - ${endDate.toLocaleDateString("en-GB")}`
        : "";
    return start + end;
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl rounded-2xl shadow-2xl bg-gradient-to-b from-white to-blue-50 border border-gray-100 relative overflow-visible">
        {/* 🔹 Header */}
        <div className="bg-gray-100 border-b-4 border-blue-700 p-5 flex flex-wrap gap-4 items-center">
          <select
            value={form.tripType}
            onChange={(e) =>
              setForm({
                ...form,
                tripType: e.target.value,
              })
            }
            className="border border-gray-300 rounded-md px-4 py-2 bg-white hover:bg-blue-50 transition"
          >
            <option value="round">Round Trip</option>
            <option value="oneway">One Way</option>
          </select>

          {/* Passengers Button */}
          <button
            type="button"
            ref={passengerBtnRef}
            onClick={() => setShowPassengers(!showPassengers)}
            className="border border-gray-300 rounded-md px-4 py-2 bg-white flex items-center gap-2 hover:bg-blue-50 transition"
          >
            <FaUserFriends className="text-blue-600" />
            <span className="text-sm font-medium">
              {form.passengers} Travelers, {form.travelClass}
            </span>
            <FaChevronDown className="ml-1 text-xs" />
          </button>
        </div>

        {/* 🔹 Passenger Dropdown */}
        {showPassengers && (
          <div
            ref={dropdownRef}
            className="fixed bg-white shadow-2xl rounded-lg p-4 border border-gray-200 w-72 z-[9999] animate-fadeIn"
            style={{
              top: passengerBtnRef.current?.getBoundingClientRect().bottom + 6,
              left: passengerBtnRef.current?.getBoundingClientRect().left,
            }}
          >
            {['adults', 'children', 'infants'].map((type) => (
              <div
                key={type}
                className="flex justify-between items-center py-2 border-b last:border-0"
              >
                <span className="capitalize">{type}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updatePassengers(type, -1)}
                    className="p-2 border rounded-md hover:bg-gray-100"
                  >
                    <FaMinus />
                  </button>
                  <span className="w-5 text-center">{form[type]}</span>
                  <button
                    type="button"
                    onClick={() => updatePassengers(type, 1)}
                    className="p-2 border rounded-md hover:bg-gray-100"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            ))}
            <select
              name="travelClass"
              value={form.travelClass}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-3 focus:ring-2 focus:ring-blue-500"
            >
              <option>Economy</option>
              <option>Premium Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
        )}

        {/* 🔹 Form */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-wrap gap-4 items-end">
          {/* From */}
          <div className="flex-1 min-w-[220px]">
            <label className="flex items-center gap-2 text-sm font-medium mb-1 text-gray-700">
              <FaPlaneDeparture /> From
            </label>
            <AirportInput
              name="from"
              value={form.from}
              onChange={handleChange}
              onSelect={handleAirport}
              placeholder="JFK"
            />
            {errors.from && <p className="text-red-500 text-xs">{errors.from}</p>}
          </div>

          {/* Swap */}
          <button
            type="button"
            onClick={swapAirports}
            className="self-center bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 shadow-md transition"
            title="Swap airports"
          >
            <FaExchangeAlt />
          </button>

          {/* To */}
          <div className="flex-1 min-w-[220px]">
            <label className="flex items-center gap-2 text-sm font-medium mb-1 text-gray-700">
              <FaMapMarkerAlt /> To
            </label>
            <AirportInput
              name="to"
              value={form.to}
              onChange={handleChange}
              onSelect={handleAirport}
              placeholder="LAX"
            />
            {errors.to && <p className="text-red-500 text-xs">{errors.to}</p>}
          </div>

          {/* Date Range Picker */}
          <div className="flex-1 min-w-[220px]" ref={dateRef}>
            <label className="flex items-center gap-2 text-sm font-medium mb-1 text-gray-700">
              <FaCalendarAlt /> Travel Date
            </label>
            <button
              type="button"
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="w-full bg-gray-50 border border-gray-200 rounded-md p-3 text-left text-sm focus:ring-2 focus:ring-blue-500 hover:bg-white transition"
            >
              {formatDateRange()}
            </button>

            {showDatePicker && (
              <div className="absolute z-[9999] mt-2 animate-fadeIn">
                <DateRange
                  onChange={(item) => {
                    const selection = item.selection;

                    // ✅ Auto close when end date is selected
                    if (
                      selection.startDate &&
                      selection.endDate &&
                      selection.startDate !== selection.endDate
                    ) {
                      setTimeout(() => setShowDatePicker(false), 20);
                    }

                    setDateRange([selection]);
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  rangeColors={['#007bff']}
                  editableDateInputs={true}
                  direction="horizontal"
                  minDate={new Date()} // 🚫 Prevents selecting any past date
                />
              </div>
            )}

            {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
          </div>

          {/* Search */}
          <div className="self-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg shadow-md font-semibold tracking-wide transition"
            >
              {loading ? 'Searching...' : 'Search Flights'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
