import React, { useState } from "react";
import axios from 'axios';
const TradingSurvey = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // const [responses, setResponses] = useState({});
    const [surveyCompleted, setSurveyCompleted] = useState(false);
    const [email, setEmail] = useState("");
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [suggestion, setSuggestion] = useState("");

    const surveyQuestions = [
        { id: 1, question: "How many years of trading experience do you have?", type: "single", mandatory: true, options: ["0-2 years", "2-5 years", "5+ years"] },
        { id: 2, question: "What kind of a trader are you?", type: "single", mandatory: true, options: ["Intraday", "Positional"] },
        { id: 3, question: "Which segment do you trade?", type: "single", mandatory: true, options: ["Equity", "Futures", "Option buying", "Option selling"] },
        { id: 4, question: "How much is your trading capital?", type: "single", mandatory: false, options: ["Up to ₹1 Lakh", "₹1 Lakh - ₹5 Lakh", "₹5 Lakh - ₹10 Lakh", "Above ₹10 Lakh"] },
        { id: 5, question: "Do you exit trades early or hold onto losing trades beyond your stop loss due to fear?", type: "single", mandatory: true, options: [{ text: "Always", next: 6 }, { text: "Often", next: 6 }, { text: "Sometimes", next: 7 }, { text: "Rarely or Never", next: 7 }] },
        { id: 6, question: "Since you frequently exit trades due to fear - what triggers this behaviour?", type: "multiple", mandatory: true, options: ["Previous losses in similar trades", "Sudden market movements", "Lack of confidence", "Emotional stress during trading"] },
        { id: 7, question: "Since you rarely exit due to fear, how do you avoid holding losing trades?", type: "multiple", mandatory: true, options: ["I always stick to my plan.", "I use automated SL and exits.", "I practice mindfulness/meditation."] },
        { id: 8, question: "Do you hold trades after hitting your daily profit target, expecting bigger gains?", type: "single", mandatory: true, options: [{ text: "Always", next: 9 }, { text: "Often", next: 9 }, { text: "Sometimes", next: 10 }, { text: "Rarely or Never", next: 10 }] },
        { id: 9, question: "What usually makes you hold the trade longer?", type: "multiple", mandatory: true, options: ["Recent success in trades", "Overconfidence in the trend", "FOMO (Fear of Missing Out)"] },
        { id: 10, question: "How do you control your emotion - Greed?", type: "multiple", mandatory: true, options: ["Pre-set targets with automated exits", "Logging out after hitting the target", "Trading with discipline", "Other (specify)"] },
        { id: 11, question: "Do you increase position size after a loss to recover quickly, leading to overtrading?", type: "single", mandatory: true, options: [{ text: "Always", next: 12 }, { text: "Often", next: 12 }, { text: "Sometimes", next: 13 }, { text: "Rarely or Never", next: 13 }] },
        { id: 12, question: "What makes you revenge trade/over-trade?", type: "multiple", mandatory: true, options: ["I can't see losses.", "Desire to recover quickly.", "Pressure to meet monthly commitment.", "Other (specify)"] },
        { id: 13, question: "How do you resist your urge to overtrade?", type: "multiple", mandatory: true, options: ["Follow strict position sizing rules", "Take break after losses", "Set strict daily profit/loss limits", "Other (specify)"] },
        { id: 14, question: "Does a losing first trade affect your mindset for the day?", type: "single", mandatory: true, options: [{ text: "Always ", next: 15 }, { text: "Often  ", next: 15 }, { text: "Sometimes ", next: 16 }, { text: "Rarely or Never ", next: 16 }] },
        { id: 15, question: "How do losses affect your trading mindset?", type: "multiple", mandatory: true, options: ["Feeling of frustration/anger.", "Reduce confidence in subsequent trades.", "Tendency to make impulsive trades.", "Other (specify)"] },
        { id: 16, question: "How do you maintain emotional stability after a loss?", type: "multiple", mandatory: true, options: ["Take a break.", "Review losing trade for lessons.", "Stick to plan always.", "Other (specify)"] },
        { id: 17, question: "If your psychological challenges were addressed through specific features, would you be willing to swift to a new broker?", type: "single", mandatory: true, options: [{ text: "Yes", next: 18 },  { text: "No", next: 19 } ] },
        { id: 18, question: "We love you! Any suggestions for us?", type: "text", mandatory: false },
        { id: 19, question: "Why not?", type: "single", mandatory: true, options: ["Lack of time", "Not interested", "Other priorities"] },
    ];
    // Set initial state with empty responses for each question
