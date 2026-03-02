const App = {
  data() {
    return {
      menuActive: false,
      links: [
        { href: "./assets/Carmen_Ma_Resume.pdf", icon: "file-text" },
        { href: "https://github.com/pomimon", icon: "github" },
        { href: "https://www.linkedin.com/in/carmen-ma12343/", icon: "linkedin" },
        { href: "mailto:carmen.ma73@gmail.com", icon: "mail" },
      ],
    }
  },
  mounted() {
    feather.replace()
  },
  updated() {
    feather.replace()
  },
  methods: {
    toggleHamburger() {
      this.menuActive = !this.menuActive
    },
    navClass(className) {
      return {
        [className]: true,
        "is-active": this.menuActive,
      }
    },
  },
  template: `
  <div>
    <nav class="navbar is-warning px-4" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink class="navbar-item has-text-primary is-size-5" to="/">
          Carmen Ma
        </RouterLink>

        <a
          role="button"
          aria-label="menu"
          aria-expanded="false"
          :class="navClass('navbar-burger')"
          @click="toggleHamburger"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="navClass('navbar-menu')">
        <div class="navbar-end">
          <a
            class="navbar-item has-text-primary"
            target="_blank"
            rel="noopener noreferrer"
            v-for="link in links"
            :key="link.href"
            :href="link.href"
          >
            <i :data-feather="link.icon"></i>
          </a>
        </div>
      </div>
    </nav>

    <RouterView />

    <footer class="footer" id="contact">
      <div class="has-text-centered">
        <a class="button is-danger has-text-white" href="mailto:carmen.ma73@gmail.com">
          <span class="icon">
            <i data-feather="send"></i>
          </span>

          <span>
            Contact Me
          </span>
        </a>
      </div>
    </footer>
  </div>
  `,
}

const Card = {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: String,
    description: String,
    actions: Array,
  },
  computed: {
    showContent() {
      return this.title || this.description
    },
    showFooter() {
      return this.actions.length > 0
    },
  },
  template: `
    <div class="card">
      <div class="card-image">
        <figure class="image is-16by9">
          <img :src="image" :alt="title"/>
        </figure>
      </div>

      <div class="card-content" v-if="showContent">
        <div class="content">
          <h5 v-if="title" v-text="title"/>
          <p v-if="description" v-text="description"/>
        </div>

        <div class="buttons mt-4 are-medium" v-if="showFooter">
          <template v-for="action in actions">
            <RouterLink
              class="button is-info is-outlined is-rounded"
              v-if="action.route"
              v-text="action.name"
              :to="action.route"
            />

            <a
              v-else
              class="button is-info is-outlined is-rounded"
              target="_blank"
              rel="noopener noreferrer"
              v-text="action.name"
              :href="action.url"
            />
          </template>
        </div>
      </div>
    </div>
  `,
}

const routes = [
  { path: "/", component: Home },
  { path: "/designs", component: Designs },
  { path: "/illustrations", component: Illustrations },
]

const router = VueRouter.createRouter({
  history: VueRouter.createMemoryHistory(),
  routes,
})

Vue
  .createApp(App)
  .component("Card", Card)
  .use(router)
  .mount("#app")
