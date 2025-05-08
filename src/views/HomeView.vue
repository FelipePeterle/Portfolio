<template>
  <div class="home">
    <AboutComponent/>
  </div>
</template>
<script>
import AboutComponent from '@/components/AboutComponent.vue'
export default {
  name: 'HomeView',
  components: {
    AboutComponent
  }
}
</script>