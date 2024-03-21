<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import synthesisLogo from '@/assets/images/synthesis_software_technologies_pty_ltd_logo.jpeg'
import optinumLogo from '@/assets/images/opti_num_solutions_logo.jpeg'
import ukznLogo from '@/assets/images/ukzn_logo.jpeg'
import type ExperienceItem from 'src/interfaces/ExperienceItem'
import type EducationItem from 'src/interfaces/EducationItem'

document.title = 'About | Michael Paulinus'
export default {
  setup() {},

  methods: {},

  data() {
    return {
      experience: [] as ExperienceItem[],
      education: [] as EducationItem[]
    }
  },

  created() {
    this.experience = [
      {
        title: 'Software Engineer',
        company: 'Synthesis Software Technologies',
        time: 'Feb 2024 -',
        imageSrc: synthesisLogo,
        url: 'https://www.linkedin.com/company/synthesis-software-technologies-pty-ltd/'
      },
      {
        title: 'Consultant',
        company: 'Opti-Num Solutions',
        time: 'Jan 2022 - Jan 2024',
        imageSrc: optinumLogo,
        url: 'https://www.linkedin.com/company/opti-num-solutions/'
      },
      {
        title: 'Student Tutor',
        company: 'University of KwaZulu-Natal',
        time: 'Oct 2021 - Dec 2021',
        imageSrc: ukznLogo,
        url: 'https://www.linkedin.com/school/university-of-kwazulu-natal/'
      }
    ]

    this.education = [
      {
        course: 'BSc (Eng) Electronic Engineering',
        university: 'University of KwaZulu-Natal',
        imageSrc: ukznLogo,
        time: 'Feb 2018 - Dec 2021',
        url: 'https://ww2.ukzn.ac.za/'
      }
    ]
  }
}
</script>

<template>
  <div class="container">
    <div class="header">
      <h2>About</h2>
    </div>
    <div class="content">
      <p>
        Hello, my name is Michael Paulinus, and I am a software engineer from South Africa. I hold a
        BSc(Eng) in Electronic Engineering from the University of KwaZulu-Natal, where I gained a
        deep understanding of software development principles, including design patterns, data
        structures, algorithms, and software testing methodologies.
      </p>
    </div>
  </div>

  <br />

  <div class="container">
    <div class="header">
      <h2>Contact</h2>
    </div>
    <div class="content">
      <p>You can reach out to me on any of the following platforms.</p>
      <br />
      <section class="button-container">
        <v-btn
          href="mailto:michaelpaulinus@gmail.com"
          target="_blank"
          prepend-icon="mdi-gmail"
          append-icon="mdi-arrow-top-right"
          style="grid-row: 1; grid-column: 1"
          >Email</v-btn
        >
        <v-btn
          href="https://github.com/michaelpaulinus"
          target="_blank"
          prepend-icon="mdi-github"
          append-icon="mdi-arrow-top-right"
          style="grid-row: 1; grid-column: 2"
          >GitHub</v-btn
        >
        <v-btn
          href="https://www.instagram.com/michael_paulinus/"
          target="_blank"
          prepend-icon="mdi-instagram"
          append-icon="mdi-arrow-top-right"
          style="grid-row: 2; grid-column: 1"
          >Instagram</v-btn
        >
        <v-btn
          href="https://www.linkedin.com/in/michaelpaulinus/"
          target="_blank"
          prepend-icon="mdi-linkedin"
          append-icon="mdi-arrow-top-right"
          style="grid-row: 2; grid-column: 2"
          >LinkedIn</v-btn
        >
      </section>
    </div>
  </div>

  <br />

  <div class="container">
    <div class="header">
      <h2>Experience</h2>
    </div>
    <div class="content">
      <p>I've been working for 2+ years in the software development industry.</p>
      <br />
      <v-list lines="one">
        <v-list-item
          v-for="(item, index) in experience"
          :key="index"
          :href="item.url"
          :prepend-avatar="item.imageSrc"
          target="_blank"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.company }}</v-list-item-subtitle>
          <template v-slot:append> {{ item.time }}</template>
        </v-list-item>
      </v-list>
    </div>
  </div>

  <br />

  <div class="container">
    <div class="header">
      <h2>Education</h2>
    </div>
    <div class="content">
      <v-list lines="one">
        <v-list-item
          v-for="(item, index) in education"
          :key="index"
          :href="item.url"
          :prepend-avatar="item.imageSrc"
          target="_blank"
        >
          <v-list-item-title>{{ item.course }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.university }}</v-list-item-subtitle>
          <template v-slot:append> {{ item.time }}</template>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<style>
h2 {
  color: grey;
}

p {
  color: black;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.button-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  grid-gap: 10px;
}

.header {
  flex-basis: 30%;
  margin-right: 20px;
}

.content {
  flex-basis: 65%;
}
</style>
