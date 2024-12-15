<script setup>

</script>

<template>
  <header>
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src="./core/assets/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./core/assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
  </header>
  <main></main>
  <footer><div>
        <a href="https://vite.dev" target="_blank">
          <img src="./core/assets/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./core/assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
  </footer>

</template>

<style lang="scss">
#app {
  height: 100%;
	display: flex;
	flex-direction: column;

  main {
    flex: 1;
    overflow: auto;
  }

  header, footer {
    background-color: #1a47b8;
  }
}

.logo {
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
