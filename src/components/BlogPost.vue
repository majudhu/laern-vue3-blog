<template>
  <div>
    <h2>{{ post.title }}</h2>
    <img :src="post.image" />
    <p>
      {{ post.text }}
      <a v-if="!!post.url" :href="post.url">Open</a>
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    post: {
      title: String,
      text: String,
      image: String,
      url: String,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
