interface ResultProps {
    reStart: () => void;
    resultData: {
        title:string,
        description: string
    }
}

const Result = ({reStart, resultData}:ResultProps) => {

    return (
        <div>
            <span className="text-sm font-bold text-blue-500 uppercase tracking-widest">
            Your Result
            </span>
            <h1 className="text-4xl font-extrabold text-slate-800 my-2">
            {resultData.title}
            </h1>
            <p className="text-slate-600 font-medium leading-relaxed">
            {resultData.description}
            </p>
            <button
            onClick={reStart}
            className="mt-4 px-6 py-3 bg-amber-500 hover:bg-blue-400 text-white font-bold rounded-xl transition-colors cursor-pointer"
            >
            Test again!
            </button>
        </div>
    )
}

export default Result