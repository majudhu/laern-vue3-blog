<template>
  <div>
    <h2>{{ title }}</h2>
    <img :src="image" />
    <p>
      {{ text }}
      <a v-if="!!url" :href="url">Open</a>
    </p>
    <hr />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({ title: String, text: String, image: String, url: String });
</script>
