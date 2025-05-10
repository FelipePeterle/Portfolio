<template>
  <footer class="footer">
    <div class="container-footer w-100 d-flex justify-content-between align-items-center px-4 py-3 text-muted">
      <span class="fw-medium text-gradient">© 2024 {{ name }}.</span>
      <div class="d-flex align-items-center gap-3">
        <a href="https://br.linkedin.com/in/felipe-peterle" target="_blank" rel="noopener" class="footer-icon">
          <AppIcon icon="mdi:linkedin" width="20" />
        </a>
        <a href="https://github.com/FelipePeterle" target="_blank" rel="noopener" class="footer-icon">
          <AppIcon icon="mdi:github" width="20" />
        </a>
        <li class="dropdown d-flex align-items-center">
          <a class="dropdown-toggle text-decoration-none icon-white d-flex align-items-center gap-" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <AppIcon icon="mdi:earth" width="20"  class="footer-icon" />
          </a>
          <ul class="dropdown-menu dropdown-menu-end custom-dropdown">
            <li>
              <button class="dropdown-item d-flex align-items-center gap-2"
                :class="{ activeLang: currentLang === 'pt' }" @click="changeLanguage('pt')">
                🇧🇷 <span>Português</span>
                <span v-if="currentLang === 'pt'" class="ms-auto check">✔</span>
              </button>
            </li>
            <li>
              <button class="dropdown-item d-flex align-items-center gap-2"
                :class="{ activeLang: currentLang === 'en' }" @click="changeLanguage('en')">
                🇺🇸 <span>English</span>
                <span v-if="currentLang === 'en'" class="ms-auto check">✔</span>
              </button>
            </li>
          </ul>
        </li>
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
