export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 bg-muted">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop"
          alt="Architecture hero"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      <div className="relative z-10 container text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
          Architecture & Design
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Contemporary practice focused on spatial clarity, material honesty, and human experience
        </p>
      </div>
    </section>
  );
}
