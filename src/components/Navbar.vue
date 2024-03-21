<script lang="ts">
import router from '@/router'

export default {
  methods: {
    navigateToAbout() {
      router.push('/')
    },
    navigateToProjects() {
      router.push('/projects')
    }
  }
}
</script>

<template>
  <v-app-bar>
    <v-tabs style="margin: 0 auto">
      <v-tab @click="navigateToAbout">About</v-tab>
      <v-tab @click="navigateToProjects">Projects</v-tab>
    </v-tabs>
  </v-app-bar>

  <div style="padding-top: 10%"><RouterView></RouterView></div>
</template>

<style></style>
