<template>
  <h1>Welcome to Learn Vue 3 Blog</h1>

  <BlogPost
    v-for="p in posts"
    :key="p.title"
    :title="p.title"
    :text="p.text"
    :image="p.image"
    :url="p.url"
  />

  <BlogPostCreateForm :posts="posts" :addPost="addPost" />
</template>

<script>
import BlogPost from "./components/BlogPost.vue";
import BlogPostCreateForm from "./components/BlogPostCreateForm.vue";
import SAMPLE_POSTS from "./assets/sample_posts.json";
import { reactive } from "@vue/reactivity";

export default {
  name: "App",
  components: {
    BlogPost,
    BlogPostCreateForm,
  },
  setup() {
    const posts = reactive(SAMPLE_POSTS);
    return {
      posts,
      addPost(title, text, image, url) {
        posts.push({ title, text, image, url });
      },
    };
  },
};
</script>

<style>
</style>
