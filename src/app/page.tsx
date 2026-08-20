'use client'

import { useState } from "react";
import QA from "@/components/QA";


export default function Home() {
  const [currentNumber, setCurrentNumber] = useState(0)

  const handleSelectClick = () => {
    setCurrentNumber(prev => prev + 1)
  }

  const buttonClick = () => {
    setCurrentNumber(prev => prev - 1)
  }
  return (
    <main>
      <QA currentNumber={currentNumber} selectAnswer={handleSelectClick}  onPrev={buttonClick}/>
    </main>
  );
}