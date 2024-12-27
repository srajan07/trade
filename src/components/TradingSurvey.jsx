import React, { useState } from "react";

const TradingSurvey = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState({});
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
        { id: 8, question: "Do you frequently change your strategy based on short-term market trends?", type: "single", mandatory: true, options: [{ text: "Always", next: 9 }, { text: "Often", next: 9 }, { text: "Sometimes", next: 10 }, { text: "Rarely or Never", next: 10 }] },
        { id: 9, question: "What usually makes you hold the trade longer?", type: "multiple", mandatory: true, options: ["Recent success in trades", "Overconfidence in the trend", "FOMO (Fear of Missing Out)"] },
        { id: 10, question: "How do you control your emotion - Greed?", type: "multiple", mandatory: true, options: ["Pre-set targets with automated exits", "Logging out after hitting the target", "Trading with discipline", "Other (specify)"] },
        { id: 11, question: "Do you avoid taking trades after consecutive losses due to hesitation?", type: "single", mandatory: true, options: [{ text: "Always", next: 12 }, { text: "Often", next: 12 }, { text: "Sometimes", next: 13 }, { text: "Rarely or Never", next: 13 }] },
        { id: 12, question: "What makes you revenge trade/over-trade?", type: "multiple", mandatory: true, options: ["I can't see losses.", "Desire to recover quickly.", "Pressure to meet monthly commitment.", "Other (specify)"] },
        { id: 13, question: "How do you resist your urge to overtrade?", type: "multiple", mandatory: true, options: ["Follow strict position sizing rules", "Take break after losses", "Set strict daily profit/loss limits", "Other (specify)"] },
        { id: 14, question: "Do you take excessive risks in trades to compensate for previous losses?", type: "single", mandatory: true, options: [{ text: "Always", next: 15 }, { text: "Often", next: 15 }, { text: "Sometimes", next: 16 }, { text: "Rarely or Never", next: 16 }] },
        { id: 15, question: "How do losses affect your trading mindset?", type: "multiple", mandatory: true, options: ["Feeling of frustration/anger.", "Reduce confidence in subsequent trades.", "Tendency to make impulsive trades.", "Other (specify)"] },
        { id: 16, question: "How do you maintain emotional stability after a loss?", type: "multiple", mandatory: true, options: ["Take a break.", "Review losing trade for lessons.", "Stick to plan always.", "Other (specify)"] },
        { id: 17, question: "Do you review your trades regularly to identify mistakes and areas of improvement?", type: "single", mandatory: true, options: [{ text: "Always", next: 18 }, { text: "Often", next: 18 }, { text: "Sometimes", next: 19 }, { text: "Rarely or Never", next: 19 }] },
        { id: 18, question: "We love you! Any suggestions for us?", type: "text", mandatory: false },
        { id: 19, question: "Why not?", type: "single", mandatory: true, options: ["Lack of time", "Not interested", "Other priorities"] },
    ];

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

    const handleNext = () => {
        const current = surveyQuestions[currentQuestionIndex];
        const response = responses[current.id];

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

        if (nextIndex < surveyQuestions.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            setSurveyCompleted(true);
        }
    };

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubmitEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email.trim())) {
            setEmailSubmitted(true);
            alert("Thank you for your email! We'll share insights with you soon.");
        } else {
            alert("Please provide a valid email address.");
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
              <span className="text-red-500 ml-1 text-xl">*</span> // Added asterisk for mandatory questions
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
                            className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50" // Style and disable
                        >
                            Previous
                        </button>
                        <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
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
                        <p>Thank you! Your responses have been recorded.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default TradingSurvey;