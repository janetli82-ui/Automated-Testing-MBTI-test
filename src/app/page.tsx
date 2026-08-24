'use client'

import { useState } from "react";
import QA from "@/components/QA";
import { mbtiQuestions, QuizResult, results } from "@/data/data";
import Result from "@/components/Result";


export default function Home() {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [resultData, setResultData] = useState<QuizResult | null>(null);

  const handleSelectClick = () => {
    setCurrentNumber(prev => prev + 1)

    if (updatedAnswers.length === mbtiQuestions.length) {
      const personalityType = updatedAnswers.join("");
      const result = results[personalityType] || results.DEFAULT

      setResultData(result);
    }
  }

  const buttonClick = () => {
    if (currentNumber === 0) {
      return;
    }
    setCurrentNumber(prev => prev - 1)
    setAnswers((previousAnswers) => previousAnswers.slice(0, -1))
    setResultData(null)
  }

  const handleRestart = () => {
    setCurrentNumber(0);
    setAnswers([]);
    setResultData(null);
  };
  return (
    <main>
      {resultData ? (
        <Result
          resultData={resultData}
          reStart={handleRestart}
        />
      ) : (
      <QA currentNumber={currentNumber} selectAnswer={handleSelectClick}  onPrev={buttonClick}/>
      )}
    </main>
  );
}