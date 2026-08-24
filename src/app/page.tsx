'use client'

import { useState } from "react";
import QA from "@/components/QA";
import { mbtiQuestions, QuizResult, results } from "@/data/data";
import Result from "@/components/Result";
import Footer from "@/components/Footer";


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
    <div className="flex min-h-screen flex-col bg-slate-100">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-10">
      {resultData ? (
        <Result
          resultData={resultData}
          reStart={handleRestart}
        />
      ) : (
      <QA currentNumber={currentNumber} selectAnswer={handleSelectClick}  onPrev={buttonClick}/>
      )}
    </main>
    <Footer />
    </div >
  )
}