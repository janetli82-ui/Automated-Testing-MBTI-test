import { mbtiQuestions } from "../../data/data";


type QAProp = {
  currentNumber: number;
  selectAnswer: (type:string) => void;
  onPrev?: () => void;
};

const QA = ({ currentNumber, selectAnswer, onPrev }: QAProp) => {
  return (
    <>
      {currentNumber < mbtiQuestions.length && (
        <div className="bg-white rounded-2xl md:max-w-2xl md:h-90 items-center p-10">
          <p className="text-blue-400 font-bold text-xs text-center">
            QUESTION {currentNumber + 1}
          </p>
          <div className="flex flex-col mt-5 gap-8 items-center relative">
            <h2 className="text-black font-bold text-base">
              {mbtiQuestions[currentNumber].question}
            </h2>
            {mbtiQuestions[currentNumber].options.map((answer, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(answer.type)}
                className="border rounded-xl border-gray-400 md:h-10 md:w-lg cursor-pointer text-gray-600 text-center leading-8.25" data-testId="option-button"
              >
                {answer.text}
              </button> 
            ))} 
            {currentNumber > 0 && <button onClick={onPrev} className="cursor-pointer md:absolute md:left-6 md:top-50 border bg-amber-400 rounded-xl w-20">Previous</button>}
          </div>
          
        </div> 
      )}
    </>
  );
};

export default QA;
