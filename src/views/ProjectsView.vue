<template>
  <section class="projects py-5 px-3">
    <div class="d-flex align-items-center justify-content-between mb-5">
      <router-link class="btn btn-frosted px-3 py-2 d-inline-flex align-items-center gap-2" to="/">
        <AppIcon icon="mdi:arrow-left" width="16" />
        <span>{{ $t('projectsView.back') }}</span>
      </router-link>
      <h2 class="m-0 text-center flex-grow-1 pe-md-5">{{ $t('projectsView.sectionTitle') }}</h2>
    </div>

    <div class="row g-4">
      <div class="col-12 col-md-6 col-lg-4" v-for="(project, index) in projects" :key="project.url">
        <a :href="project.url" target="_blank" rel="noopener" class="project-card d-flex flex-column h-100 text-decoration-none">
          <div class="project-img-wrapper mb-3">
            <img :src="project.image" :alt="$t(`projectsView.list.${index}.name`)" class="img-fluid project-img" />
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
            <span>{{ $t(`projectsView.list.${index}.name`) }}</span>
            <AppIcon icon="mdi:arrow-top-right" width="16" class="project-arrow-icon" />
          </h5>
          
          <p class="project-description mb-0">{{ $t(`projectsView.list.${index}.description`) }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsView',
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
        },
        {
          image: require('@/assets/img/Projects/Meteora.png'),
          tech: ['HTML', 'Css', 'Javascript', 'Bootstrap'],
          url: 'https://github.com/FelipePeterle/Meteora'
        },
        {
          image: require('@/assets/img/Projects/NewsLetter.png'),
          tech: ['HTML', 'Css', 'Javascript', 'Tailwind Css'],
          url: 'https://github.com/FelipePeterle/Newsletter---Alura'
        },
        {
          image: require('@/assets/img/Projects/AluraBooks.png'),
          tech: ['HTML', 'Css', 'Javascript'],
          url: 'https://github.com/FelipePeterle/MetodosDeArray'
        }
      ]
    }
  }
}
</script>