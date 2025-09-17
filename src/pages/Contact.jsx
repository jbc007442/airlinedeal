/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, Phone } from "lucide-react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name || !email || !phone) {
      toast.error("Please fill all required fields (*)");
      return;
    }

    try {
      const res = await axios.post(
        "https://bookskytrip.com/contact-mail.php",
        new URLSearchParams({ name, email, phone, message }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (res.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(res.data.message || "Failed to send message");
      }
    } catch (err) {
      toast.error("Error sending message. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1577278254637-a8b6a7f3614e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3eW9ya3xlbnwwfHwwfHx8MA%3D%3D"})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Contact us
            <br className="block md:hidden" /> Need help? We are here!
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 md:px-12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 max-w-6xl mx-auto text-black overflow-hidden flex flex-col md:flex-row border border-gray-200"
        >
          <div className="p-8 md:w-1/3 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Get in touch with us!</h3>
            <p className="text-base leading-relaxed">
              In case of any questions/queries or last minute requests
            </p>
          </div>

          <div className="text-black p-8 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="*Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="border bg-white border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              placeholder="*Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border bg-white border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="tel"
              placeholder="*Phone"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="border bg-white border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              placeholder="Description"
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="border bg-white border-gray-300 p-3 rounded w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded font-semibold hover:bg-blue-600 transition md:col-span-2"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">Contact</h4>
            <div className="flex items-start gap-4">
              <Mail className="text-orange-500" />
              <p>support@airlinedeals.com</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-orange-500" />
              <a
                href="tel:+18559271855"
                className="font-bold text-blue-900 text-lg"
              >
                (855) 927-1855
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
