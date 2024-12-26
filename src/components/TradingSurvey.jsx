// import React, { useState } from "react";

// const TradingSurvey = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [responses, setResponses] = useState({});
//   const [surveyCompleted, setSurveyCompleted] = useState(false);
//   const [email, setEmail] = useState("");
//   const [emailSubmitted, setEmailSubmitted] = useState(false);
//   const [suggestion, setSuggestion] = useState("");

//   const surveyQuestions = [
//     {
//       id: 1,
//       question: "How many years of trading experience do you have?",
//       type: "single",
//       mandatory: true,
//       options: ["0-2 years", "2-5 years", "5+ years"],
//     },
//     {
//       id: 2,
//       question: "What kind of a trader are you?",
//       type: "single",
//       mandatory: true,
//       options: ["Intraday", "Positional"],
//     },
//     {
//       id: 3,
//       question: "Which segment do you trade?",
//       type: "single",
//       mandatory: true,
//       options: ["Equity", "Futures", "Option buying", "Option selling"],
//     },
//     {
//       id: 4,
//       question: "How much is your trading capital?",
//       type: "single",
//       mandatory: false,
//       options: [
//         "Up to ₹1 Lakh",
//         "₹1 Lakh - ₹5 Lakh",
//         "₹5 Lakh - ₹10 Lakh",
//         "Above ₹10 Lakh",
//       ],
//     },
//     {
//       id: 5,
//       question:
//         "Do you exit trades early or hold onto losing trades beyond your stop loss due to fear?",
//       type: "single",
//       mandatory: true,
//       options: [
//         { text: "Always", next: 6 },
//         { text: "Often", next: 6 },
//         { text: "Sometimes", next: 7 },
//         { text: "Rarely or Never", next: 7 },
//       ],
//     },
//     {
//       id: 6,
//       question: "Since you frequently exit trades due to fear - what triggers this behaviour?",
//       type: "multiple",
//       mandatory: true,
//       options: [
//         "Previous losses in similar trades",
//         "Sudden market movements",
//         "Lack of confidence",
//         "Emotional stress during trading",
//       ],
//     },
//     {
//       id: 7,
//       question: "Since you rarely exit due to fear, how do you avoid holding losing trades?",
//       type: "multiple",
//       mandatory: true,
//       options: [
//         "I always stick to my plan.",
//         "I use automated SL and exits.",
//         "I practice mindfulness/meditation.",
//       ],
//     },
//      {
//       id: 8,
//       question: "Do you frequently change your strategy based on short-term market trends?",
//       type: "single",
//       mandatory: true,
//       options: [
//         { text: "Always", next: 9 },
//         { text: "Often", next: 9 },
//         { text: "Sometimes", next: 10 },
//         { text: "Rarely or Never", next: 10 },
//       ],
//     },
//     {
//       id: 9,
//       question: "What usually makes you hold the trade longer?",
//       type: "multiple",
//       mandatory: true,
//       options: [
//         "Recent success in trades",
//         "Overconfidence in the trend",
//         "FOMO (Fear of Missing Out)",
//       ],
//     },
//     {
//       id: 10,
//       question: "How do you control your emotion - Greed?",
//       type: "multiple",
//       mandatory: true,
//       options: [
//         "Pre-set targets with automated exits",
//         "Logging out after hitting the target",
//         "Trading with discipline",
//         "Other (specify)",
//       ],
//     },
//     {
//       id: 11,
//       question: "Do you avoid taking trades after consecutive losses due to hesitation?",
//       type: "single",
//       mandatory: true,
//       options: [
//         { text: "Always", next: 12 },
//         { text: "Often", next: 12 },
//         { text: "Sometimes", next: 13 },
//         { text: "Rarely or Never", next: 13 },
//       ],
//     },
//     {
//       id: 12,
//       question: "What makes you revenge trade/over-trade?",
//       type: "multiple",
//       mandatory: true,
//       options: [
//         "I can't see losses.",
//         "Desire to recover quickly.",
//         "Pressure to meet monthly commitment.",
//         "Other (specify)",
//       ],
//     },
//     {
//       id: 13,
//       question: "How do you resist your urge to overtrade?",
//       type: "multiple",
//       mandatory: true,
//       options: [
//         "Follow strict position sizing rules",
//         "Take break after losses",
//         "Set strict daily profit/loss limits",
//         "Other (specify)",
//       ],
//     },
//     {
//       id: 14,
//       question: "Do you take excessive risks in trades to compensate for previous losses?",
//       type: "single",
//       mandatory: true,
//       options: [
//         { text: "Always", next: 15 },
//         { text: "Often", next: 15 },
//         { text: "Sometimes", next: 16 },
//         { text: "Rarely or Never", next: 16 },
//       ],
//     },
//     {
//       id: 15,
//       question: "How do losses affect your trading mindset?",
//       type: "multiple",
//       mandatory: true,
//       options: [
//         "Feeling of frustration/anger.",
//         "Reduce confidence in subsequent trades.",
//         "Tendency to make impulsive trades.",
//         "Other (specify)",
//       ],
//     },
//     {
//       id: 16,
//       question: "How do you maintain emotional stability after a loss?",
//       type: "multiple",
//       mandatory: true,
//       options: [
//         "Take a break.",
//         "Review losing trade for lessons.",
//         "Stick to plan always.",
//         "Other (specify)",
//       ],
//     },
//     {
//       id: 17,
//       question: "Do you review your trades regularly to identify mistakes and areas of improvement?",
//       type: "single",
//       mandatory: true,
//       options: [
//         { text: "Always", next: 18 },
//         { text: "Often", next: 18 },
//         { text: "Sometimes", next: 19 },
//         { text: "Rarely or Never", next: 19 },
//       ],
//     },
//     {
//       id: 18,
//       question: "We love you! Any suggestions for us?",
//       type: "text",
//       mandatory: false,
//     },
//     {
//       id: 19,
//       question: "Why not?",
//       type: "single",
//       mandatory: true,
//       options: ["Lack of time", "Not interested", "Other priorities"],
//     },
//   ];

