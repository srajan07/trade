import React, { useState } from "react";
import bgImage from "../assets/bg.jpeg";
import TradingSurvey from "./TradingSurvey";

const Hero = () => {
  const [showSurvey, setShowSurvey] = useState(false); // To toggle survey visibility
  const [email, setEmail] = useState(""); // Email input state
  const [emailSubmitted, setEmailSubmitted] = useState(false); // To track email submission status

  const handleYesClick = () => {
    setShowSurvey(true); // Show survey when "Yes" is clicked
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email value
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate email submission success
      setEmailSubmitted(true); // Set submission state to true
    } else {
      alert("Please enter a valid email."); // Alert if the email is empty
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-white relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="container mx-auto px-4 pt-10 md:pt-16 lg:pt-20 pl-6 md:pl-12 lg:pl-16 relative">
        <div className="max-w-3xl">
          {/* Content Top-Left */}
          <div className="text-left space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">
              Are you an Option Buyer?
            </h1>
            <p className="text-base md:text-lg">We are one among you!</p>
            <p className="text-lg md:text-2xl bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] bg-clip-text text-transparent font-semibold">
              We’ve got a surprise for you!
            </p>
            <p className="text-sm font-bold mb-2 text-[#C5C5C5] font-lexend-light ">
              Submit the survey and the gift is yours.
              <br/>
              We bet you didn’t see this coming.
            </p>
            
            {/* Conditional Rendering */}
            {!showSurvey ? (
              <>
                {/* Survey Button */}
                {!emailSubmitted && (
                  <button
                    onClick={handleYesClick}
                    className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-6 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg"
                  >
                    Yes, take me there!
                  </button>
                )}

                {/* Email Form */}
                {!emailSubmitted && (
                  <form className="flex items-center gap-2 mt-4" onSubmit={handleSubmitEmail}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={handleEmailChange}
                      className="px-3 py-1 rounded-l-full text-white font-bold w-32 md:w-40 h-16 bg-transparent border-2 border-[#E0B865] placeholder-white text-xs"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-3 py-1 rounded-r-full font-bold text-xs"
                    >
                      Submit
                    </button>
                  </form>
                )}

                {/* Success Message */}
                {emailSubmitted && (
                  <div className="mt-4 text-lg font-bold text-[#E0B865]">
                    Success! You have been added to our list. 🫡
                  </div>
                )}
              </>
            ) : (
              <TradingSurvey />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
