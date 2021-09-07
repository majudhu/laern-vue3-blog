<template>
  <HelloWorld msg="Welcome to Learn Vue 3 Blog" />
  <BlogPost v-for="post in posts" :key="post.title" :post="post" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import BlogPost from "./components/BlogPost.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BlogPost,
  },
  data() {
    return {
      posts: [
        {
          title: "Blog post 1",
          text: "This is the blog post 1 text",
          image: "https://source.unsplash.com/lFmuWU0tv4M/400x400",
          url: "https://unsplash.com/photos/lFmuWU0tv4M",
        },
        {
          title: "Textures & Patterns",
          text: "Whether you’re looking for stunning macro-photography or shots of complex architectural shapes — you’ve come to the right place.",
          image: "https://source.unsplash.com/qXbjMePYwkE/400x400",
          url: "https://unsplash.com/t/textures-patterns",
        },
        {
          title: "Street Photography",
          text: "From early morning commutes to neon-tinted nights, our streets have become the fabric of our shared history. This category encompasses street photography in every form.",
          image: "https://source.unsplash.com/buYlndcNnjM/400x400",
          url: "hhttps://unsplash.com/t/street-photography",
        },
        {
          title: "Blank",
          text: "No image no url",
        },
      ],
    };
  },
};
</script>

<style>
</style>
