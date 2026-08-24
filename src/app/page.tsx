'use client'

import { useState } from "react";
import QA from "@/components/QA";
import { mbtiQuestions } from "@/data/data";
import ProgressBar from "@/components/ProgressBar";


export default function Home() {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  
  const handleSelectClick = (answerType: string) => {
    const updatedAnswers = [...answers, answerType]
    setAnswers(updatedAnswers)

    setCurrentNumber(prev => prev + 1)
  }

  const buttonClick = () => {
    setCurrentNumber(prev => prev - 1)
  }
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-10">
      <div className="mb-8">
        <ProgressBar
          currentNumber={currentNumber}
          totalQuestions={mbtiQuestions.length}
        />
      </div>
      <QA currentNumber={currentNumber} selectAnswer={handleSelectClick}  onPrev={buttonClick}/>
    </main>
  );
}