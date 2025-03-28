import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, HeartPulse, Plane, Scale, Bomb, Flame, Ship, Sprout, Database, User, HandCoins, Stethoscope, Car, Settings } from 'lucide-react';
import Header from "../nav/header";
import Footer from "../nav/footer"
import Life from "../../assets/life.jpg";
import Motor from "../../assets/motor.png";
import Shipping from "../../assets/shipping.jpg";
import { motion } from "framer-motion";
import aic from "../../assets/aic.png";
import Health from "../../assets/health.jpg";
import Workers from "../../assets/workers.jpg";
import Arg from "../../assets/arg.jpeg";
import Fly from "../../assets/fly.jpg";


const images = [Life, Motor, Shipping, Workers, Health, Arg, Fly];
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const RoundedPopup = ({ aic }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
}

const services = [
  { icon: <HeartPulse />, label: 'Life Insurance' },
  { icon: <Plane />, label: 'Aviation Insurance' },
  { icon: < Scale />, label: 'Liability Insurance' },
  { icon: <Bomb />, label: 'Political Violation & Terrorism Insurance' },
  { icon: <Flame />, label: 'Fire and General Accident Insurance' },
  { icon: <Ship />, label: 'Marine Insurance' },
  { icon: <Sprout />, label: 'Agriculture Insurance' },
  { icon: <Database />, label: 'Micro Insurance' },
  { icon: <User />, label: "Workmen's Compensation Insurance" },
  { icon: <HandCoins />, label: 'Pecuniary Insurance' },
  { icon: <Stethoscope />, label: 'Accident & Health Insurance' },
  { icon: <Car />, label: 'Motor Insurance' },
  { icon: <Settings />, label: 'Engineering Insurance' }
];
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <Header />

      <div className="relative w-full h-3/4 mt-1">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            background: "linear-gradient(to bottom, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.4))",
            zIndex: 10,
          }}
          className="h-full w-full"
        ></div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
          />
        ))}

        {/* New Insurance Description Box */}
        <div className="absolute bottom-10 left-10 flex items-center space-x-4 bg-black/0 p-4 rounded-lg text-white">
          {/* Vertical Line */}
          <div style={{ zIndex: 11 }} className="h-36">
            <div className="w-[6px] h-full bg-white"></div>
          </div>

          {/* Text Description */}
          <p style={{ zIndex: 11 }} className="text-lg font-semibold  max-w-sm">
            {currentIndex === 0 && "Life Insurance provides financial security for your loved ones in times of need."}
            {currentIndex === 6 && "Aviation Insurance ensures safety and protection for aircraft operations worldwide."}
            {currentIndex === 1 && "Motor Insurance covers vehicle damages, liabilities, and third-party claims."}
            {currentIndex === 2 && "Shipping Insurance safeguards goods against potential losses and damages at sea."}
            {currentIndex === 3 && "Workmen's Compensation Insurance secures employees' well-being in the workplace."}
            {currentIndex === 4 && "Health Insurance provides comprehensive medical coverage and emergency assistance."}
            {currentIndex === 5 && "Agriculture Insurance protects farmers from financial loss due to natural disasters."}
          </p>
        </div>

        <button
          style={{ zIndex: 11 }}
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft size={30} />
        </button>

        <button
          style={{ zIndex: 11 }}
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight size={30} />
        </button>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-19 px-3 sm:">
        <motion.div
          className="flex flex-col items-start px-24 py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center w-full">
            <h1 className="font-bold text-3xl text-[#343989]">Who We are</h1>
            <p className="mt-5 text-gray-500">Africa Insurance Company (AIC) is a private insurance firm founded in 1994 under Ethiopia’s Insurance Business Proclamation No. 8/1994. With a fully paid-up capital of 30 million Ethiopian Birr, divided into 30,000 shares of 1,000 Birr each, AIC stands as the strongest private insurer in the country. Despite being a young company, its highly qualified personnel ensure efficient service. Guided by its motto, “Committed to Excellence and Quality Services,” AIC upholds high standards in all operations.</p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-end  py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="bg-[#343989] rounded-l-full w-1/2 h-52 overflow-hidden shadow-lg flex items-center">
            <img
              src={aic}
              alt="Popup Image"
              className="h-3/4 object-contain mx-auto"
            />
          </div>
        </motion.div>
      </div>

      <div className="text-[#343989] flex flex-col items-center mt-20">
        <h2 className="text-4xl font-bold mb-12">Services We Offer</h2>
        <div className="w-full max-w-5xl px-5">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{React.cloneElement(service.icon, { size: 45 })}</div>
                <p className="text-lg w-48">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="flex justify-start mt-36">
        <motion.div
          className=" items-start py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="bg-[#343989] rounded-r-full w-80 h-52 overflow-hidden shadow-lg flex items-center">
            <p className="text-xl ml-10 w-56 text-white" >
              Committed to Excellence and Quality service
            </p>
          </div>
        </motion.div>
        <div className="w-full flex justify-center items-center mt-10">
          <div className="w-full max-w-3xl h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7799458220306!2d38.77787627515661!3d8.992385791067488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858aa4e36b6d%3A0xba3a09392dcba790!2sAFRICA%20INSURANCE%20COMPANY%20S.C.%20HEAD%20OFFICE!5e0!3m2!1sen!2set!4v1741960143704!5m2!1sen!2set"
              width="80%"
              height="100%"
              style={{ border: 0 }} // Corrected JSX style syntax
              allowFullScreen // Corrected attribute name
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" // Corrected attribute name
            ></iframe>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <Footer />
    </div>
  );
};

export default Home;

``