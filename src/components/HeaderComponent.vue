<!-- src/components/HeaderComponent.vue -->
<template>
    <header class="header">
      <h1>{{ titulo }}</h1>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        titulo: 'Felipe Peterle'
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #222;
    color: #fff;
    padding: 1rem;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }
  nav a {
    color: white;
    text-decoration: none;
  }
  </style>
  