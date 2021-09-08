<template>
  <HelloWorld msg="Welcome to Learn Vue 3 Blog" />

  <BlogPost v-for="post in posts" :key="post.title" :post="post" />

  <form @submit.prevent="submitForm">
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
import HelloWorld from "./components/HelloWorld.vue";
import BlogPost from "./components/BlogPost.vue";
import SAMPLE_POSTS from "./assets/sample_posts.json";

export default {
  name: "App",
  components: {
    HelloWorld,
    BlogPost,
  },
  methods: {
    addPost(title, text, image, url) {
      this.posts.push({ title, text, image, url });
    },
    submitForm({ target }) {
      const { title, text, image, url } = target.elements;
      this.posts.push({
        title: title.value,
        text: text.value,
        image: image.value,
        url: url.value,
      });
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
    return {
      title: "",
      posts: SAMPLE_POSTS,
    };
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
