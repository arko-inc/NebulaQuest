import React from "react";
import { Link } from "react-router-dom";

function Hero1()  {
  return (
    <>
      <div
        className="text-white p-6 rounded-md bg-cover bg-center relative h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522885147691-06d859633fb8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold font-against mb-4 animate-pulse md:text-xl">
            Welcome to{" "}
            <span className="animate-inflate-deflate">NebulaQuest</span>
          </h1>
          <p className="md:text-lg mb-6 font-against animate-pulse">
            Explore the world’s most beautiful destinations with us.
          </p>
          <Link
            to="/Home"
            className="px-6 py-3 rounded-lg shadow-lg font-against text-white hover:scale-105 transform animate-pulse
              transition-transform duration-300 ease-in-out bg-white/5 backdrop-blur-md border border-white"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero1;
