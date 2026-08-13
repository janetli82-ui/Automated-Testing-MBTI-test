'use client'
import ProgressBar from "../../components/ProgressBar"
import QA from "../../components/QA"
import Footer from "../../components/Footer";
import { useState } from "react";
import {mbtiQuestions} from "../../data/data"
import Result from "../../components/Result"
import {results} from "../../data/data"


export default function Home() {

  const [currentNumber, setCurrentNumber ] =useState(0);

  //선택한 알파벳을 모아둘 배열
  const [userAnswers, setUserAnswers] = useState<string[]>([])

  //결과 화면을 띄울지 여부
  const [showResult, setShowResult] = useState(false)

  //답변을 선택 했을 때 실행되는 함수!
  const handleSelectAnswer = (selectedType:string) => {

    //user가 선택한 알파벳을 배열에 누적
    const nextAnswer = [...userAnswers, selectedType]
    setUserAnswers(nextAnswer)

    // 아직 다음 질문이 남아있다면 질문 번호 +1
    if(currentNumber < mbtiQuestions.length -1) {
      setCurrentNumber ((prev) => prev +1)
    } else {
      setShowResult(true)
    }
  }

    // 유저한테 받은 답 하나로 합치기 (예: ['E', 'N', 'F', 'P'] -> "ENFP")
    const finalResult = userAnswers.join("")
    const resultData = results[finalResult]


  //이전 질문으로 돌아가는 함수
  const handlePrevQuestion = () => {
    if(currentNumber > 0) {
      setCurrentNumber((prev)=> prev -1)

      //가장 최근에 고른 답 하나를 배열에서 지워줍니다. (맨 뒤 아이템 제거)
      setUserAnswers((prev) => prev.slice(0, -1))
    }
  }

  const handleRestart = () => {
    setCurrentNumber(0)
    setUserAnswers([])
    setShowResult(false)
  }

  return (
    <div className="">
      {!showResult ? (
        <>
          <ProgressBar currentNumber={currentNumber} />
          <QA 
            currentNumber={currentNumber}
            selectAnswer={handleSelectAnswer}
            onPrev={handlePrevQuestion}
          />
        </>
      ) : ( //퀴즈 끝나면
        <Result resultData={resultData} reStart={handleRestart} />
      )}
      <Footer />
    </div>
  );
}
