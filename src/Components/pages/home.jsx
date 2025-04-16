import React, { useState, useEffect } from "react";
import {
  Card,
  Flex,
} from "@mantine/core";
import {
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  Plane,
  Scale,
  Bomb,
  Flame,
  Ship,
  Sprout,
  Database,
  User,
  HandCoins,
  Stethoscope,
  Car,
  Settings,
} from "lucide-react";
import Header from "../nav/header";
import Footer from "../nav/footer";
import Life from "../../assets/life.jpg";
import Motor from "../../assets/motor.png";
import Shipping from "../../assets/shipping.jpg";
import Health from "../../assets/health.jpg";
import Workers from "../../assets/workers.jpg";
import Arg from "../../assets/arg.jpeg";
import Fly from "../../assets/fly.jpg";
import aic from "../../assets/aic.png";
import { motion } from "framer-motion";

const images = [Life, Motor, Shipping, Workers, Health, Arg, Fly];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const services = [
  { icon: <HeartPulse />, label: "Life Insurance" },
  { icon: <Plane />, label: "Aviation Insurance" },
  { icon: <Scale />, label: "Liability Insurance" },
  { icon: <Bomb />, label: "Political Violation & Terrorism Insurance" },
  { icon: <Flame />, label: "Fire and General Accident Insurance" },
  { icon: <Ship />, label: "Marine Insurance" },
  { icon: <Sprout />, label: "Agriculture Insurance" },
  { icon: <Database />, label: "Micro Insurance" },
  { icon: <User />, label: "Workmen's Compensation Insurance" },
  { icon: <HandCoins />, label: "Pecuniary Insurance" },
  { icon: <Stethoscope />, label: "Accident & Health Insurance" },
  { icon: <Car />, label: "Motor Insurance" },
  { icon: <Settings />, label: "Engineering Insurance" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />

      {/* Carousel Section */}
      <div className="relative w-full h-[80vh] sm:h-[90vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/40 z-10" />
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={
              index === currentIndex
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 1 }
            }
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          />
        ))}

        {/* Description */}
        <div className="absolute bottom-36 left-5 sm:left-10 bg-black/0 p-4 rounded-lg text-white z-20 max-w-lg text-lg sm:text-3xl font-bold flex items-center">
          <div style={{ zIndex: 11 }} className="h-36">
            <div className="w-[10px] h-[200px] bg-white"></div>
          </div>
          <div className="ml-4">
            {currentIndex === 0 &&
              "Life Insurance provides financial security for your loved ones in times of need."}
            {currentIndex === 6 &&
              "Aviation Insurance ensures safety and protection for aircraft operations worldwide."}
            {currentIndex === 1 &&
              "Motor Insurance covers vehicle damages, liabilities, and third-party claims."}
            {currentIndex === 2 &&
              "Shipping Insurance safeguards goods against potential losses and damages at sea."}
            {currentIndex === 3 &&
              "Workmen's Compensation Insurance secures employees' well-being in the workplace."}
            {currentIndex === 4 &&
              "Health Insurance provides comprehensive medical coverage and emergency assistance."}
            {currentIndex === 5 &&
              "Agriculture Insurance protects farmers from financial loss due to natural disasters."}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-20"
        >
          <ChevronLeft size={30} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition z-20"
        >
          <ChevronRight size={30} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Who We Are Section */}
      <Flex
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        className="px-4 sm:px-10 md:px-20 py-12 gap-8"
      >
        <motion.div
          className="w-full md:w-3/4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <Card p="sm" radius="sm">
            <Card.Section inheritPadding>
              <h1 className="font-bold text-3xl text-[#343989]">
                Who We Are
              </h1>
            </Card.Section>
            <Card.Section inheritPadding>
              <p className="mt-5 text-gray-500">
                Africa Insurance Company (AIC) is a private insurance firm
                founded in 1994 under Ethiopia’s Insurance Business Proclamation
                No. 8/1994. With a fully paid-up capital of 30 million Ethiopian
                Birr, divided into 30,000 shares of 1,000 Birr each, AIC stands
                as the strongest private insurer in the country...
              </p>
            </Card.Section>
          </Card>
        </motion.div>

        
      </Flex>

      {/* Services We Offer */}
      <div className="text-center px-4">
        <div className="flex items-center justify-center mb-6">
          <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
          <h3 className="text-2xl font-semibold text-[#343989]">
            Services We Offer
          </h3>
          <div className="w-1/3 border-t-2 border-[#343989] mx-4"></div>
        </div>

        <div className="text-[#343989] flex flex-col items-center mt-16">
          <div className="w-full max-w-6xl px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center border-4 border-[#343989] text-center rounded-lg p-4 w-full max-w-[200px] h-44 transition-transform transform hover:-translate-y-1 shadow-md hover:shadow-[#EF1C33]"
                >
                  <div className="mb-4">
                    {React.cloneElement(service.icon, { size: 45 })}
                  </div>
                  <p className="text-lg">{service.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Motto and Map */}
      <div className="flex flex-col lg:flex-row justify- space-x-28 items-center  mt-36 px-4 sm:px-10">
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7799458220306!2d38.77787627515661!3d8.992385791067488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b858aa4e36b6d%3A0xba3a09392dcba790!2sAFRICA%20INSURANCE%20COMPANY%20S.C.%20HEAD%20OFFICE!5e0!3m2!1sen!2set!4v1741960143704!5m2!1sen!2set"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-4xl font-bold text-[#343989]">
          Committed to Excellence !
        </div>
      </div>

      <div className="h-20" />
      <Footer />
    </div>
  );
};

export default Home;
