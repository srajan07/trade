import React, { useState } from "react";
import bgImage from "../assets/bg.jpeg";
import TradingSurvey from "./TradingSurvey";

const Hero = () => {
  const [showSurvey, setShowSurvey] = useState(false); // To toggle survey visibility
  const [email, setEmail] = useState(""); // Email input state
  const [emailSubmitted, setEmailSubmitted] = useState(false); // To track email submission status
  const [emailEntered, setEmailEntered] = useState(false); // To track if email has been entered
  const [hideText, setHideText] = useState(false); // To hide the introductory text after button click

  const handleYesClick = () => {
    setShowSurvey(true); // Show survey when "Yes" is clicked
    setHideText(true); // Hide the text after clicking the button
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update email value
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
  
    if (email) {
      try {
        // Send email to the backend API
        const response = await fetch('https://trade-app-backend-69ex.onrender.com/api/users/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }), // Send email as JSON
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Successfully saved the email
          setEmailEntered(true);
          setEmailSubmitted(true);
        } else {
          // Handle errors
          alert(data.message || "Error occurred while submitting the email");
        }
      } catch (error) {
        alert("Failed to submit email, please try again.");
        console.error(error);
      }
    } else {
      alert("Please enter a valid email.");
    }
  };
  

  return (
    <div
  className="min-h-screen bg-black text-white relative p-2"
  style={{
    backgroundImage: `url(${bgImage})`, // Use backgroundImage for URLs
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
  }}
>
      
      <div className="container mx-auto px-4 pt-10 md:pt-16 lg:pt-20 pl-10 md:pl-12 lg:pl-16 relative">
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

            {/* Conditional Text */}
            {!hideText && !emailEntered && !emailSubmitted && (
              <>
                <p className="text-sm font-bold mb-2 text-[#C5C5C5] font-lexend-light">
                  Submit the survey and the gift is yours.
                  <br />
                  We bet you didn’t see this coming.
                </p>
              </>
            )}

            {/* Conditional Rendering */}
            {!showSurvey ? (
              <>
                {/* Survey Button */}
                {!emailEntered && !emailSubmitted && (
                  <button
                    onClick={handleYesClick}
                    className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-6 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg"
                  >
                    Yes, take me there!
                  </button>
                )}

                {/* Email Form */}
                {!emailSubmitted && !emailEntered && (
                  <form className="flex flex-col gap-2 pt-10" onSubmit={handleSubmitEmail}>
                    <p className="text-xs md:text-sm font-bold text-[#C5C5C5] pl-2">
                      Nah, I’ll just sign-up for now..
                    </p>
                    <div className="flex items-center gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        className="px-3 py-3 rounded-l-full text-white font-bold w-36 md:w-44 bg-black border-2 border-[#E0B865] placeholder-white text-xs focus:outline-none"
                      />
                      <button
                        onClick={handleSubmitEmail}
                        className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-3 py-3 rounded-r-full font-bold text-xs"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}

                {/* Success Message */}
                {emailSubmitted && (
                  <div className="mt-4 text-lg font-bold text-[#E0B865]">
                   Thank you. We’ll keep you updated :)
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


