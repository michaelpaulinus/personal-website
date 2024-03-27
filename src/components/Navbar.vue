<script lang="ts">
import About from './About.vue'
import Projects from './Projects.vue'

export default {
  components: { About, Projects },
  data() {
    return {
      tab: 'one'
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
  </v-app-bar>

  <div class="page-content" style="padding-top: 10%">
    <v-window v-model="tab">
      <v-window-item class="tabs" value="one"><About></About></v-window-item>
      <v-window-item value="two"><Projects></Projects></v-window-item>
    </v-window>
  </div>
</template>

<style></style>
