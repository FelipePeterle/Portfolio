<template>
  <header class="header d-flex justify-content-between align-items-center pb-5">
    <h1 class="m-0" @click="getUrlHome()">{{ title }}</h1>
    <nav class="icon">
      <ul class="m-0 d-flex align-items-center list-unstyled gap-3">
        <li>
          <a href="https://github.com/FelipePeterle" target="_blank" rel="noopener">
            <AppIcon icon="mdi:github" width="28" class="icon-white" />
          </a>
        </li>
        <li>
          <a href="https://br.linkedin.com/in/felipe-peterle" target="_blank" rel="noopener">
            <AppIcon icon="mdi:linkedin" width="28" class="icon-white" />
          </a>
        </li>
        <li class="dropdown">
          <a
            class="dropdown-toggle text-decoration-none icon-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-offset="0,8"
          >
            <AppIcon icon="mdi:earth" width="28" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end custom-dropdown">
            <li>
              <button
                class="dropdown-item d-flex align-items-center gap-2"
                :class="{ activeLang: currentLang === 'pt' }"
                @click="changeLanguage('pt')"
              >
                🇧🇷 <span>Português</span>
                <span v-if="currentLang === 'pt'" class="ms-auto check">✔</span>
              </button>
            </li>
            <li>
              <button
                class="dropdown-item d-flex align-items-center gap-2"
                :class="{ activeLang: currentLang === 'en' }"
                @click="changeLanguage('en')"
              >
                🇺🇸 <span>English</span>
                <span v-if="currentLang === 'en'" class="ms-auto check">✔</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>

export default {
  name: 'HeaderComponent',
  data() {
    return {
      title: 'Felipe Peterle',
      currentLang: this.$i18n.locale
    }
  },
  methods: {
    getUrlHome() {
      this.$router.push({ name: 'home' })
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.currentLang = lang
      localStorage.setItem('lang', lang)
    }
  },
  mounted() {
    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      this.$i18n.locale = savedLang
      this.currentLang = savedLang
    }
  }
}
</script>