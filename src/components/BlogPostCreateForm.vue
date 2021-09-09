<template>
  <form @submit.prevent="submitForm">
    <h2>Add a blog post</h2>
    <div>
      <label>Title: <input v-model="formData.title" required /></label>
      <span v-if="titleNotUnique" class="text-red">Title not unique</span>
    </div>
    <div>
      <label>Text: <input v-model="formData.text" required /> </label>
    </div>
    <div>
      <label>Image: <input v-model="formData.image" /> </label>
    </div>
    <div>
      <label>URL: <input v-model="formData.url" /> </label>
    </div>
    <button type="submit" :disabled="titleNotUnique">Add post</button>
  </form>
</template>

<script setup>
import { computed, reactive } from "@vue/reactivity";

const props = defineProps({ posts: Array, addPost: Function });

const formData = reactive({ title: "", text: "", image: "", url: "" });

const titleNotUnique = computed(() =>
  props.posts.some(
    (p) => p.title.trim().toLowerCase() == formData.title.trim().toLowerCase()
  )
);

function submitForm() {
  props.addPost(formData.title, formData.text, formData.image, formData.url);
  formData.title = formData.text = formData.image = formData.url = "";
}
</script>

<style>
.text-red {
  color: red;
}
</style>