//   // const handleOptionSelect = (option) => {
//   //   setResponses((prev) => ({
//   //     ...prev,
//   //     [currentQuestionIndex]: option,
//   //   }));
//   // };
// const handleOptionSelect = (option) => {
//   const currentQuestion = surveyQuestions[currentQuestionIndex];
  
//   if (currentQuestion.type === "single") {
//     setResponses((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: option,
//     }));
//   } else if (currentQuestion.type === "multiple") {
//     setResponses((prev) => {
//       const prevOptions = prev[currentQuestionIndex] || [];
//       const isSelected = prevOptions.includes(option);
//       return {
//         ...prev,
//         [currentQuestionIndex]: isSelected
//           ? prevOptions.filter((opt) => opt !== option) // Remove if already selected
//           : [...prevOptions, option], // Add if not selected
//       };
//     });
//   }
// };
// const handleNext = () => {
//     const current = surveyQuestions[currentQuestion];
//     const response = responses[currentQuestion];

//     console.log("Current Question:", current);
//     console.log("Response:", response);

//     // Handle text suggestion (e.g., question 18)
//     if (current.type === "text") {
//         if (suggestion.trim()) {
//             setResponses((prev) => ({
//                 ...prev,
//                 [currentQuestion]: suggestion,
//             }));
//             const next = currentQuestion + 1;
//             if (next < surveyQuestions.length) {
//                 setCurrentQuestion(next);
//             } else {
//                 setSurveyCompleted(true);
//             }
//         } else {
//             alert("Please provide your suggestion before proceeding.");
//         }
//         return;
//     }

//     // Handle single-choice questions
//     if (current.type === "single") {
//         if (!response) {
//             alert("Please select an option before proceeding.");
//             return;
//         }

//         // Find the selected option
//         const selectedOption = current.options.find(
//             (option) => option.text === response || option === response
//         );

