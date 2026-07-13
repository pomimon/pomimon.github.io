const Code = {
  data() {
    return {
      selectedProject: null,
      cards: [
        {
          image: "./assets/worldy.jpg",
          title: "Worldy",
          description: "A JRPG style walking world made in Phaser and Gridengine, on-going project ",
          actions: [
            { name: "View", url: "https://pomimon.github.io/worldy" },
            { name: "Code", url: "https://github.com/pomimon/worldy" },
          ],
        },
        {
          image: "./assets/compresso.jpg",
          title: "Compresso",
          description: "A vibe coded single-file browser tool for decompressing and compressing LZ4 files. No server, no dependencies.",
          actions: [
            { name: "View", url: "https://pomimon.github.io/compresso" },
            { name: "Code", url: "https://github.com/pomimon/compresso" },
          ],
        },
        {
          image: "./assets/pokedex2.jpg",
          title: "Pokedex V2",
          description: "Pokedex V2 built in Vue with more interactivity, displays various information for the original 151 Pokémon.",
          actions: [
            { name: "View", url: "https://pomimon.github.io/pokedex-vue" },
            { name: "Code", url: "https://github.com/pomimon/pokedex-vue" },
          ],
        },
        {
          image: "./assets/pokedex.jpg",
          title: "Pokedex V1",
          description: "Pokédex V1 built in React, displays various information for the original 151 Pokémon.",
          actions: [
            { name: "View", url: "https://pomimon.github.io/pokedex" },
            { name: "Code", url: "https://github.com/pomimon/pokedex" },
          ],
        },
        {
          image: "./assets/streams.jpg",
          title: "Wildlife streams",
          description: "A streaming web application that aggregates and displays live animal cam streams from multiple sources.",
          actions: [
            { name: "View", url: null },
            { name: "Code", url: "https://github.com/pomimon/streaming-website" },
          ],
        },


        {
          title: "BCLC Community Impact Reports",
          image: "./assets/designs/BCLC-thumbnail.jpg",
          software: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
          description: "The Province of B.C. established BCLC 35 years ago to give back to communities and support growth across the province. The annual Community Impact Reports showcase how gambling revenue gets distributed to benefit communities, provincial programs, charities, and major events throughout B.C. I worked on producing these reports, handling everything from layout design and typesetting to photo editing and copy refinement. I also made sure everything stayed on-brand and collaborated with stakeholders throughout the process to incorporate feedback and keep everything accurate.",
          summary: "Annual community impact reports to show how BCLC gives back",
          images: [
            "BCLC-thumbnail.jpg",
            "BCLC-DC-spread.jpg",
            "BCLC-lake-graphic.jpg",
            "BCLC-dawson-CIR.jpg",
            "BCLC-V-spread.jpg",
            "BCLC-vancouver-graphic.jpg",
          ],
        },
      ],
    }
  },

  template: `
    <main>
      <section class="section" id="projects">
        <div class="container">
          <div class="columns">
            <div class="column"/>
            <div class="column is-four-fifths">
              <div class="title is-2 is-spaced has-text-centered has-text-info mt-6">
                Coding Projects
              </div>

              <div class="subtitle is-6 has-text-centered has-text-info mb-6">
                A collection of coding projects I've done mainly using React, Vue, Typescript and Phaser.
              </div>

              <div class="columns is-multiline is-3-tablet is-8-desktop pt-5">
                <div class="column is-full" v-for="card in cards">
                  <Card
                    :image="card.image"
                    :title="card.title"
                    :description="card.summary"
                    :actions="card.actions"
                    ratio="4by1"
                </div>
              </div>
            </div>
            <div class="column"/>
          </div>
        </div>
      </section>
    </main>
  `,
}
