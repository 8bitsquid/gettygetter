<script setup>
/**
 * App.vue acts as the main and only view used in this application. 
 * Given the project timeline and scope, I marked routing a "nice-to-have"
 * 
 * For production applications, it's best implement routing early. But since I
 * had a mountain of new tools to grok for this challenge, I decided not to utilize 
 * the Vue router - https://router.vuejs.org/
 */
import { ref } from 'vue'
import ResultsList from './core/components/BaseResultsList.vue'
import SearchInput from './search/components/SearchInput.vue'
import search from './search/services/search.js'

/**
 * Since there's no router and one view, we're using the App.vue as the search view.
 * So lets define some methods and reactive properties to share data and events between
 * components and services.
 */

 // holds the results from the backend to be passed to the results list component
const resultsList = ref([])

// here we perform basic error handling around the backend call, and update the `resultsList` ref
async function runSearch(searchTerms) {
  try {
    const resp = await search(searchTerms)
    const json = await resp.json()

    if (!resp.ok) {
      throw new Error(json)
    }

    resultsList.value = json
  } catch(e) {
    console.error(e)
  }
}
</script>

<template>
  <header>
     <el-menu
        class="header-nav"
        mode="horizontal"
        :ellipsis="false"
      >
        <el-menu-item index="0" class="header-title">
          Getty Getter
        </el-menu-item>
        <el-menu-item index="1">
          <img src="./core/assets/github-mark.svg" target="_blank" class="logo github" alt="Github logo" />
        </el-menu-item>
      </el-menu>
    
  </header>

  <main>
    <el-row class="page-row" justify="center">
      <el-col :span="12">
        <p class="lead">
          The "Getty Getter" is a bare-bones app that performs limited "full text" queries AAT (Art & Architecture Thesaurus) data from the
          <a href="https://vocab.getty.edu/" target="_blank">Getty Vocabularies: LOD</a> SPARQL endpoint.
        </p>
        <p class="lead">
          For details on how and why the app was build, see the source on <a href="https://github.com/8bitsquid/gettygetter" target="_blank">Github</a>.
        </p>
      </el-col>
    </el-row>
    <el-row class="page-row" justify="center">
      <el-col :span="10">
        <SearchInput @run-search="runSearch"/>
      </el-col>
    </el-row>
    <el-row class="page-row" justify="center">
      <el-col :span="20">
        <ResultsList :list="resultsList"></ResultsList>
      </el-col>
    </el-row>
  </main>

  <footer>
    <el-row justify="center">
      <el-col class="built-with" :span="2">
        Built with
      </el-col>
      <el-col :span="1">
        <a href="https://vite.dev" target="_blank">
          <img src="./core/assets/vite.svg" class="logo" alt="Vite logo" />
        </a>
      </el-col>
      <el-col :span="1">
        <i-ep-plus class="built-with plus"></i-ep-plus>
      </el-col>
      <el-col :span="1">
        <a href="https://vuejs.org/" target="_blank">
          <img src="./core/assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </el-col>
      <el-col :span="1">
        <i-ep-plus class="built-with plus"></i-ep-plus>
      </el-col>
      <el-col :span="1">
        <a href="https://vocab.getty.edu/" target="_blank">
          <img src="./core/assets/getty_logo.gif" class="logo getty" alt="Getty logo" />
        </a>
      </el-col>
    </el-row>
  </footer>

</template>

<style lang="scss">
@use 'sass:color';

$brand-color: #1a47b8;

html, body {
	margin: 0;
	height: 100%;
}

#app {
  height: 100%;
	display: flex;
	flex-direction: column;

  main {
    flex: 1;
    overflow: auto;
  }

  header, footer {
    background-color: $brand-color;

    a {
      color: white;
      text-decoration: none;
    }
  }

  header {
    .header-nav {
      background-color: inherit;

        & > .el-menu-item:nth-child(1) {
          margin-right: auto;
        }
       li, li.is-active {
        // best to avoid !important in production
         color: var(--el-color-white) !important;
        
         &:hover, &:active, &:focus, &:target {
          background-color: color.adjust($brand-color, $lightness: 10%);
         }
       }
    }
    .header-title {
      font-size: 3rem;
    }
  }

  .page-row {
    padding: 20px;
    padding-bottom: 40px;
  }

  p.lead{
    font-size: 1.4rem;
  }
}

.built-with {
    font-size: 1.5rem;
    color: #eee;
    padding: 1.5rem 1rem;

    &.plus {
      padding: 1.5rem;
    }
}

.logo {
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
  &.github {
    height: 80%;
    -webkit-filter: invert(100%); /* safari 6.0 - 9.0 */
    filter: invert(100%);
  }
  &.getty {
    height: 32px;
  }
}
</style>
