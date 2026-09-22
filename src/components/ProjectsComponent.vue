<template>
  <section id="projects" class="projects py-5 px-3">
    <div class="section-header text-center mb-5">
      <div class="section-kicker mb-2">Vitrine</div>
      <h2 class="section-title m-0">{{ $t('projects.sectionTitle') }}</h2>
    </div>
    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="(project, index) in projects" :key="project.name">
        <a :href="project.url" target="_blank" rel="noopener" class="project-card d-flex flex-column h-100 text-decoration-none">
          <div class="project-img-wrapper mb-3">
            <img :src="project.image" :alt="$t(`projects.list.${index}.name`)" class="img-fluid project-img" />
            <div class="project-overlay">
              <span class="view-project-btn">
                <AppIcon icon="mdi:arrow-top-right" width="18" />
              </span>
            </div>
          </div>
          
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span v-for="tag in project.tech" :key="tag" class="tech-badge">{{ tag }}</span>
          </div>
          
          <h5 class="project-title d-flex align-items-center justify-content-between mb-2">
            <span>{{ $t(`projects.list.${index}.name`) }}</span>
            <AppIcon icon="mdi:arrow-top-right" width="16" class="project-arrow-icon" />
          </h5>
          
          <p class="project-description mb-0">{{ $t(`projects.list.${index}.description`) }}</p>
        </a>
      </div>
    </div>
    
    <div class="text-center mt-5">
      <router-link class="btn btn-frosted px-4 py-2 d-inline-flex align-items-center gap-2" to="/projects">
        <span>{{ $t('projects.viewMore') }}</span>
        <AppIcon icon="mdi:arrow-right" width="16" />
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsComponent',
  data() {
  return {
    projects: [
      {
        image: require('@/assets/img/Projects/makeYourBurger.gif'),
        tech: ['Vue.js', 'JavaScript', 'Sass', 'JSON Server'],
        url: 'https://github.com/FelipePeterle/MakeYourBurger'
      },
      {
        image: require('@/assets/img/Projects/Vidflow.png'),
        tech: ['JavaScript', 'REST APIs', 'Async/Await'],
        url: 'https://github.com/FelipePeterle/VidFlow---Alura'
      },
      {
        image: require('@/assets/img/Projects/Fokus.png'),
        tech: ['JavaScript', 'DOM API', 'LocalStorage'],
        url: 'https://github.com/FelipePeterle/Projeto-fokus-atualizado'
      }
    ]
  }
}

}
</script>