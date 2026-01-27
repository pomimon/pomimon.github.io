export function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen relative overflow-hidden">
      {/* Animated background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>

      <div className="hero-content text-center relative z-10">
        <div className="max-w-2xl">
          <div className="mb-4">
            <span className="badge badge-primary badge-lg">
              Frontend Developer
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hey, hi, hello
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-base-content/80">
            I build interactive web experiences that blend design and
            functionality
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="btn btn-primary btn-lg">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-base-content/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
