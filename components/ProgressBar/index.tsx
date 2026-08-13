interface ProgressBarProps {
    currentNumber :number;
    totalQuestions?:number;
} 

const ProgressBar = ({currentNumber, totalQuestions=4}:ProgressBarProps) => {

    const progressPercent = ((currentNumber+1)/totalQuestions) * 100;
    return (
        <div className="w-full bg-[#e2e8f0e6] rounded-3xl h-1.5 overflow-hidden mb-7">
            <div
            role="progressbar"
            style={{width:`${progressPercent}%`}}
            className="bg-amber-300 h-full rounded-3xl transition-all duration-300 ease-out"></div>
        </div>
    )
}

export default ProgressBar