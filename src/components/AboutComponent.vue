<template>
  <section id="about" class="about-hero py-4 py-lg-5">
    <div class="container-fluid p-0">
      <div class="row align-items-center g-4 g-lg-5">
        <!-- Left Column: Bio & Impact Statement -->
        <div class="col-12 col-lg-7 text-start animate-slide-right delay-0">
          <h1 class="hero-headline mb-3">
            {{ $t('about.title') }}
          </h1>

          <p class="hero-bio mb-4">
            {{ $t('about.description') }}
          </p>

          <div class="hero-actions d-flex flex-wrap align-items-center gap-3 mb-4">
            <a
              href="https://wa.me/5527998806513?text=Olá%2C%20gostaria%20de%20falar%20sobre%20seu%20portfolio"
              target="_blank"
              rel="noopener"
              class="btn btn-primary-metallic"
            >
              <AppIcon icon="mdi:whatsapp" width="18" />
              <span>{{ $t('about.contact') }}</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1gx6rV46OdhjJeSVz6cOaIXwvAgfZdtOa/view?usp=sharing"
              target="_blank"
              rel="noopener"
              class="btn btn-frosted"
            >
              <AppIcon icon="mdi:file-document-outline" width="18" />
              <span>{{ $t('about.download') }}</span>
            </a>
          </div>

          <div class="hero-focus-container d-flex flex-wrap align-items-center gap-2">
            <div class="focus-label d-inline-flex align-items-center gap-2 me-1">
              <span class="focus-dot"></span>
              <span class="focus-title">{{ $t('about.hud.status') }}:</span>
            </div>
            <div class="focus-chips d-inline-flex flex-wrap align-items-center gap-2">
              <span class="quick-tag">Go (Golang)</span>
              <span class="quick-tag">PHP / Laravel</span>
              <span class="quick-tag">TypeScript</span>
              <span class="quick-tag">Vue.js</span>
              <span class="quick-tag">Docker</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Dev HUD Glass Showcase -->
        <div class="col-12 col-lg-5 animate-slide-left delay-1">
          <div class="dev-hud-card">
            <div class="hud-header d-flex align-items-center justify-content-between">
              <div class="window-controls d-flex align-items-center gap-1">
                <span class="dot close"></span>
                <span class="dot minimize"></span>
                <span class="dot expand"></span>
              </div>
              <div class="hud-tab">
                <AppIcon icon="mdi:code-json" width="14" class="text-secondary" />
                <span>{{ $t('about.hud.file') }}</span>
              </div>
              <div class="hud-action-spacer"></div>
            </div>

            <div class="hud-body p-4 d-flex flex-column align-items-center text-center">
              <div class="avatar-hud-wrapper mb-3">
                <div class="avatar-hud-glow"></div>
                <img
                  src="@/assets/img/Profile/Profile.jpeg"
                  alt="Felipe Peterle"
                  class="profile-img"
                />
              </div>

              <h2 class="hud-name mb-1">Felipe Peterle</h2>
              <div class="hud-status-badge mb-3">
                <span class="hud-status-dot"></span>
                <span>{{ $t('about.hud.status') }}</span>
              </div>

              <div class="hud-specs w-100 d-flex flex-column gap-2 text-start">
                <div class="spec-row d-flex align-items-center gap-2">
                  <div class="spec-icon">
                    <AppIcon icon="mdi:school-outline" width="16" />
                  </div>
                  <span class="spec-text">{{ $t('about.hud.education') }}</span>
                </div>
                <div class="spec-row d-flex align-items-center gap-2">
                  <div class="spec-icon">
                    <AppIcon icon="mdi:lightning-bolt" width="16" />
                  </div>
                  <span class="spec-text">{{ $t('about.hud.focus') }}</span>
                </div>
                <div class="spec-row d-flex align-items-center gap-2">
                  <div class="spec-icon">
                    <AppIcon icon="mdi:shield-check-outline" width="16" />
                  </div>
                  <span class="spec-text">{{ $t('about.hud.architecture') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>
