<template>
  <div class="home">
    <AboutComponent/>
    <TechnologieComponent/>
  </div>
</template>
<script>
import AboutComponent from '@/components/AboutComponent.vue'
import TechnologieComponent from '@/components/TechnologiesComponent.vue'
export default {
  name: 'HomeView',
  components: {
    AboutComponent,
    TechnologieComponent
  }
}
</script>