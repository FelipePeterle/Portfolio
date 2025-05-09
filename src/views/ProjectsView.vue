<template>
  <section class="projects text-light py-5 px-3">
    <h2 class="text-center mb-5">{{ $t('projectsView.sectionTitle') }}</h2>
    <div class="row g-5">
      <div class="col-12 col-md-6 col-lg-4" v-for="(project, index) in projects" :key="project.url">
        <a :href="project.url" target="_blank" rel="noopener" class="project-card d-block text-decoration-none h-100">
          <img :src="project.image" :alt="$t(`projectsView.list.${index}.name`)" class="img-fluid rounded shadow-sm mb-3" />
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span v-for="tag in project.tech" :key="tag" class="tech-badge">{{ tag }}</span>
          </div>
          <h5 class="project-title">{{ $t(`projectsView.list.${index}.name`) }}</h5>
          <p class="text-light-emphasis">{{ $t(`projectsView.list.${index}.description`) }}</p>
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