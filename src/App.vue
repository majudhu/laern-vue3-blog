<template>
  <HelloWorld msg="Welcome to Learn Vue 3 Blog" />
  <BlogPost v-for="post in posts" :key="post.title" :post="post" />
  <form @submit.prevent="submitForm">
    <div>
      <label>Title: <input name="title" required /> </label>
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
    <button type="submit">Add post</button>
  </form>
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
body {
  font-family: sans-serif;
}
</style>
