<template>
  <footer class="footer">
    <div class="container-footer w-100 d-flex flex-wrap justify-content-between align-items-center py-4 text-muted gap-3">
      <span class="fw-medium text-gradient">© {{ currentYear }} {{ name }}.</span>
      <div class="d-flex align-items-center gap-2">
        <a href="https://br.linkedin.com/in/felipe-peterle" target="_blank" rel="noopener" class="footer-icon-btn" title="LinkedIn" aria-label="LinkedIn">
          <AppIcon icon="mdi:linkedin" width="18" />
        </a>
        <a href="https://github.com/FelipePeterle" target="_blank" rel="noopener" class="footer-icon-btn" title="GitHub" aria-label="GitHub">
          <AppIcon icon="mdi:github" width="18" />
        </a>
        <div class="dropdown d-flex align-items-center">
          <a class="footer-icon-btn dropdown-toggle text-decoration-none" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false" title="Language" aria-label="Language">
            <AppIcon icon="mdi:earth" width="18" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end custom-dropdown shadow-lg">
            <li>
              <button class="dropdown-item d-flex align-items-center gap-2"
                :class="{ activeLang: currentLang === 'pt' }" @click="changeLanguage('pt')">
                <span>🇧🇷</span> <span>Português</span>
                <span v-if="currentLang === 'pt'" class="ms-auto check">✓</span>
              </button>
            </li>
            <li>
              <button class="dropdown-item d-flex align-items-center gap-2"
                :class="{ activeLang: currentLang === 'en' }" @click="changeLanguage('en')">
                <span>🇺🇸</span> <span>English</span>
                <span v-if="currentLang === 'en'" class="ms-auto check">✓</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      name: 'Felipe Peterle',
      currentLang: this.$i18n.locale
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods:{
    changeLanguage(lang) {
      this.$i18n.locale = lang
      this.currentLang = lang
      localStorage.setItem('lang', lang)
    }
  },
  mounted(){
    const savedLang = localStorage.getItem('lang')
    if (savedLang) {
      this.$i18n.locale = savedLang
      this.currentLang = savedLang
    }
  }
}
</script>