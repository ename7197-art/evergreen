export default function ProjectCard({ title, description }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
        <svg
          aria-hidden="true"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21c4.5-2.4 7-6.2 7-11V5l-7-2-7 2v5c0 4.8 2.5 8.6 7 11Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-emerald-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}
