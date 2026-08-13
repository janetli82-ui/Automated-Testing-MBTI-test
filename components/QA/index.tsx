import { mbtiQuestions } from "../../data/data"

const QA = ({currentNumber, selectAnswer, onPrev}: any) => {

    const currentData = mbtiQuestions[currentNumber]

    return (
        <div className="bg-white rounded-2xl w-full px-4 py-10 overflow-hidden flex flex-col gap-5 text-center">
            <p className="text-[0.6875rem] text-blue-400 font-extrabold">QUESTION {currentData.id}</p> 
            <div className="flex justify-center">
                <h2 className="font-bold">{currentData.question}</h2>
            </div>
            <div className="w-full flex flex-col gap-3">
                {currentData.options.map((option: any, index:number) => (
                    <button
                    key={index}
                    onClick={()=>selectAnswer(option.type)}
                    className="cursor-pointer border border-1 border-slate-300 text-slate-600 w-fit p-2 mx-auto rounded-2xl hover:text-black"
                    >
                    {option.text}
                    </button>
                ))}
            </div>
            <div>
                {currentNumber > 0 && (
                    <button 
                    onClick={onPrev}
                    className="text-sm text-slate-500 hover:text-slate-800 mb-4 cursor-pointer"
                    >
                    ← Previous
                    </button>
                )}
            </div>
        </div>
    )
}
export default QA