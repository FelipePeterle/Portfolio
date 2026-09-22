<template>
  <header class="header d-flex justify-content-between align-items-center pb-5">
    <div class="brand-wrapper" @click="getUrlHome()" role="button" tabindex="0">
      <h1 class="m-0">{{ title }}</h1>
    </div>
    <nav class="icon">
      <ul class="m-0 d-flex align-items-center list-unstyled gap-2 gap-sm-3">
        <li>
          <a href="https://github.com/FelipePeterle" target="_blank" rel="noopener" class="nav-icon-btn" title="GitHub" aria-label="GitHub">
            <AppIcon icon="mdi:github" width="20" />
          </a>
        </li>
        <li>
          <a href="https://br.linkedin.com/in/felipe-peterle" target="_blank" rel="noopener" class="nav-icon-btn" title="LinkedIn" aria-label="LinkedIn">
            <AppIcon icon="mdi:linkedin" width="20" />
          </a>
        </li>
        <li class="dropdown">
          <a
            class="nav-icon-btn dropdown-toggle text-decoration-none"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-offset="0,10"
            title="Language"
            aria-label="Language"
          >
            <AppIcon icon="mdi:earth" width="20" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end custom-dropdown shadow-lg">
            <li>
              <button
                class="dropdown-item d-flex align-items-center gap-2"
                :class="{ activeLang: currentLang === 'pt' }"
                @click="changeLanguage('pt')"
              >
                <span>🇧🇷</span>
                <span>Português</span>
                <span v-if="currentLang === 'pt'" class="ms-auto check">✓</span>
              </button>
            </li>
            <li>
              <button
                class="dropdown-item d-flex align-items-center gap-2"
                :class="{ activeLang: currentLang === 'en' }"
                @click="changeLanguage('en')"
              >
                <span>🇺🇸</span>
                <span>English</span>
                <span v-if="currentLang === 'en'" class="ms-auto check">✓</span>
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