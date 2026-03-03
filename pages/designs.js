const Designs = {
  data() {
    return {
      cards: [
        {
          title: "BCLC Community Impact Reports",
          image: "./assets/designs/BCLC-thumbnail.jpg",
        },
        {
          title: "BCLC Quarterly Digest",
          image: "./assets/designs/lotto-b.jpg",
        },
        {
          title: "Cider Days",
          image: "./assets/designs/cd-1.jpg",
        },

        {
          title: "Halfday Skincare",
          image: "./assets/designs/hd-smear.jpg",
        },

        {
          title: "Bowhouse",
          image: "./assets/designs/bh-comp.jpg",
        },

        {
          title: "Lagom Concepts",
          image: "./assets/designs/lc-1.jpg",
        },

        {
          title: "Illumine Creative",
          image: "./assets/designs/ip-7.jpg",
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
              <div class="title is-2 is-spaced has-text-centered has-text-info">
                Design Work
              </div>

              <div class="subtitle is-6 has-text-centered has-text-white ">
                Here's a collection of design work I've done over the years using Adobe Creative Cloud, Affinity Designer, and Figma. From branding and packaging to digital design and illustrations, these projects showcase different styles and approaches I've explored. Each piece represents a different challenge and creative direction I took on.
              </div>

              <div class="columns is-multiline is-3-tablet is-8-desktop">
                <div class="column is-half" v-for="card in cards">
                  <Card :image="card.image" ratio="1by1"/>
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
