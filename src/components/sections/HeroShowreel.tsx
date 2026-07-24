"use client";

export default function HeroShowreel() {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black" id="hero">
      {/* Background Video */}
      <video
        className="video-canvas opacity-70"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Film grain overlay */}
      <div className="absolute inset-0 film-grain pointer-events-none" />
    </section>
  );
}
