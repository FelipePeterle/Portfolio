<template>
  <section class="projects text-light py-5 px-3 border-section">
    <h2 class="text-center mb-5">Projetos em destaque</h2>

    <div class="row g-5">
      <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.name">
        <img :src="project.image" :alt="project.name" class="img-fluid rounded shadow-sm mb-3" />

        <div class="d-flex flex-wrap gap-2 mb-3">
          <span v-for="tag in project.tech" :key="tag" class="tech-badge">{{ tag }}</span>
        </div>

        <h5 class="project-title">{{ project.name }}</h5>
        <p class="text-light-emphasis">{{ project.description }}</p>
      </div>
    </div>

    <div class="text-center mt-5">
      <a href="#mais-projetos" class="btn btn-orange-outline px-4 py-2">Outros projetos</a>
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
          name: 'GoShort',
          image: require('@/assets/img/perfil.jpeg'),
          tech: ['Go', 'Next.Js', 'TypeScript', 'MySQL', 'Nginx', 'Docker'],
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
          name: 'PicPayChallenge',
          image: require('@/assets/img/perfil.jpeg'),
          tech: ['C#', '.Net', 'React', 'Next.js', 'MySQL', 'Kafka'],
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
          name: 'Quasar E-Commerce',
          image: require('@/assets/img/perfil.jpeg'),
          tech: ['C#', '.Net', 'Angular', 'MySQL'],
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
      ]
    }
  }
}
</script>