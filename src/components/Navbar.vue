<script lang="ts">
import About from './About.vue'
import Projects from './Projects.vue'
import { useTheme } from 'vuetify'

export default {
  components: { About, Projects },

  mounted() {
    this.getPreferredColorScheme()
  },

  data() {
    return {
      tab: 'one'
    }
  },

  setup() {
    const theme = useTheme()

    function getPreferredColorScheme() {
      theme.global.name.value =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
    }

    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }

    return {
      getPreferredColorScheme,
      toggleTheme
    }
  }
}
</script>

<template>
  <v-app-bar style="margin: 0 auto">
    <v-tabs v-model="tab" align-tabs="center" style="margin: 0 auto">
      <v-tab value="one">About</v-tab>
      <v-tab value="two">Projects</v-tab>
    </v-tabs>
    <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
  </v-app-bar>

  <div class="page-content" style="padding-top: 10%">
    <v-window v-model="tab">
      <v-window-item class="tabs" value="one"><About></About></v-window-item>
      <v-window-item value="two"><Projects></Projects></v-window-item>
    </v-window>
  </div>
</template>

<style></style>
