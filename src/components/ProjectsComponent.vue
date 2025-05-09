<template>
  <section class="projects text-light py-5 px-3">
    <h2 class="text-center mb-5">Projetos em destaque</h2>
    <div class="row g-5">
      <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.name">
        <a :href="project.url" target="_blank" rel="noopener" class="project-card d-block text-decoration-none h-100">
          <img :src="project.image" :alt="project.name" class="img-fluid rounded shadow-sm mb-3" />
          <div class="d-flex flex-wrap gap-2 mb-3">
            <span v-for="tag in project.tech" :key="tag" class="tech-badge">
              {{ tag }}
            </span>
          </div>
          <h5 class="project-title">{{ project.name }}</h5>
          <p class="text-light-emphasis">{{ project.description }}</p>
        </a>
      </div>
    </div>
    <div class="text-center mt-5">
      <router-link class="btn btn-orange-outline px-4 py-2" to="/projects">Outros projetos</router-link>
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
          name: 'MakeYourburger',
          image: require('@/assets/img/Projects/makeYourBurger.gif'),
          tech: ['HTML', 'Css', 'Javascript', 'Vue', 'Sass'],
          description: 'Projeto feito para servir como gerenciamento de uma loja virtual de uma hamburgueria, podendo ser feito desde o cadastro,remoção e atualização de um pedido. Utilizado também o JSON Server para mockar o backend.',
          url:'https://github.com/FelipePeterle/MakeYourBurger'
        },
        {
          name: 'VidFlow',
          image: require('@/assets/img/Projects/Vidflow.png'),
          tech: ['HTML', 'Css', 'Javascript'],
          description: 'Esse projeto foi feito apartir do curso de JavaScript: consumindo e tratando dados de uma API da Alura, aonde pude aprimorar conhecimento de consumir api pelo frontend, criação de filtros dinâmicos, criação de função assíncronas e seus respectivos tratamentos, também foi utilizado JSON Server para mockar o backend.',
          url:'https://github.com/FelipePeterle/VidFlow---Alura'
        },
        {
          name: 'Fokus',
          image: require('@/assets/img/Projects/Fokus.png'),
          tech: ['HTML','Css','Javascript'],
          description: 'Projeto feito durante meu período de estudo, foi feito apartir das aulas de manipulação do Dom e do LocalStorage nas videoaulas da Alura, aonde pude me aprofundar mais no meu conhecimento de javascript.',
          url:'https://github.com/FelipePeterle/Projeto-fokus-atualizado'
        }
      ]
    }
  }
}
</script>