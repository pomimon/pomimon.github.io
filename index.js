const App = {
  data() {
    return {
      menuActive: false,
      links: [
        {
          href: "./assets/Carmen_Ma_Resume.pdf",
          icon: "file-text",
          text: "View Resume"
        },
        {
          href: "https://github.com/pomimon",
          icon: "github",
          text: "View GitHub"
        },
        {
          href: "https://www.linkedin.com/in/carmen-ma12343/",
          icon: "linkedin",
          text: "View LinkedIn"
        },
        {
          href: "mailto:carmen.ma73@gmail.com",
          icon: "mail",
          text: "Let's Chat"
        },
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
      <nav
        role="navigation"
        aria-label="main navigation"
        class="navbar is-warning px-4"
      >
        <div class="navbar-brand">
          <RouterLink
            to="/"
            class="navbar-item has-text-primary is-size-5"
            v-text="'Carmen Ma'"
          />

          <a
            role="button"
            aria-label="menu"
            aria-expanded="false"
            :class="navClass('navbar-burger')"
            @click="toggleHamburger"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div :class="navClass('navbar-menu')">
          <div class="navbar-end">
            <a
              v-for="link in links"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="navbar-item has-text-primary"
              :aria-label="link.text"
            >
              <i :data-feather="link.icon" />
            </a>
          </div>
        </div>
      </nav>

      <RouterView />

      <footer id="contact" class="footer">
        <div class="has-text-centered">
          <a
            href="mailto:carmen.ma73@gmail.com"
            class="button is-danger has-text-white"
          >
            <span class="icon">
              <i data-feather="send" />
            </span>
            <span v-text="'Contact Me'" />
          </a>
        </div>
      </footer>
    </div>
  `,
}

const Card = {
  emits: [
    "image-click",
  ],
  props: {
    image: {
      type: String,
      required: true,
    },
    title: String,
    description: String,
    actions: Array,
    ratio: String,
  },
  computed: {
    imageClass() {
      const classes = ["image"]

      if (this.ratio) {
        classes.push(`is-${this.ratio}`)
      }

      return classes
    },
    showContent() {
      return this.title || this.description
    },
    showFooter() {
      return this.actions.length > 0
    },
  },
  template: `
    <div class="card is-shadowless has-background-danger">
      <div class="card-image">
        <figure :class="imageClass">
          <img
            class="object-cover"
            :src="image"
            :alt="title"
            @click="$emit('image-click')"
          />
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
              class="button is-outlined is-rounded is-info"
              target="_blank"
              rel="noopener noreferrer"
              v-text="action.name"
              :href="action.url"
              :disabled="!action.url || null"
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
  history: VueRouter.createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    } else {
      return { top: 0 }
    }
  },
})

const app = Vue.createApp(App)

window.Sentry?.init({
  app,
  dsn: "https://318a38bfcb42f98d9f7eeb1df6ce898a@o4510981864292352.ingest.us.sentry.io/4510981874319360",
  sendDefaultPii: true,
});

app.config.errorHandler = function (error, vm, info) {
  console.error(error, vm, info)
  window.Sentry?.captureException(error)
}

app.component("Card", Card)
app.use(router)
app.mount("#app")
