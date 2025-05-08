<template>
  <nav>
    <HeaderComponent/>
  </nav>
  <router-view/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
export default{
  name:'App',
  components:{
    HeaderComponent
  }
}
</script>

<style lang="scss">
@import "@/assets/css/main.scss";
</style>
