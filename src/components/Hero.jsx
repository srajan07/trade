// import React, { useState } from "react";
// import bgImage from "../assets/bg.jpeg";
// import TradingSurvey from "./TradingSurvey";

// const Hero = () => {
//   const [showSurvey, setShowSurvey] = useState(false); // To toggle survey visibility
//   const [email, setEmail] = useState(""); // Email input state
//   const [emailSubmitted, setEmailSubmitted] = useState(false); // To track email submission status
//   const [emailEntered, setEmailEntered] = useState(false); // To track if email has been entered
//   const [hideText, setHideText] = useState(false); // To hide the introductory text after button click

//   const handleYesClick = () => {
//     setShowSurvey(true); // Show survey when "Yes" is clicked
//     setHideText(true); // Hide the text after clicking the button
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value); // Update email value
//   };

//   const handleSubmitEmail = async (e) => {
//     e.preventDefault();
  
//     if (email) {
//       try {
//         // Send email to the backend API
//         const response = await fetch('https://trade-app-backend-69ex.onrender.com/api/users/email', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ email }), // Send email as JSON
//         });
  
//         const data = await response.json();
  
//         if (response.ok) {
//           // Successfully saved the email
//           setEmailEntered(true);
//           setEmailSubmitted(true);
//         } else {
//           // Handle errors
//           alert(data.message || "Error occurred while submitting the email");
//         }
//       } catch (error) {
//         alert("Failed to submit email, please try again.");
//         console.error(error);
//       }
//     } else {
//       alert("Please enter a valid email.");
//     }
//   };
  

//   return (
//     <div
//   className="min-h-screen bg-black text-white relative p-4"
//   style={{
//     backgroundImage: `url(${bgImage})`, // Use backgroundImage for URLs
//     backgroundSize: "cover",
//     backgroundPosition: "center bottom",
//   }}
// >
      
// <div className="container mx-auto px-4 pt-16 md:pt-20 lg:pt-24">
//         <div className="max-w-3xl mx-auto">
//           <div className="text-left space-y-6">
//             <h1 className="text-3xl md:text-4xl font-bold leading-tight">
//               Are you an Option Buyer?
//             </h1>
//             <p className="text-base md:text-lg">We are one among you!</p>
//             <p className="text-xl md:text-2xl bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] bg-clip-text text-transparent font-semibold">
//               We’ve got a surprise for you!
//             </p>

//             {/* Conditional Text */}
//             {!hideText && !emailEntered && !emailSubmitted && (
//               <>
//                <p className="text-sm font-medium text-gray-400">
//                 Submit the survey and the gift is yours.
//                 <br />
//                 We bet you didn’t see this coming.
//               </p>
//               </>
//             )}

//             {/* Conditional Rendering */}
//             {!showSurvey ? (
//               <>
//                 {/* Survey Button */}
//                 {!emailEntered && !emailSubmitted && (
//                  <button
//                  onClick={handleYesClick}
//                  className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-8 py-3 rounded-full font-bold text-sm md:text-base shadow-md hover:shadow-lg transition-shadow"
//                >
//                  Yes, take me there!
//                </button>
//                 )}

//                 {/* Email Form */}
//                 {!emailSubmitted && !emailEntered && (
//                   <form className="flex flex-col gap-2 pt-10" onSubmit={handleSubmitEmail}>
//                     <p className="text-xs md:text-sm font-bold text-[#C5C5C5] pl-2">
//                       Nah, I’ll just sign-up for now..
//                     </p>
//                     <div className="flex items-center gap-2">
//                       <input
//                         type="email"
//                         placeholder="Enter your email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         className="px-3 py-3 rounded-l-full text-white font-bold w-36 md:w-44 bg-black border-2 border-[#E0B865] placeholder-white text-xs focus:outline-none"
//                       />
//                       <button
//                         onClick={handleSubmitEmail}
//                         className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-3 py-3 rounded-r-full font-bold text-xs"
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 )}

//                 {/* Success Message */}
//                 {emailSubmitted && (
//                   <div className="mt-4 text-lg font-bold text-[#E0B865]">
//                    Thank you. We’ll keep you updated :)
//                   </div>
//                 )}
//               </>
//             ) : (
//               <TradingSurvey />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// new one
import React, { useState } from "react";
import "./Hero.css";
import bgImage from "../assets/bg.jpeg";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!email) {
      setSubmissionError("Please enter an email.");
      return;
    }

    try {
      const response = await fetch("https://trade-app-backend-69ex.onrender.com/api/users/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setSubmissionError(errorData.message || "Error submitting email.");
        return;
      }

      setEmailSubmitted(true);
      setEmail("");
    } catch (error) {
      setSubmissionError("Failed to submit email. Please try again.");
      console.error(error);
    }
  };

  return (
    <div
      className="hero min-h-screen bg-cover bg-no-repeat bg-center text-white relative p-4 font-lexend"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6">
        <div className="text-left space-y-0 max-w-lg mx-auto md:mx-0">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-1">Are you an Option Buyer?</h1>
          <p className="text-base md:text-xl">We are one among you!</p>

          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] bg-clip-text text-transparent pt-10">
  We’re building something BIG & UNIQUE
  {emailSubmitted ? "" : " JUST FOR YOU!"}
      </p>


<p className="text-sm pt-12 pb-2 journey-text">Join us in the journey! 📈</p>


          {submissionError && <div className="text-red-500 text-sm">{submissionError}</div>}

          {!emailSubmitted ? (
            <form className="w-full max-w-md mx-auto md:mx-0" onSubmit={handleSubmitEmail}>
              <div className="flex items-center max-w-[240px] border border-[#E0B865] rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  className="flex-grow px-3 py-2 text-xs text-white bg-black border-none focus:outline-none max-w-[180px]" // Adjust input width
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-4 py-2 text-xs font-bold transition-shadow shadow-md hover:shadow-lg whitespace-nowrap flex-shrink-0"
                >
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-6 text-lg font-bold text-[#E0B865] text-center md:text-left">
              You’re an INSIDER now! We’ll keep you posted! 🫡
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
