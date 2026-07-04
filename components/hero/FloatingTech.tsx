const tech = [
  "Java",
  "Python",
  "React",
  "Next.js",
  "AI",
  "Oracle",
];

export default function FloatingTech() {
  return (
    <>
      <div className="absolute left-20 top-40 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
        {tech[0]}
      </div>

      <div className="absolute right-24 top-56 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
        {tech[1]}
      </div>

      <div className="absolute left-32 bottom-48 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
        {tech[2]}
      </div>

      <div className="absolute right-32 bottom-52 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
        {tech[3]}
      </div>

      <div className="absolute left-1/2 top-28 -translate-x-1/2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 backdrop-blur-xl">
        {tech[4]}
      </div>

      <div className="absolute right-10 top-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
        {tech[5]}
      </div>
    </>
  );
}