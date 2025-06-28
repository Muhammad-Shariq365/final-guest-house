"use client";

import React, { useEffect } from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
            Get in Touch
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
            Contact <span className="text-blue-600">Our Team</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're here to assist you with bookings, inquiries, or special requests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Info + Map */}
          <div className="space-y-6 text-gray-700" data-aos="fade-right">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                <p>123 Serenity Lane, City Center, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p>+92 300 1234567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p>info@luxurystays.pk</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-xl overflow-hidden shadow-lg mt-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108929.22816597048!2d66.92860548377691!3d24.860734258359735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f94b0877c41%3A0x4c63b189b0e15f56!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718846915001!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="bg-blue-50 p-8 rounded-2xl shadow-lg space-y-6" data-aos="fade-left">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
