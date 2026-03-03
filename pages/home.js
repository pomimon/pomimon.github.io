const Home = {
  data() {
    return {
      starfield: null,
      skills: [
        { name: "React", theme: "primary" },
        { name: "TypeScript", theme: "primary" },
        { name: "JavaScript", theme: "primary" },
        { name: "Python", theme: "primary" },
        { name: "HTML/CSS", theme: "primary" },

        { name: "Jest", theme: "info" },
        { name: "Bootstrap", theme: "info" },
        { name: "Tailwind CSS", theme: "info" },
        { name: "Git", theme: "info" },
        { name: "Bun", theme: "info" },

        { name: "Adobe Creative Cloud", theme: "success" },
        { name: "Affinity Suite", theme: "success" },
        { name: "Figma", theme: "success" },
        { name: "Branding", theme: "success" },
        { name: "Illustration", theme: "success" },
        { name: "Canva", theme: "success" },
      ],
      cards: [
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
          image: "./assets/gradient.jpg",
          title: "Coming soon",
          description: "New project, coming soon.",
          actions: [
            { name: "View", url: null },
          ],
        },
        {
          image: "./assets/gradient.jpg",
          title: "Illustrations",
          description: "A mix of random monsters and somewhat cute things.",
          actions: [
            { name: "View", route: "/illustrations" },
          ],
        },
        {
          image: "./assets/gradient.jpg",
          title: "Design",
          description: "A collection of design projects.",
          actions: [
            { name: "View", route: "/designs" },
          ],
        },
      ]
    }
  },
  mounted() {
    this.starfield = new StarField(this.$refs.starfield)
  },
  unmounted() {
    if (this.starfield) {
      this.starfield.destroy()
      this.starfield = null
    }
  },
  template: `
    <main>
      <section class="hero is-danger is-fullheight-with-navbar hero-starfield" id="hero">
        <canvas ref="starfield" class="starfield-canvas"/>

        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title has-text-weight-bold has-text-info">
              Hey, I'm Carmen
            </h1>

            <div class="subtitle mx-6 mt-3">
              <div class="columns">
                <div class="column"/>
                <div class="column is-half has-text-white">
                  a frontend developer with a background in design, building React and TypeScript applications with an emphasis on reusable components, responsive layouts, and usability.
                </div>
                <div class="column"/>
              </div>
            </div>

            <div class= gap-4>
              <RouterLink
                class="button is-primary has-text-warning is-medium is-responsive mx-2"
                to="#projects"
              >
                View My Work
              </RouterLink>

              <RouterLink
                class="button is-outlined is-success is-medium is-responsive mx-2"
                to="#contact"
              >
                Get In Touch
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="container">
          <div class="title is-2 has-text-centered has-text-info mb-6">
            Projects
          </div>

          <div class="columns">
            <div class="column"/>
            <div class="column is-four-fifths">
              <div class="columns is-multiline is-3-tablet is-8-desktop">
                <div class="column is-half" v-for="card in cards">
                  <Card
                    :image="card.image"
                    :title="card.title"
                    :description="card.description"
                    :actions="card.actions"
                    ratio="16by9"
                  />
                </div>
              </div>
            </div>
            <div class="column"/>
          </div>
        </div>
      </section>

      <section class="section is-medium has-background-danger">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column"/>
            <div class="column is-three-quarters">
              <div class="content">
                <h1 class="has-text-primary title is-2">Experience</h1>

                <p>
                  I'm focused on building responsive, user-focused web applications in React and TypeScript with a 6+ year background of professional graphic design experience. I'm always eager to learn more in this fast paced industry.
                </p>

                <p>
                  Some technologies and tools I've worked with:
                </p>

                <div class="tags are-normal">
                  <span
                    v-for="skill in skills"
                    v-text="skill.name"
                    :key="skill.name"
                    :class="\`tag is-rounded has-text-weight-bold is-\${skill.theme}\`"
                  />
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
