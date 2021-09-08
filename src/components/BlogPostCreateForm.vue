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
import { computed, ref } from "@vue/reactivity";
export default {
  name: "BlogPostCreateForm",
  props: { posts: Array, addPost: Function },
  setup(props) {
    const title = ref("");
    const titleNotUnique = computed(() =>
      props.posts.some(
        (p) => p.title.trim().toLowerCase() == title.value.trim().toLowerCase()
      )
    );
    const submitForm = ({ target }) => {
      const { text, image, url } = target.elements;
      props.addPost(title.value, text.value, image.value, url.value);
      target.reset();
      title.value = "";
    };
    return { title, titleNotUnique, submitForm };
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
