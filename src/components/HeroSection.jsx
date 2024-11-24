import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "https://images.unsplash.com/photo-1522885147691-06d859633fb8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516832970803-325be7a92aa5?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]; // Add your image paths
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change background every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-center text-white">
  <h1 className="text-5xl font-bold font-against mb-4 animate-pulse md:text-xl">
    Welcome to <span className="animate-inflate-deflate ">MisterCompass</span>
  </h1>
  <p className="md:text-lg mb-6 font-against animate-pulse">
    Explore the world’s most beautiful destinations with us.
  </p>
  <button href="/Home" className="px-6 py-3 rounded-lg shadow-lg font-against text-white hover:scale-105 transform animate-pulse  transition-transform duration-300 ease-in-out bg-white/5 backdrop-blur-md border border-white">
  Start Your Journey
</button>



</div>

    </div>
  );
};

export default HeroSection;
