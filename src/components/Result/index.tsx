type ResultData = {
  title: string;
  description: string;
};

type ResultProps = {
  resultData: ResultData;
  reStart: () => void;
};
const Result = ({
  resultData,
  reStart,
}: ResultProps) => {
  return (
    <section className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-2xl bg-amber-50 p-10 md:h-90">
      <div className="relative mt-5 flex w-full flex-col items-center gap-8 text-center">
      <p className="text-balance font-bold text-amber-600">
        Your Result
      </p>

      <h1 className="text-2xl font-bold text-slate-900">
        {resultData.title}
      </h1>

      <p className="max-w-lg text-center text-slate-600">
        {resultData.description}
      </p>

      <button
        type="button"
        onClick={reStart}
          className="h-10 cursor-pointer rounded-xl border border-gray-400 px-5 text-center leading-8 text-gray-600 transition hover:bg-amber-200"
      >
        Test again
      </button>
      </div>
    </section>
  );
}

export default Result