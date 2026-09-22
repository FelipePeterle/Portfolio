<template>
  <section id="technologies" class="technologies py-5">
    <div class="section-header text-center mb-5">
      <div class="section-kicker mb-2">Tech Stack</div>
      <h2 class="section-title m-0">{{ $t('technologies.title') }}</h2>
    </div>

    <!-- Symmetrical Standardized Grid -->
    <div class="tech-grid">
      <!-- Card 1: Back-End & Infra -->
      <div class="tech-card">
        <div class="tech-card-inner">
          <div class="tech-card-header d-flex align-items-center justify-content-between mb-3">
            <div class="d-flex align-items-center gap-2">
              <div class="category-icon-wrapper">
                <AppIcon icon="mdi:server" width="20" />
              </div>
              <h3 class="category-title m-0">{{ $t('technologies.categories.backend') }}</h3>
            </div>
            <span class="tech-badge">Back-End</span>
          </div>

          <p class="tech-card-desc mb-4">
            Desenvolvimento de back-ends robustos, microsserviços e APIs com alta performance e escalabilidade.
          </p>

          <div class="tech-pills-container d-flex flex-wrap gap-2 mt-auto">
            <a
              v-for="tech in backendItems"
              :key="tech.name"
              :href="tech.url"
              target="_blank"
              rel="noopener"
              class="tech-pill"
              :title="tech.name"
            >
              <div class="tech-pill-icon">
                <AppIcon :icon="tech.icon" width="20" />
              </div>
              <span class="tech-pill-name">{{ tech.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 2: Front-End Moderno -->
      <div class="tech-card">
        <div class="tech-card-inner">
          <div class="tech-card-header d-flex align-items-center justify-content-between mb-3">
            <div class="d-flex align-items-center gap-2">
              <div class="category-icon-wrapper">
                <AppIcon icon="mdi:code-braces" width="20" />
              </div>
              <h3 class="category-title m-0">{{ $t('technologies.categories.frontend') }}</h3>
            </div>
            <span class="tech-badge">Front-End</span>
          </div>

          <p class="tech-card-desc mb-4">
            Interfaces responsivas e fluidas com tipagem estática, componentização reativa e alta usabilidade.
          </p>

          <div class="tech-pills-container d-flex flex-wrap gap-2 mt-auto">
            <a
              v-for="tech in frontendItems"
              :key="tech.name"
              :href="tech.url"
              target="_blank"
              rel="noopener"
              class="tech-pill"
              :title="tech.name"
            >
              <div class="tech-pill-icon">
                <AppIcon :icon="tech.icon" width="20" />
              </div>
              <span class="tech-pill-name">{{ tech.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 3: Bancos de Dados & Modelagem -->
      <div class="tech-card">
        <div class="tech-card-inner">
          <div class="tech-card-header d-flex align-items-center justify-content-between mb-3">
            <div class="d-flex align-items-center gap-2">
              <div class="category-icon-wrapper">
                <AppIcon icon="mdi:database-outline" width="20" />
              </div>
              <h3 class="category-title m-0">{{ $t('technologies.categories.database') }}</h3>
            </div>
            <span class="tech-badge">Database</span>
          </div>

          <p class="tech-card-desc mb-4">
            Modelagem relacional, consultas SQL otimizadas e integridade de dados corporativos.
          </p>

          <div class="tech-pills-container d-flex flex-wrap gap-2 mt-auto">
            <a
              v-for="tech in databaseItems"
              :key="tech.name"
              :href="tech.url"
              target="_blank"
              rel="noopener"
              class="tech-pill"
              :title="tech.name"
            >
              <div class="tech-pill-icon">
                <AppIcon :icon="tech.icon" width="20" />
              </div>
              <span class="tech-pill-name">{{ tech.name }}</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 4: Arquitetura & Boas Práticas -->
      <div class="tech-card">
        <div class="tech-card-inner">
          <div class="tech-card-header d-flex align-items-center justify-content-between mb-3">
            <div class="d-flex align-items-center gap-2">
              <div class="category-icon-wrapper">
                <AppIcon icon="mdi:shield-check-outline" width="20" />
              </div>
              <h3 class="category-title m-0">{{ $t('technologies.categories.architecture') }}</h3>
            </div>
            <span class="tech-badge">Quality</span>
          </div>

          <p class="tech-card-desc mb-4">
            Código limpo, arquitetura desacoplada, testes automatizados e entrega ágil contínua.
          </p>

          <div class="tech-pills-container d-flex flex-wrap gap-2 mt-auto">
            <a
              v-for="tech in architectureItems"
              :key="tech.name"
              :href="tech.url"
              target="_blank"
              rel="noopener"
              class="tech-pill"
              :title="tech.name"
            >
              <div class="tech-pill-icon">
                <AppIcon :icon="tech.icon" width="20" />
              </div>
              <span class="tech-pill-name">{{ tech.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnologiesComponent',
  data() {
    return {
      backendItems: [
        { name: 'Go (Golang)', icon: 'logos:go', url: 'https://go.dev/' },
        { name: 'PHP', icon: 'logos:php', url: 'https://www.php.net/' },
        { name: 'Laravel', icon: 'logos:laravel', url: 'https://laravel.com/' },
        { name: 'Docker', icon: 'logos:docker-icon', url: 'https://www.docker.com/' },
        { name: 'APIs RESTful', icon: 'carbon:api', url: 'https://restfulapi.net/' }
      ],
      databaseItems: [
        { name: 'MySQL', icon: 'logos:mysql', url: 'https://www.mysql.com/' },
        { name: 'SQL Server', icon: 'devicon:microsoftsqlserver', url: 'https://www.microsoft.com/sql-server' }
      ],
      architectureItems: [
        { name: 'Clean Architecture', icon: 'carbon:layers', url: 'https://blog.cleancoder.com/' },
        { name: 'Git', icon: 'logos:git-icon', url: 'https://git-scm.com/' },
        { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/' },
        { name: 'Postman', icon: 'logos:postman-icon', url: 'https://www.postman.com/' },
        { name: 'Scrum / Agile', icon: 'mdi:view-dashboard-outline', url: 'https://www.scrum.org/' }
      ],
      frontendItems: [
        { name: 'Vue.js', icon: 'logos:vue', url: 'https://vuejs.org/' },
        { name: 'TypeScript', icon: 'logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
        { name: 'JavaScript', icon: 'logos:javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', url: 'https://tailwindcss.com/' },
        { name: 'Bootstrap', icon: 'logos:bootstrap', url: 'https://getbootstrap.com/' }
      ]
    }
  }
}
</script>