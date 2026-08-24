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
    <section className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl bg-white p-8 text-center shadow-lg">
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-600">
        Your Result
      </p>

      <h1 className="mb-4 text-3xl font-bold text-slate-900">
        {resultData.title}
      </h1>

      <p className="mb-8 max-w-lg text-slate-600">
        {resultData.description}
      </p>

      <button
        type="button"
        onClick={reStart}
        className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Test again
      </button>
    </section>
  );
}

export default Result