<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import circuitDetImg from '@/assets/images/circuit-detector.jpg'
import circuitGenImg from '@/assets/images/circuit-generator.jpg'
import projectImg from '@/assets/images/project.jpg'
import votecoinImg from '@/assets/images/votecoin.png'
import androidImg from '@/assets/images/android-app.png'
import type ProjectItem from '@/interfaces/ProjectItem'

export default {
  data() {
    return {
      circuitDetImg: circuitDetImg,
      circuitGenImg: circuitGenImg,
      projectImg: projectImg,
      votecoinImg: votecoinImg,
      androidImg: androidImg,
      projects: [] as ProjectItem[]
    }
  },

  created() {
    this.projects = [
      {
        title: 'Circuit Generator',
        description:
          'The Circuit Generator project was a program designed to generate random electrical circuits using Python.',
        imageSrc: circuitGenImg,
        url: 'https://github.com/michaelpaulinus/Circuit-Generator'
      },
      {
        title: 'Circuit Component Detector',
        description:
          'The Circuit Component Detector project was an exciting exploration into using machine learning to identify circuit components from digital circuits.',
        imageSrc: circuitDetImg,
        url: 'https://github.com/michaelpaulinus/Circuit-Components-Detector'
      },
      {
        title: 'E-Voting using Blockchain',
        description:
          'This was a group project which focused on running an election using blockchain technology. I was responsible for designing the smart contract of the election. A smart contract is simply the protocols of an agreement written in code and stored on the blockchain. This consisted of functions such as controlling voting periods, preventing double voting and confirming voter eligibility. The project also provided voters a method of verifying their vote was correctly allocated.',
        imageSrc: votecoinImg,
        url: 'https://github.com/Shelin-ftego/Votecoin-v2'
      },
      {
        title: 'Image Classification Using GLCM',
        description:
          'This project uses Haralick features from a Gray Level Co-occurrence Matrix (GLCM) to classify X-ray scans of a chest as that of a chest that is normal or having pneumonia.',
        imageSrc: projectImg,
        url: 'https://github.com/michaelpaulinus/Image-Classification-GLCM'
      },
      {
        title: 'Sign Language Chat App',
        description:
          'This Android application was created for my final year design project. The application used a deep learning model to convert static sign language gestures to text and send them as a text message.',
        imageSrc: androidImg,
        url: 'https://github.com/michaelpaulinus/SignChat'
      }
    ]
  }
}
</script>

<template>
  <div class="container">
    <h1 style="margin: 0 auto; font-weight: 700; font-size: 3em">Projects/Michael</h1>
  </div>

  <div class="project-container">
    <v-list lines="two">
      <v-list-item v-for="item in projects" :key="item.url">
        <v-card :href="item.url" target="_blank" variant="outlined">
          <v-row align="center">
            <v-col>
              <v-img :src="item.imageSrc" max-width="auto" max-height="auto"></v-img>
            </v-col>
            <v-col>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text justify="start"> {{ item.description }}</v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-list-item>
    </v-list>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.project-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
