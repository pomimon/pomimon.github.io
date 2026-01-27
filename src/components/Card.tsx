import pokedex from "@/assets/pokedex.png";
import streams from "@/assets/streams.png";

export function Card() {
  return (
    <div className="container">
      <div className="text-accent flex flex-row justify-center text-4xl font-bold mt-10">
        <h2>Projects</h2>
      </div>
      <div className="flex flex-col md:flex-row w-full py-30 justify-center gap-8 px-10">
        <div className="card bg-base-100 w-full md:w-120 shadow-sm">
          <figure>
            <img src={pokedex} alt="Pokedex" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pokedex</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://pomimon.github.io/pokedex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live demo</button>
              </a>
              <a
                href="https://github.com/pomimon/pokedex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Github</button>
              </a>
            </div>
          </div>
        </div>

        <div className="divider md:divider-horizontal h-60 self-center"></div>

        <div className="card bg-base-100 w-full md:w-120 shadow-sm">
          <figure>
            <img src={streams} alt="Wildlife streams" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Wildlife streams</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <a
                href="https://stream-app-568744696610.us-west1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Live demo</button>
              </a>
              <a
                href="https://github.com/pomimon/streaming-website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary">Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