const [responses, setResponses] = useState(
    surveyQuestions.reduce((acc, question) => {
        acc[question.id] = ""; // Initialize with empty string for each question
        return acc;
    }, {})
);

// Handle selecting an option for single-choice or multiple-choice questions
const handleOptionSelect = (option) => {
    const currentQuestion = surveyQuestions[currentQuestionIndex];
    const optionText = typeof option === "string" ? option : option.text;

    if (currentQuestion.type === "single") {
        setResponses((prev) => ({ ...prev, [currentQuestion.id]: optionText }));
    } else if (currentQuestion.type === "multiple") {
        setResponses((prev) => {
            const prevOptions = prev[currentQuestion.id] || [];
            const isSelected = prevOptions.includes(optionText);
            return { ...prev, [currentQuestion.id]: isSelected ? prevOptions.filter((opt) => opt !== optionText) : [...prevOptions, optionText] };
        });
    }
};


    // const handleOptionSelect = (option) => {
    //     const currentQuestion = surveyQuestions[currentQuestionIndex];
    //     const optionText = typeof option === "string" ? option : option.text;

        
    //     if (currentQuestion.type === "single") {
    //         setResponses((prev) => ({ ...prev, [currentQuestion.id]: optionText }));
    //     } else if (currentQuestion.type === "multiple") {
    //         setResponses((prev) => {
    //             const prevOptions = prev[currentQuestion.id] || [];
    //             const isSelected = prevOptions.includes(optionText);
    //             return { ...prev, [currentQuestion.id]: isSelected ? prevOptions.filter((opt) => opt !== optionText) : [...prevOptions, optionText] };
    //         });
    //     }
    // };

    // const handleNext = () => {
    //     const current = surveyQuestions[currentQuestionIndex];
    //     const response = responses[current.id];

    //     if (current.mandatory && !response) {
    //         alert("Please select an option before proceeding.");
    //         return;
    //     }

    //     if (current.type === "text" && !suggestion.trim() && current.mandatory) {
    //         alert("Please provide your suggestion before proceeding.");
    //         return;
    //     }

    //     if (current.type === "text" && suggestion.trim()) {
    //         setResponses((prev) => ({ ...prev, [current.id]: suggestion }));
    //         setSuggestion("");
    //     }

    //     const selectedOption = current.options?.find((opt) => (opt.text || opt) === response) || {};

    //     let nextIndex;
    //     if (selectedOption.next !== undefined) {
    //         nextIndex = surveyQuestions.findIndex((q) => q.id === selectedOption.next);
    //         if (nextIndex === -1) {
    //             console.error(`Question with ID ${selectedOption.next} not found!`);
    //             return;
    //         }
    //     } else {
    //         nextIndex = currentQuestionIndex + 1;
    //     }

    //     if (nextIndex < surveyQuestions.length) {
    //         setCurrentQuestionIndex(nextIndex);
    //     } else {
    //         setSurveyCompleted(true);
    //     }
    // };
  // State to track if email is submitted


  const handleNext = async () => {
    const current = surveyQuestions[currentQuestionIndex];
    const response = responses[current.id];

    // Validation checks
    if (current.mandatory && !response) {
        alert("Please select an option before proceeding.");
        return;
    }

    if (current.type === "text" && !suggestion.trim() && current.mandatory) {
        alert("Please provide your suggestion before proceeding.");
        return;
    }

    if (current.type === "text" && suggestion.trim()) {
        setResponses((prev) => ({ ...prev, [current.id]: suggestion }));
        setSuggestion("");
    }

    // Handling the next question based on selected options
    const selectedOption = current.options?.find((opt) => (opt.text || opt) === response) || {};

    let nextIndex;
    if (selectedOption.next !== undefined) {
        nextIndex = surveyQuestions.findIndex((q) => q.id === selectedOption.next);
        if (nextIndex === -1) {
            console.error(`Question with ID ${selectedOption.next} not found!`);
            return;
        }
    } else {
        nextIndex = currentQuestionIndex + 1;
    }

    // If there are more questions, show the next one
    if (nextIndex < surveyQuestions.length) {
        setCurrentQuestionIndex(nextIndex);
    } else {
        // Survey completed, send responses to the backend
        try {
            await axios.post('https://trade-app-backend-69ex.onrender.com/api/users/save', {
                answers: responses, // Send the responses to the backend
            });

            setSurveyCompleted(true);
            alert("Survey submitted successfully!");
        } catch (error) {
            console.error("Error submitting survey:", error);
            alert("Failed to submit survey. Please try again.");
        }
    }
};

    
    const handleEmailChange = (e) => setEmail(e.target.value);

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
      
    const getPreviousQuestionId = (questions, currentQuestionId, responses) => {
      for (let i = questions.length - 1; i >= 0; i--) {
          const question = questions[i];
          if (question.id === currentQuestionId) continue; // Skip the current question

          if (!question.options) {
              if (question.id < currentQuestionId)
              {
                  return question.id;
              }
              continue; // Text questions don't have next logic
          }

          for (const option of question.options) {
              const nextId = typeof option === 'object' && option.next;
              if (nextId === currentQuestionId) {
                  // Check if this branch was taken based on responses
                  const response = responses[question.id];
                  const optionText = typeof option === 'object' ? option.text : option;
                  if (Array.isArray(response) ? response.includes(optionText) : response === optionText)
                  {
                      return question.id;
                  }
              }
          }
      }
      return null; // No previous question found
  };


  const handlePrevious = () => {
      if (currentQuestionIndex > 0) {
          const currentQuestionId = surveyQuestions[currentQuestionIndex].id;
          const prevQuestionId = getPreviousQuestionId(surveyQuestions, currentQuestionId, responses);

          if (prevQuestionId) {
              const prevIndex = surveyQuestions.findIndex(q => q.id === prevQuestionId);
              setCurrentQuestionIndex(prevIndex);
          } else {
              // Handle edge case: No direct previous question (shouldn't happen with correct data)
              setCurrentQuestionIndex(currentQuestionIndex - 1);
          }
      }
  };

    return (
        <div className="p-4">
            {!surveyCompleted ? (
                <div>
                    {/* <p className="mb-2 font-semibold">{surveyQuestions[currentQuestionIndex].question}</p> */}
                    <p className="mb-2 font-semibold flex items-center"> {/* Added flex for alignment */}
            {surveyQuestions[currentQuestionIndex].question}
            {surveyQuestions[currentQuestionIndex].mandatory && (
              <span className="text-[#E0B865] ml-1 text-xl">*</span> // Added asterisk for mandatory questions
            )}
          </p>
                    <div className="flex flex-col gap-2">
                     {surveyQuestions[currentQuestionIndex].type === "single" &&
                            surveyQuestions[currentQuestionIndex].options.map((option, index) => (
                                <label key={index} className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name={`question-${surveyQuestions[currentQuestionIndex].id
                                        }`}
                                        value={typeof option === "string" ? option : option.text}
                                        checked={responses[surveyQuestions[currentQuestionIndex].id] === (typeof option === "string" ? option : option.text)}
                                        onChange={() => handleOptionSelect(option)}
                                    />
                                    <span>{typeof option === "string" ? option : option.text}</span>
                                </label>
                                
                            ))}

                        {surveyQuestions[currentQuestionIndex].type === "multiple" &&
                            surveyQuestions[currentQuestionIndex].options.map((option, index) => (
                                <label key={index} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name={`question-${surveyQuestions[currentQuestionIndex].id}`}
                                        value={typeof option === "string" ? option : option.text}
                                        checked={responses[surveyQuestions[currentQuestionIndex].id]?.includes(typeof option === "string" ? option : option.text)}
                                        onChange={() => handleOptionSelect(option)}
                                    />
                                    <span>{typeof option === "string" ? option : option.text}</span>
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
                    <div className="flex  mt-4"> {/* Container for buttons */}
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0} // Disable on first question
                            className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black rounded-full px-4 py-2 rounded disabled:opacity-50" // Style and disable
                        >
                            Previous
                        </button>
                        <button onClick={handleNext} className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black rounded-full px-4 py-2 rounded ml-2">
                            Next
                        </button>
                    </div>
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
                             className="px-3 py-3 rounded-l-full text-white font-bold w-32 md:w-40 h-32 bg-transparent border-2 border-[#E0B865] placeholder-white text-xs"
                                          />
                               <button
                    onClick={handleSubmitEmail}
               className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-4 py-3 rounded-r-full font-bold text-xs"
>
    Submit
</button>

                        </div>
                    ) : (
                        <p>Thanks for the survey. The gift will reach your email! 🫡.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default TradingSurvey;