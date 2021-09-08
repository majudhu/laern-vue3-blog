<template>
  <h1>Welcome to Learn Vue 3 Blog</h1>

  <BlogPost v-for="post in posts" :key="post.title" :post="post" />

  <BlogPostCreateForm :posts="posts" :addPost="addPost" />
</template>

<script>
import BlogPost from "./components/BlogPost.vue";
import BlogPostCreateForm from "./components/BlogPostCreateForm.vue";
import SAMPLE_POSTS from "./assets/sample_posts.json";

export default {
  name: "App",
  components: {
    BlogPost,
    BlogPostCreateForm,
  },
  methods: {
    addPost(title, text, image, url) {
      this.posts.push({ title, text, image, url });
    },
  },
  data() {
    return { posts: SAMPLE_POSTS };
  },
};
</script>

<style>
</style>
