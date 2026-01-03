export default function Header() {
  return (
    <header className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
        Salary Predictor
      </h1>
      <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full mb-4"></div>
      <p className="text-slate-500 text-sm max-w-xs mx-auto">
        Powered by a Python-trained Linear Regression model and FastAPI.
      </p>
    </header>
  );
}