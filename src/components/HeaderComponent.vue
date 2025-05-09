<template>
  <header class="header d-flex justify-content-between align-items-center pb-5">
    <h1 class="m-0" @click="getUrlHome()">{{ title }}</h1>
    <nav class="icon">
      <ul class="m-0 d-flex align-items-center list-unstyled gap-3">
        <li>
          <a href="https://github.com/FelipePeterle" target="_blank" rel="noopener">
            <AppIcon icon="mdi:github" width="28" class="icon-white"/>
          </a>
        </li>
        <a href="https://br.linkedin.com/in/felipe-peterle" target="_blank" rel="noopener">
          <li>
            <AppIcon icon="mdi:linkedin" width="28" class="icon-white"/>
          </li>
        </a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      title: 'Felipe Peterle'
    }
  },
  methods:{
    getUrlHome(){
      this.$router.push({name: 'home'})
    }
  }
}
</script>