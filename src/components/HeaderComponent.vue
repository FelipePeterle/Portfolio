<template>
  <header class="floating-header-container">
    <div class="floating-navbar d-flex justify-content-between align-items-center">
      <!-- Left: Brand / Monogram -->
      <div class="brand-wrapper d-flex align-items-center gap-2" @click="handleBrandClick" role="button" tabindex="0">
        <span class="brand-monogram">FP</span>
        <span class="brand-name d-none d-sm-inline">{{ title }}</span>
      </div>

      <!-- Center: Section Anchors -->
      <nav class="nav-links-wrapper d-none d-md-flex align-items-center gap-1">
        <a href="#about" @click.prevent="scrollTo('about')" class="nav-pill-link">
          {{ $t('nav.about') }}
        </a>
        <a href="#technologies" @click.prevent="scrollTo('technologies')" class="nav-pill-link">
          {{ $t('nav.technologies') }}
        </a>
        <a href="#experiences" @click.prevent="scrollTo('experiences')" class="nav-pill-link">
          {{ $t('nav.experiences') }}
        </a>
        <a href="#projects" @click.prevent="scrollTo('projects')" class="nav-pill-link">
          {{ $t('nav.projects') }}
        </a>
      </nav>

      <!-- Right: Socials & Language -->
      <div class="actions-wrapper d-flex align-items-center gap-2">
        <a href="https://github.com/FelipePeterle" target="_blank" rel="noopener" class="nav-icon-btn" title="GitHub" aria-label="GitHub">
          <AppIcon icon="mdi:github" width="18" />
        </a>
        <a href="https://br.linkedin.com/in/felipe-peterle" target="_blank" rel="noopener" class="nav-icon-btn" title="LinkedIn" aria-label="LinkedIn">
          <AppIcon icon="mdi:linkedin" width="18" />
        </a>
        <div class="dropdown">
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
            <AppIcon icon="mdi:earth" width="18" />
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
        </div>
      </div>
    </div>
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
    handleBrandClick() {
      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    scrollTo(id) {
      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' }).then(() => {
          setTimeout(() => {
            const el = document.getElementById(id)
            if (el) {
              const offset = 80
              const bodyRect = document.body.getBoundingClientRect().top
              const elementRect = el.getBoundingClientRect().top
              const elementPosition = elementRect - bodyRect
              const offsetPosition = elementPosition - offset
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
            }
          }, 150)
        })
        return
      }
      const el = document.getElementById(id)
      if (el) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = el.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
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