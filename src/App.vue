<template>
  <nav>
    <HeaderComponent/>
  </nav>
  <router-view/>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default{
  name:'App',
  components:{
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
</style>
