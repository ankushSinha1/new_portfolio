export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="animate-gradient absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/10" />
      <div className="animate-float absolute left-[5%] top-[10%] h-4 w-4 rounded-full bg-green-500/15" />
      <div className="animate-float animation-delay-1000 absolute right-[15%] top-[20%] h-3 w-3 rounded-full bg-green-500/15" />
      <div className="animate-float animation-delay-2000 absolute left-[20%] top-[40%] h-2 w-2 rounded-full bg-green-500/15" />
      <div className="animate-float animation-delay-3000 absolute right-[25%] top-[60%] h-3 w-3 rounded-full bg-green-500/15" />
      <div className="animate-float animation-delay-4000 absolute left-[15%] top-[80%] h-4 w-4 rounded-full bg-green-500/15" />
      <div className="animate-float animation-delay-5000 absolute right-[35%] top-[30%] h-2 w-2 rounded-full bg-green-500/15" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </div>
  );
}
