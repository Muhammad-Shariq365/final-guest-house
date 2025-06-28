"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiWifi, FiCoffee, FiMapPin, FiStar, FiUmbrella } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Pic1 from '../app/assets/Pic1.jpeg';
import Pic2 from '../app/assets/Pic2.jpeg';
import Pic3 from '../app/assets/Pic5.jpeg';
import Pic4 from '../app/assets/Pic7.jpeg';
import Pic5 from '../app/assets/Pic8.jpeg';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [Pic1, Pic2, Pic3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0" data-aos="fade-right">
            <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
              Luxury Stays
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Experience <span className="text-blue-600">Serene</span> Comfort
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Discover our exquisite guest house where modern elegance meets homely comfort.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl">
                Explore Rooms
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0" data-aos="fade-left">
            <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              {images.map((img, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}>
                  <Image src={img} alt="Luxury Guest House" fill className="object-cover" priority={index === 0} />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10 mix-blend-multiply" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Unmatched <span className="text-blue-600">Guest Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FiStar className="w-8 h-8" />, title: "Premium Comfort", desc: "Handpicked furnishings and luxury linens for perfect rest" },
              { icon: <FiWifi className="w-8 h-8" />, title: "High-Speed WiFi", desc: "Seamless connectivity throughout the property" },
              { icon: <FiCoffee className="w-8 h-8" />, title: "Gourmet Breakfast", desc: "Fresh, locally sourced morning delights" },
              { icon: <FiMapPin className="w-8 h-8" />, title: "Prime Location", desc: "Walking distance to major attractions and transport" },
              { icon: <FiUmbrella className="w-8 h-8" />, title: "Concierge Service", desc: "Personalized recommendations and bookings" },
              { icon: <FiStar className="w-8 h-8" />, title: "Eco-Conscious", desc: "Sustainable practices without compromising luxury" }
            ].map((feature, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
              Our Accommodation
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Designed <span className="text-blue-600">Your Comfort</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[{ name: "Deluxe Suite", price: "Rs:5000/night", desc: "Spacious retreat with panoramic city views", image: Pic4 },
              { name: "Executive Room", price: "Rs:7000/night", desc: "Sophisticated workspace with soundproofing", image: Pic5 }
            ].map((room, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 200} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[450px] sm:h-[500px] md:h-[520px] lg:h-96">
                <Image src={room.image} alt={room.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 px-4 sm:px-6 md:px-8 py-6 w-full">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{room.name}</h3>
                      <p className="text-sm sm:text-base text-blue-200 mt-1">{room.desc}</p>
                    </div>
                    <span className="w-[135px] md:w-auto text-base sm:text-lg md:text-xl font-semibold text-orange-500 bg-white/90 px-4 py-1.5  rounded-lg">
                      {room.price}
                    </span>
                  </div>
                  <button className="mt-4 sm:mt-6 w-full py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium rounded-lg transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
