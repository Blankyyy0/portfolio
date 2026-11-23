export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#0f1115] p-8 text-center text-[#e8e8ea]">
      <div>
        <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-[-0.02em]">
          Portfolio
        </h1>
        <p className="mt-4 text-lg text-[#9a9ca3]">
          <span className="mr-2 inline-block size-[0.6em] animate-[pulse_2s_infinite] rounded-full bg-[#4f8cff]" />
          Something new is on the way. Check back soon.
        </p>
      </div>
    </main>
  );
}
