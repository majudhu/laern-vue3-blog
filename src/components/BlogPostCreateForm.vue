<template>
  <form @submit.prevent="submitForm">
    <h2>Add a blog post</h2>
    <div>
      <label>Title: <input name="title" required v-model="title" /></label>
      <span v-if="titleNotUnique" class="text-red">Title not unique</span>
    </div>
    <div>
      <label>Text: <input name="text" required /> </label>
    </div>
    <div>
      <label>Image: <input name="image" /> </label>
    </div>
    <div>
      <label>URL: <input name="url" /> </label>
    </div>
    <button type="submit" :disabled="titleNotUnique">Add post</button>
  </form>
</template>

<script>
export default {
  name: "BlogPostCreateForm",
  props: {
    posts: Array,
    addPost: Function,
  },
  methods: {
    submitForm({ target }) {
      const { title, text, image, url } = target.elements;
      this.addPost(title.value, text.value, image.value, url.value);
      this.title = "";
      target.reset();
    },
  },
  computed: {
    titleNotUnique() {
      return this.posts.some(
        (p) => p.title?.toLowerCase() == this.title?.toLowerCase()
      );
    },
  },
  data() {
    return { title: "" };
  },
};
</script>

<style>
body {
  font-family: sans-serif;
}
.text-red {
  color: red;
}
</style>
