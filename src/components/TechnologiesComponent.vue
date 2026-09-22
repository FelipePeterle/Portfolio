<template>
  <section class="technologies py-5 px-3">
    <h2 class="text-center mb-5">{{ $t('technologies.title') }}</h2>

    <div class="row g-4">
      <div v-for="cat in categories" :key="cat.key" class="col-12 col-md-6">
        <div class="tech-category-card h-100">
          <div class="category-header d-flex align-items-center gap-2 mb-3">
            <div class="category-icon-wrapper">
              <AppIcon :icon="cat.icon" width="18" />
            </div>
            <h4 class="category-title m-0">{{ $t(`technologies.categories.${cat.key}`) }}</h4>
          </div>

          <div class="tech-pills-container d-flex flex-wrap gap-2">
            <a
              v-for="tech in cat.items"
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
      categories: [
        {
          key: 'backend',
          icon: 'mdi:server',
          items: [
            { name: 'Go (Golang)', icon: 'logos:go', url: 'https://go.dev/' },
            { name: 'PHP', icon: 'logos:php', url: 'https://www.php.net/' },
            { name: 'Laravel', icon: 'logos:laravel', url: 'https://laravel.com/' },
            { name: 'Docker', icon: 'logos:docker-icon', url: 'https://www.docker.com/' },
            { name: 'APIs RESTful', icon: 'carbon:api', url: 'https://restfulapi.net/' }
          ]
        },
        {
          key: 'frontend',
          icon: 'mdi:code-braces',
          items: [
            { name: 'Vue.js', icon: 'logos:vue', url: 'https://vuejs.org/' },
            { name: 'TypeScript', icon: 'logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
            { name: 'JavaScript', icon: 'logos:javascript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', url: 'https://tailwindcss.com/' },
            { name: 'Bootstrap', icon: 'logos:bootstrap', url: 'https://getbootstrap.com/' }
          ]
        },
        {
          key: 'database',
          icon: 'mdi:database-outline',
          items: [
            { name: 'MySQL', icon: 'logos:mysql', url: 'https://www.mysql.com/' },
            { name: 'SQL Server', icon: 'devicon:microsoftsqlserver', url: 'https://www.microsoft.com/sql-server' }
          ]
        },
        {
          key: 'tools',
          icon: 'mdi:tools',
          items: [
            { name: 'Git', icon: 'logos:git-icon', url: 'https://git-scm.com/' },
            { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/' },
            { name: 'Postman', icon: 'logos:postman-icon', url: 'https://www.postman.com/' },
            { name: 'Scrum / Agile', icon: 'mdi:view-dashboard-outline', url: 'https://www.scrum.org/' }
          ]
        }
      ]
    }
  }
}
</script>