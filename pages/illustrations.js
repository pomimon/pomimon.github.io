const Illustrations = {
  data() {
    return {
      modalOpen: false,
      selectedProject: null,
      cards: [
        { title: "Bluebird", image: "./assets/illustrations/bluebird.jpg" },
        { title: "Pinkbird", image: "./assets/illustrations/pinkbird.jpg" },

        { title: "Big Bird", image: "./assets/illustrations/bigbird.jpg" },
        { title: "Birb", image: "./assets/illustrations/birb.jpg" },

        { title: "Froggo", image: "./assets/illustrations/froggo.jpg" },
        { title: "Chinatocat", image: "./assets/illustrations/chinatocat.jpg" },

        { title: "Creep", image: "./assets/illustrations/creep.jpg" },
        { title: "Deardeer", image: "./assets/illustrations/deardeer.jpg" },

        { title: "Mushu", image: "./assets/illustrations/mushu.jpg" },
        { title: "Thing", image: "./assets/illustrations/thing.jpg" },
      ],
    }
  },
    methods: {
    openModal(card) {
      this.modalOpen = true
      this.selectedProject = card
    },
    closeModal() {
      this.modalOpen = false
      this.selectedProject = null
    },
  },
  watch: {
    modalOpen(isOpen) {
      document.documentElement.classList.toggle("is-clipped", isOpen)
    }
  },
  template: `
    <main>
      <section class="section" id="projects">
        <div class="container">
          <div class="columns">
            <div class="column" />
            <div class="column is-four-fifths">
              <div class="title is-2 is-spaced has-text-centered has-text-info">
                Illustrations
              </div>

              <div class="subtitle is-6 has-text-centered has-text-white ">
                A variety of vector work I've created using Adobe Illustrator, Affinity Designer, or Figma. Many of these monster illustrations begins with a few random pen strokes. I play around until I start seeing something emerge from the chaos, and that's what it becomes. It's a spontaneous, discovery-driven process where the final design reveals itself organically. This collection demonstrates my approach to illustration and design across different styles and subjects, blending intuition with technical execution.
              </div>

              <div class="columns is-multiline is-3-tablet is-8-desktop">
                <div class="column is-half" v-for="card in cards">
                  <Card :image="card.image" @image-click="openModal(card)" />
                </div>
              </div>
            </div>
            <div class="column" />
          </div>
        </div>
      </section>

      <Teleport to="body">
        <div class="modal" :class="{ 'is-active': modalOpen }">
          <div class="modal-background" @click="closeModal"/>

          <div class="modal-card" v-if="selectedProject">
            <button class="modal-close" aria-label="close" @click="closeModal"/>

            <section class="modal-card-body" v-if="selectedProject">
              <figure class="image">
                <img :src="selectedProject.image" :alt="selectedProject.title" />
              </figure>
            </section>
          </div>
        </div>
      </Teleport>
    </main>
  `,
}
