<template>
  <div class="home">
    <AboutComponent/>
    <TechnologieComponent/>
    <ExperiencesComponent/>
    <ProjectsComponent/>
    <FooterComponent/>
  </div>
</template>
<script>
import AboutComponent from '@/components/AboutComponent.vue'
import TechnologieComponent from '@/components/TechnologiesComponent.vue'
import ExperiencesComponent from '@/components/ExperiencesComponent.vue'
import ProjectsComponent from '@/components/ProjectsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'HomeView',
  components: {
    AboutComponent,
    TechnologieComponent,
    ExperiencesComponent,
    ProjectsComponent,
    FooterComponent
  }
}
</script>