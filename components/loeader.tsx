export default function Loader() {
  return (
    <div className="mt-28 flex flex-col items-center justify-center gap-4">
      <div
        className="text-surface mx-auto block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
      </div>
      <h1 className="text-xl">Collecting meals, please wait!</h1>
    </div>
  );
}
