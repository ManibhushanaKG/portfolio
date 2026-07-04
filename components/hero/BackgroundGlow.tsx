export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute left-[-8%] top-[-10%] h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="absolute right-[-8%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[130px]" />

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#030712] to-transparent" />

    </div>
  );
}