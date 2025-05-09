<template>
  <div class="home">
    <AboutComponent/>
    <TechnologieComponent/>
    <ExperiencesComponent/>
  </div>
</template>
<script>
import AboutComponent from '@/components/AboutComponent.vue'
import TechnologieComponent from '@/components/TechnologiesComponent.vue'
import ExperiencesComponent from '@/components/ExperiencesComponent.vue'
export default {
  name: 'HomeView',
  components: {
    AboutComponent,
    TechnologieComponent,
    ExperiencesComponent
  }
}
</script>