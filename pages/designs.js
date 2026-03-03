const Designs = {
  data() {
    return {
      modalOpen: false,
      selectedProject: null,
      cards: [
        {
          title: "BCLC Community Impact Reports",
          image: "./assets/designs/BCLC-thumbnail.jpg",
          software: ["Adobe InDesign", "Adobe Photoshop", "Adobe Illustrator"],
          description: "The Province of B.C. established BCLC 35 years ago to give back to communities and support growth across the province. The annual Community Impact Reports showcase how gambling revenue gets distributed to benefit communities, provincial programs, charities, and major events throughout B.C. I worked on producing these reports, handling everything from layout design and typesetting to photo editing and copy refinement. I also made sure everything stayed on-brand and collaborated with stakeholders throughout the process to incorporate feedback and keep everything accurate.",
          images: [
            "BCLC-thumbnail.jpg",
            "BCLC-DC-spread.jpg",
            "BCLC-lake-graphic.jpg",
            "BCLC-dawson-CIR.jpg",
            "BCLC-V-spread.jpg",
            "BCLC-vancouver-graphic.jpg",
          ],
        },
        {
          title: "BCLC Quarterly Digest",
          image: "./assets/designs/lotto-b.jpg",
          software: ["Adobe InDesign", "Adobe Photoshop"],
          description: "The Lottery Winners Quarterly Digest highlights the top wins and inspiring stories from each quarter. I designed the layout based on stakeholder requirements and the content they provided, handled photo editing to enhance quality, took care of the typesetting, and refined the copy to keep everything clear and consistent throughout.",
          images: [
            "lotto-ipad.jpg",
            "lotto-news.jpg",
            "lotto-b.jpg",
            "lotto-1.png",
            "lotto-2.png",
            "lotto-3.png",
          ],
        },
        {
          title: "Cider Days",
          image: "./assets/designs/cd-1.jpg",
          software: ["Affinity Designer", "Affinity Photo"],
          description: "Cider Days is a concept project for a hard cider brand that focuses on bold, unique flavors and a playful, approachable identity. For the packaging design, I wanted to capture the brand’s fun and energetic spirit with vibrant colors and dynamic visuals, all tied together with a retro-inspired style. The goal was to create a design that feels nostalgic yet fresh, evoking a sense of joy and discovery while standing out on the shelf. This project allowed me to experiment with blending retro aesthetics and modern design elements to bring the brand’s personality to life.Cider Days is a concept project I created for a hard cider brand built around bold flavors and a playful vibe. I designed the packaging to match that energy with lots of vibrant colors and dynamic visuals with a retro-inspired twist. The idea was to mix nostalgia with something that feels fresh and modern, creating that fun sense of discovery you get when you spot something cool on the shelf. This project gave me a chance to play around with retro aesthetics while keeping things contemporary, bringing the brand's personality to life through the design.",
          images: [
            "cd-wall.jpg",
            "cd-1.jpg",
            "cd-2.jpg",
            "cd-3.jpg",
            "cd-4.jpg",
            "cd-bus.jpg",
            "cd-bag.jpg",
          ],
        },

        {
          title: "Halfday Skincare",
          image: "./assets/designs/hd-smear.jpg",
          software: ["Affinity Designer", "Affinity Photo"],
          description: "Halfday Skincare is a concept project inspired by the idea of slowing down and embracing natural beauty. I designed the packaging for a minimalist, plant-based skincare brand with a clean, approachable aesthetic that doesn't feel intimidating. The goal was to create something modern and fresh that feels welcoming to everyone, keeping things simple and transparent at the core. This project gave me a chance to explore thoughtful design that encourages those little moments of relaxation and self-care we all need.",
          images: [
            "hd-poster.jpg",
            "hd-container.jpg",
            "hd-lay.jpg",
            "hd-pb.jpg",
            "hd-tote.jpg",
            "hd-box.jpg",
            "hd-smear.jpg",
          ],
        },

        {
          title: "Bowhouse",
          image: "./assets/designs/bh-comp.jpg",
          software: ["Figma", "Affinity Photo"],
          description: "This concept landing page brings a festive vibe to a pet store with a subtle red Christmas theme and playful imagery. I went for a warm, inviting feel with soft holiday accents that complement cute pet photos without going overboard. The design features a cheerful headline and an easy-to-navigate layout that highlights holiday promotions, gift ideas, and seasonal treats. I kept the tone lighthearted and joyful, balancing holiday spirit with clean functionality to make the shopping experience simple and fun for pet owners during the season.",
          images: [
            "bh-comp.jpg",
            "bh-ipad.jpg",
            "bh-comp2.jpg",
            "bh-landing.jpg",
            "bh-box.jpg",
          ],
        },

        {
          title: "Lagom Concepts",
          image: "./assets/designs/lc-1.jpg",
          software: ["Adobe Illustrator"],
          description: "Lagom Concepts is a children's clothing brand based in Vancouver, BC. They wanted playful, adventure-themed illustrations featuring a lovable bear character, so I created a series of illustrations that brought that vision to life. Along with the illustrations, I designed their business cards, hang tags, stickers, buttons, and luggage tags. For the business cards, I went with a sleek black design with a clear varnish finish and kept the text minimal for a subtle but impactful look. I carried that same style through to the product tags to keep everything cohesive and on-brand.",
          images: [
            "lp-1.jpg",
            "lp-2.jpg",
            "lp-3.jpg",
            "lc-1.jpg",
            "lc-2.jpg",
            "lc-3.jpg",
            "lc-4.jpg",
            "lc-5.jpg",
            "lc-6.jpg",
            "lc-7.jpg",
            "lc-8.jpg",
            "li-1.jpg",
            "li-2.jpg",
            "l-gang.jpg",
          ],
        },

        {
          title: "Illumine Creative",
          image: "./assets/designs/ip-7.jpg",
          software: ["Adobe Illustrator", "Adobe Photoshop"],
          description: "Illumine Creative is my personal brand that I've built over the years, inspired by my endless curiosity and love for picking up new hobbies. I chose the name 'Illumine' because it means 'to light up', which captures that moment when someone's face lights up after receiving a thoughtful gift. Adding 'Creative' keeps things open and flexible, so I can experiment with different crafts and ideas without boxing myself in. It's really a reflection of my passion for making meaningful, handmade items that bring people a little joy and connection.",
          images: [
            "ip-1.jpg",
            "ip-2.jpg",
            "ip-3.jpg",
            "ip-4.jpg",
            "ip-5.jpg",
            "ip-6.jpg",
            "ip-7.jpg",
            "ip-8.jpg",
            "ip-9.jpg",
            "icp-1.jpg",
            "icp-2.jpg",
            "icp-3.jpg",
          ],
        },
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
            <div class="column"/>
            <div class="column is-four-fifths">
              <div class="title is-2 is-spaced has-text-centered has-text-info">
                Design Work
              </div>

              <div class="subtitle is-6 has-text-centered has-text-white ">
                Here's a collection of design work I've done over the years using Adobe Creative Cloud, Affinity Designer, and Figma. From branding and packaging to digital design and illustrations, these projects showcase different styles and approaches I've explored. Each piece represents a different challenge and creative direction I took on.
              </div>

              <div class="columns is-multiline is-3-tablet is-8-desktop">
                <div class="column is-half" v-for="card in cards">
                  <Card :image="card.image" ratio="1by1" @image-click="openModal(card)"/>
                </div>
              </div>
            </div>
            <div class="column"/>
          </div>
        </div>
      </section>

      <Teleport to="body">
        <div class="modal" :class="{ 'is-active': modalOpen }">
          <div class="modal-background" @click="closeModal"/>

          <div class="modal-card" v-if="selectedProject">
            <header class="modal-card-head is-shadowless">
              <p class="modal-card-title" v-text="selectedProject.title"/>
              <button class="modal-close" aria-label="close" @click="closeModal" />
            </header>

            <section class="modal-card-body">
              <div class="tags is-left mb-4" v-if="selectedProject.software">
                <span
                  class="tag is-info"
                  v-for="tool in selectedProject.software"
                  :key="tool"
                  v-text="tool"
                />
              </div>

              <p class="mb-5" v-text="selectedProject.description"/>

              <div v-if="selectedProject.images">
                <div
                  class="mb-5"
                  v-for="img in selectedProject.images"
                  :key="img"
                >
                  <figure class="image">
                    <img
                      :src="'./assets/designs/' + img"
                      :alt="selectedProject.title"
                    />
                  </figure>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Teleport>
    </main>
  `,
}
