const Home = {
  data() {
    return {
      skills: [
        { name: "Adobe Creative Cloud", theme: "success" },
        { name: "Affinity Suite", theme: "success" },
        { name: "Figma", theme: "success" },
        { name: "Branding", theme: "success" },
        { name: "Illustration", theme: "success" },
        { name: "Canva", theme: "success" },

        { name: "React", theme: "success" },
        { name: "Vue", theme: "success" },
        { name: "TypeScript", theme: "success" },
        { name: "JavaScript", theme: "success" },
        { name: "Python", theme: "success" },
        { name: "HTML/CSS", theme: "success" },

        { name: "Jest", theme: "success" },
        { name: "Bootstrap", theme: "success" },
        { name: "Tailwind CSS", theme: "success" },
        { name: "Git", theme: "success" },
        { name: "Bun", theme: "success" },
      ],
      cards: [
        {
          image: "./assets/designs/BCLC-thumbnail.jpg",
          title: "Design",

          actions: [
            { name: "View", route: "/designs" },
          ],
        },
        {
          image: "./assets/compresso.png",
          title: "Code",
          actions: [
            { name: "View", route: "/code" },
          ],
        },
        {
          image: "./assets/illustrations/tiger2.jpg",
          title: "Illustrations",
          actions: [
            { name: "View", route: "/illustrations" },
          ],
        },
      ]
    }
  },

  template: `
    <main>
      <section class="hero is-danger" id="hero">


        <div class="hero-body">
          <div class="container has-text-centered">
            <h1 class="title has-text-weight-bold has-text-info">
              Hey, I'm Carmen
            </h1>

            <div class="subtitle mt-6 mb-6">
              <div class="columns">
                <div class="column"/>
                <div class="column is-two-thirds has-text-info">
                  A designer who codes, creating brand identities, marketing materials,
                  and digital experiences, with the frontend skills to bring them to life in React and TypeScript
                </div>
                <div class="column"/>
              </div>
            </div>

            <div class= "gap-5">
              <RouterLink
                class="button is-success has-text-danger is-normal is-responsive mx-2"
                to="#projects"
              >
                View My Work
              </RouterLink>

              <RouterLink
                class="button is-outlined is-success is-normal is-responsive mx-2"
                to="#contact"
              >
                Get In Touch
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="projects">
        <div class="container-body">


          <div class="columns is-multiline">
            <div class="column is-full card-margin" v-for="card in cards">
              <Card
                :image="card.image"
                :title="card.title"
                :actions="card.actions"
                ratio="4by1"
              />
            </div>
          </div>
        </div>
      </section>


      <section class="section experience-border is-medium has-background-danger">
        <div class="container has-text-centered experience-margin">
          <div class="columns">
            <div class="column"/>
            <div class="column is-three-quarters">
              <div class="content">
                <h1 class="has-text-info title is-2">Experience</h1>

                <p class="has-text-info">
                  With 6+ years of experience in graphic design and a growing passion for front-end development, I enjoy creating thoughtful, user-focused experiences from concept to code. There's always something new to learn, and that's part of what keeps me excited about this industry.
                </p>
                <p class="has-text-info">
                  Some technologies and tools I've worked with:
                </p>

                <div class="tags ">
                  <span
                    v-for="skill in skills"
                    v-text="skill.name"
                    :key="skill.name"
                    :class="\`tag is-rounded is-success has-text-danger has-text-weight-bold is-\${skill.theme}\`"
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