//         if (selectedOption?.next !== undefined) {
//             console.log(`Navigating to question: ${selectedOption.next}`);
//             setCurrentQuestion(selectedOption.next); // No need to subtract 1 if `next` is 0-based
//             return;
//         }
//     }

//     // Handle multiple-choice questions
//     if (current.type === "multiple") {
//         if (!response || response.length === 0) {
//             alert("Please select at least one option before proceeding.");
//             return;
//         }

//         // Find the first selected option with a `next` attribute
//         const nextQuestionIndex = current.options
//             .filter((option) => response.includes(option.text) && option.next !== undefined)
//             .map((option) => option.next)[0]; // Prioritize the first match

//         if (nextQuestionIndex !== undefined) {
//             console.log(`Navigating to question: ${nextQuestionIndex}`);
//             setCurrentQuestion(nextQuestionIndex); // No need to subtract 1 if `next` is 0-based
//             return;
//         }
//     }

//     // Default behavior for sequential navigation
//     const next = currentQuestion + 1;
//     if (next < surveyQuestions.length) {
//         setCurrentQuestion(next); // Navigate to the next question in sequence
//     } else {
//         setSurveyCompleted(true); // Mark the survey as completed
//     }
// };



//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmitEmail = () => {
//     setEmailSubmitted(true);
//   };

//   return (
//     <div className="p-4">
//       {!surveyCompleted ? (
//         <div>
//           <p className="mb-2 font-semibold">
//             {surveyQuestions[currentQuestionIndex].question}
//           </p>
//           <div className="flex flex-col gap-2">
//             {surveyQuestions[currentQuestionIndex].type === "single" &&
//               surveyQuestions[currentQuestionIndex].options.map((option, index) => (
//                 <label key={index} className="flex items-center gap-2">
//                   <input
//                     type="radio"
//                     name={`question-${currentQuestionIndex}`}
//                     value={option}
//                     className="form-radio"
//                     checked={responses[currentQuestionIndex] === option}
//                     onChange={() => handleOptionSelect(option)}
//                   />
//                   <span>{option.text || option}</span>
//                 </label>
//               ))}
//             {surveyQuestions[currentQuestionIndex].type === "multiple" &&
//               surveyQuestions[currentQuestionIndex].options.map((option, index) => (
//                 <label key={index} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     name={`question-${currentQuestionIndex}`}
//                     value={option}
//                     className="form-checkbox"
//                     onChange={() =>
//                       handleOptionSelect(option)
//                     }
//                   />
//                   <span>{option.text || option}</span>
//                 </label>
//               ))}
//             {surveyQuestions[currentQuestionIndex].id === 18 && (
//               <input
//                 type="text"
//                 placeholder="Your suggestion"
//                 value={suggestion}
//                 onChange={(e) => setSuggestion(e.target.value)}
//                 className="mt-2 p-2 border border-gray-300 rounded text-black"
//               />
//             )}
//           </div>

//           <button
//             onClick={handleNext}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Next
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h2>Survey Completed! Thank you for your responses.</h2>
//           {!emailSubmitted ? (
//             <div>
//               <p>To get insights, please provide your email address.</p>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className="mt-2 p-2 border border-gray-300 rounded text-black"
//               />
//               <button
//                 onClick={handleSubmitEmail}
//                 className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Submit Email
//               </button>
//             </div>
//           ) : (
//             <p>Email submitted successfully!</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TradingSurvey;

import React, { useState } from "react";

