import React, { useState } from "react";

const TradingSurvey = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

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
      question:
        "Since you frequently exit trades due to fear - what triggers this behaviour?",
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
      question:
        "Since you rarely exit due to fear, how do you avoid holding losing trades?",
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
      question:
        "Do you frequently change your strategy based on short-term market trends?",
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
      question:
        "Do you avoid taking trades after consecutive losses due to hesitation?",
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
      question:
        "Do you take excessive risks in trades to compensate for previous losses?",
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
      question:
        "Do you review your trades regularly to identify mistakes and areas of improvement?",
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

  const handleNext = () => {
    const currentQuestion = surveyQuestions[currentQuestionIndex];
    const nextQuestionIndex =
      currentQuestion.options?.find((opt) => opt.next)?.next ??
      currentQuestionIndex + 1;

    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleAnswerChange = (id, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: answer,
    }));
  };

  if (completed) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">
          Thank you for completing the survey!
        </h1>
        <p>Your responses have been recorded.</p>
      </div>
    );
  }

  const currentQuestion = surveyQuestions[currentQuestionIndex];

  return (
    <div className="p-4 max-w-xl mx-auto text-white">
      <h1 className="text-lg font-bold">{currentQuestion.question}</h1>
      <div className="my-4">
        {currentQuestion.type === "single" && (
          <div className="flex flex-col gap-2">
            {currentQuestion.options.map((option, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  value={option.text || option}
                  checked={
                    answers[currentQuestion.id] === (option.text || option)
                  }
                  onChange={() =>
                    handleAnswerChange(
                      currentQuestion.id,
                      option.text || option
                    )
                  }
                  className="w-4 h-4"
                />
                {option.text || option}
              </label>
            ))}
          </div>
        )}

        {currentQuestion.type === "multiple" && (
          <div className="flex flex-col gap-2">
            {currentQuestion.options.map((option, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={`question-${currentQuestion.id}`}
                  value={option.text || option}
                  checked={answers[currentQuestion.id]?.includes(
                    option.text || option
                  )}
                  onChange={(e) => {
                    const selectedAnswers = answers[currentQuestion.id] || [];
                    if (e.target.checked) {
                      handleAnswerChange(currentQuestion.id, [
                        ...selectedAnswers,
                        option.text || option,
                      ]);
                    } else {
                      handleAnswerChange(
                        currentQuestion.id,
                        selectedAnswers.filter(
                          (ans) => ans !== (option.text || option)
                        )
                      );
                    }
                  }}
                  className="w-4 h-4"
                />
                {option.text || option}
              </label>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-700 px-4 py-2 rounded-full disabled:opacity-50"
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gradient-to-r from-[#E0B865] via-[#FBF3E3] to-[#E0B865] text-black px-6 py-2 rounded-full font-bold"
          disabled={!answers[currentQuestion.id]}
        >
          {currentQuestionIndex < surveyQuestions.length - 1
            ? "Next"
            : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default TradingSurvey;
