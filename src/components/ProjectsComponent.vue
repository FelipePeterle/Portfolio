<template>
  <section class="projects text-light py-5 px-3">
    <h2 class="text-center mb-5">{{ $t('projects.sectionTitle') }}</h2>
    <div class="row g-5">
      <div class="col-12 col-md-6 col-lg-4" v-for="(project, index) in projects" :key="project.name">
        <a :href="project.url" target="_blank" rel="noopener" class="project-card d-block text-decoration-none h-100">
          <img :src="project.image" :alt="$t(`projects.list.${index}.name`)" class="img-fluid rounded shadow-sm mb-3" />
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span v-for="tag in project.tech" :key="tag" class="tech-badge">{{ tag }}</span>
          </div>
          <h5 class="project-title">{{ $t(`projects.list.${index}.name`) }}</h5>
          <p class="text-light-emphasis">{{ $t(`projects.list.${index}.description`) }}</p>
        </a>
      </div>
    </div>
    <div class="text-center mt-5">
      <router-link class="btn btn-orange-outline px-4 py-2" to="/projects">
        {{ $t('projects.viewMore') }}
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
        tech: ['HTML', 'Css', 'Javascript', 'Vue', 'Sass'],
        url: 'https://github.com/FelipePeterle/MakeYourBurger'
      },
      {
        image: require('@/assets/img/Projects/Vidflow.png'),
        tech: ['HTML', 'Css', 'Javascript'],
        url: 'https://github.com/FelipePeterle/VidFlow---Alura'
      },
      {
        image: require('@/assets/img/Projects/Fokus.png'),
        tech: ['HTML', 'Css', 'Javascript'],
        url: 'https://github.com/FelipePeterle/Projeto-fokus-atualizado'
      }
    ]
  }
}

}
</script>