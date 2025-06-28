"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Pic1 from '../assets/Pic1.jpeg';
import Pic2 from '../assets/Pic2.jpeg';
import Pic3 from '../assets/Pic3.jpeg';
import Pic4 from '../assets/Pic4.jpeg';
import Pic5 from '../assets/Pic5.jpeg';
import Pic6 from '../assets/Pic6.jpeg';
import Pic7 from '../assets/Pic7.jpeg';
import Pic8 from '../assets/Pic8.jpeg';
import Pic9 from '../assets/Pic9.jpeg';

import {
  FiGift,
  FiUsers,
  FiBriefcase,
  FiHeart,
  FiCoffee,
  FiHome,
  FiSun,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      icon: <FiGift className="w-8 h-8 text-blue-600" />,
      title: "Birthday Celebrations",
      desc: "Celebrate with customized décor and cozy space for your guests.",
    },
    {
      icon: <FiBriefcase className="w-8 h-8 text-blue-600" />,
      title: "Corporate Events",
      desc: "Host small team meetings, training sessions, or executive stays.",
    },
    {
      icon: <FiHeart className="w-8 h-8 text-blue-600" />,
      title: "Honeymoon Stay",
      desc: "Romantic suites with privacy and premium comfort.",
    },
    {
      icon: <FiUsers className="w-8 h-8 text-blue-600" />,
      title: "Family Gatherings",
      desc: "Spacious areas perfect for dinners, reunions, or overnight stays.",
    },
    {
      icon: <FiCoffee className="w-8 h-8 text-blue-600" />,
      title: "Private Dinners",
      desc: "Book your space for surprise dinners or quiet celebrations.",
    },
    {
      icon: <FiSun className="w-8 h-8 text-blue-600" />,
      title: "Staycation & Day Use",
      desc: "Relax, recharge, or work in a peaceful day-long retreat.",
    },
    {
      icon: <FiHome className="w-8 h-8 text-blue-600" />,
      title: "Full Guest House Booking",
      desc: "Book the entire guest house exclusively for your event.",
    },
  ];

  const faqs = [
    {
      question: "Can I book the entire guest house?",
      answer: "Yes! You can reserve the full space for birthdays, family functions, or business events.",
    },
    {
      question: "Is early check-in or late checkout available?",
      answer: "Yes, based on availability. Kindly request this while booking.",
    },
    {
      question: "Do you offer meals or breakfast?",
      answer: "Complimentary breakfast is provided. We can also arrange lunch/dinner with notice.",
    },
    {
      question: "Is parking available?",
      answer: "Yes, we have secure parking available for all guests.",
    },
  ];

  const galleryImages = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
            Flexible <span className="text-blue-600">Guest House Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether it's a celebration or a peaceful retreat — we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full text-left"
                >
                  <h4 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h4>
                  {openIndex === index ? (
                    <FiChevronUp className="text-blue-600" />
                  ) : (
                    <FiChevronDown className="text-blue-600" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div data-aos="fade-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Moments of <span className="text-blue-600">Comfort & Elegance</span>
            </h3>
            <p className="mt-2 text-lg text-gray-600">
              A glimpse into your next relaxing stay.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 80}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <Image
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="object-cover w-full h-60"
                  placeholder="blur"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
