type ProgressBarProps = {
  currentNumber: number;
  totalQuestions?: number;
};

const ProgressBar = ({
  currentNumber,
  totalQuestions = 4,
}: ProgressBarProps) => {
  const currentQuestion = Math.min(
    Math.max(currentNumber + 1, 0),
    totalQuestions,
  );

  const percentage = Math.round(
    (currentQuestion / totalQuestions) * 100,
  );

  return (
    <div
      aria-label="Quiz progress"
      className="h-3 w-full overflow-hidden rounded-full bg-slate-200"
    >
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        style={{ width: `${percentage}%` }}
        className="h-full rounded-full bg-indigo-600 transition-all duration-300"
      />
    </div>
  );
}

export default ProgressBar