const TradingSurvey = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const surveyQuestions = [
    {
      id: 1,
      question: "How many years of trading experience do you have?",
      type: "single",
      mandatory: true,
      options: ["0-2 years", "2-5 years", "5+ years"],
    },
    {
      id: 2,
      question: "What kind of a trader are you?",
      type: "single",
      mandatory: true,
      options: ["Intraday", "Positional"],
    },
    {
      id: 3,
      question: "Which segment do you trade?",
      type: "single",
      mandatory: true,
      options: ["Equity", "Futures", "Option buying", "Option selling"],
    },
    {
      id: 4,
      question: "How much is your trading capital?",
      type: "single",
      mandatory: false,
      options: [
        "Up to ₹1 Lakh",
        "₹1 Lakh - ₹5 Lakh",
        "₹5 Lakh - ₹10 Lakh",
        "Above ₹10 Lakh",
      ],
    },
    {
      id: 5,
      question:
        "Do you exit trades early or hold onto losing trades beyond your stop loss due to fear?",
      type: "single",
      mandatory: true,
      options: [
        { text: "Always", next: 6 },
        { text: "Often", next: 6 },
        { text: "Sometimes", next: 7 },
        { text: "Rarely or Never", next: 7 },
      ],
    },
    {
      id: 6,
      question: "Since you frequently exit trades due to fear - what triggers this behaviour?",
      type: "multiple",
      mandatory: true,
      options: [
        "Previous losses in similar trades",
        "Sudden market movements",
        "Lack of confidence",
        "Emotional stress during trading",
      ],
    },
    {
      id: 7,
      question: "Since you rarely exit due to fear, how do you avoid holding losing trades?",
      type: "multiple",
      mandatory: true,
      options: [
        "I always stick to my plan.",
        "I use automated SL and exits.",
        "I practice mindfulness/meditation.",
      ],
    },
     {
      id: 8,
      question: "Do you frequently change your strategy based on short-term market trends?",
      type: "single",
      mandatory: true,
      options: [
        { text: "Always", next: 9 },
        { text: "Often", next: 9 },
        { text: "Sometimes", next: 10 },
        { text: "Rarely or Never", next: 10 },
      ],
    },
    {
      id: 9,
      question: "What usually makes you hold the trade longer?",
      type: "multiple",
      mandatory: true,
      options: [
        "Recent success in trades",
        "Overconfidence in the trend",
        "FOMO (Fear of Missing Out)",
      ],
    },
    {
      id: 10,
      question: "How do you control your emotion - Greed?",
      type: "multiple",
      mandatory: true,
      options: [
        "Pre-set targets with automated exits",
        "Logging out after hitting the target",
        "Trading with discipline",
        "Other (specify)",
      ],
    },
    {
      id: 11,
      question: "Do you avoid taking trades after consecutive losses due to hesitation?",
      type: "single",
      mandatory: true,
      options: [
        { text: "Always", next: 12 },
        { text: "Often", next: 12 },
        { text: "Sometimes", next: 13 },
        { text: "Rarely or Never", next: 13 },
      ],
    },
    {
      id: 12,
      question: "What makes you revenge trade/over-trade?",
      type: "multiple",
      mandatory: true,
      options: [
        "I can't see losses.",
        "Desire to recover quickly.",
        "Pressure to meet monthly commitment.",
        "Other (specify)",
      ],
    },
    {
      id: 13,
      question: "How do you resist your urge to overtrade?",
      type: "multiple",
      mandatory: true,
      options: [
        "Follow strict position sizing rules",
        "Take break after losses",
        "Set strict daily profit/loss limits",
        "Other (specify)",
      ],
    },
    {
      id: 14,
      question: "Do you take excessive risks in trades to compensate for previous losses?",
      type: "single",
      mandatory: true,
      options: [
        { text: "Always", next: 15 },
        { text: "Often", next: 15 },
        { text: "Sometimes", next: 16 },
        { text: "Rarely or Never", next: 16 },
      ],
    },
    {
      id: 15,
      question: "How do losses affect your trading mindset?",
      type: "multiple",
      mandatory: true,
      options: [
        "Feeling of frustration/anger.",
        "Reduce confidence in subsequent trades.",
        "Tendency to make impulsive trades.",
        "Other (specify)",
      ],
    },
    {
      id: 16,
      question: "How do you maintain emotional stability after a loss?",
      type: "multiple",
      mandatory: true,
      options: [
        "Take a break.",
        "Review losing trade for lessons.",
        "Stick to plan always.",
        "Other (specify)",
      ],
    },
    {
      id: 17,
      question: "Do you review your trades regularly to identify mistakes and areas of improvement?",
      type: "single",
      mandatory: true,
      options: [
        { text: "Always", next: 18 },
        { text: "Often", next: 18 },
        { text: "Sometimes", next: 19 },
        { text: "Rarely or Never", next: 19 },
      ],
    },
    {
      id: 18,
      question: "We love you! Any suggestions for us?",
      type: "text",
      mandatory: false,
    },
    {
      id: 19,
      question: "Why not?",
      type: "single",
      mandatory: true,
      options: ["Lack of time", "Not interested", "Other priorities"],
    },
  ];

  const handleOptionSelect = (option) => {
  const currentQuestion = surveyQuestions[currentQuestionIndex];

  if (currentQuestion.type === "single") {
    setResponses((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  } else if (currentQuestion.type === "multiple") {
    setResponses((prev) => {
      const prevOptions = prev[currentQuestionIndex] || [];
      const isSelected = prevOptions.includes(option); // Check if the value exists
      return {
        ...prev,
        [currentQuestionIndex]: isSelected
          ? prevOptions.filter((opt) => opt !== option) // Remove if selected
          : [...prevOptions, option], // Add if not selected
      };
    });
  }
};

  const handleNext = () => {
    const current = surveyQuestions[currentQuestionIndex];
    const response = responses[currentQuestionIndex];

    if (current.type === "text") {
      if (suggestion.trim()) {
        setResponses((prev) => ({
          ...prev,
          [currentQuestionIndex]: suggestion,
        }));
        setSuggestion("");
      } else if (current.mandatory) {
        alert("Please provide your suggestion before proceeding.");
        return;
      }
    } else if (current.mandatory && !response) {
      alert("Please select an option before proceeding.");
      return;
    }

    const selectedOption = response?.text ? response : current.options.find((opt) => opt === response);
    const nextIndex = selectedOption?.next !== undefined ? selectedOption.next : currentQuestionIndex + 1;

    if (nextIndex < surveyQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setSurveyCompleted(true);
    }
  };

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmitEmail = () => {
    if (email.trim()) {
      setEmailSubmitted(true);
      alert("Thank you for your email! We'll share insights with you soon.");
    } else {
      alert("Please provide a valid email address.");
    }
  };

  return (
    <div className="p-4">
      {!surveyCompleted ? (
        <div>
          <p className="mb-2 font-semibold">
            {surveyQuestions[currentQuestionIndex].question}
          </p>
          <div className="flex flex-col gap-2">
            {surveyQuestions[currentQuestionIndex].type === "single" &&
              surveyQuestions[currentQuestionIndex].options.map((option, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    className="form-radio"
                    checked={responses[currentQuestionIndex] === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  <span>{option.text || option}</span>
                </label>
              ))}
            {surveyQuestions[currentQuestionIndex].type === "multiple" &&
  surveyQuestions[currentQuestionIndex].options.map((option, index) => (
    <label key={index} className="flex items-center gap-2">
      <input
        type="checkbox"
        name={`question-${currentQuestionIndex}`}
        value={option}
        className="form-checkbox"
        checked={
          responses[currentQuestionIndex] &&
          responses[currentQuestionIndex].includes(option)
        }
        onChange={() => handleOptionSelect(option)}
      />
      <span>{option.text || option}</span>
    </label>
  ))}

            {surveyQuestions[currentQuestionIndex].type === "text" && (
              <input
                type="text"
                placeholder="Your suggestion"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded text-black"
              />
            )}
          </div>
          <button
            onClick={handleNext}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      ) : (
        <div>
          <h2>Survey Completed! Thank you for your responses.</h2>
          {!emailSubmitted ? (
            <div>
              <p>To get insights, please provide your email address.</p>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="mt-2 p-2 border border-gray-300 rounded text-black"
              />
              <button
                onClick={handleSubmitEmail}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          ) : (
            <p>Thank you! Your responses have been recorded.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TradingSurvey;
