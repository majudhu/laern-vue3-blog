<template>
  <form @submit.prevent="submitForm">
    <h2>Add a blog post</h2>
    <div>
      <label>Title: <input v-model="title" required /></label>
      <span v-if="titleNotUnique" class="text-red">Title not unique</span>
    </div>
    <div>
      <label>Text: <input v-model="text" required /> </label>
    </div>
    <div>
      <label>Image: <input v-model="image" /> </label>
    </div>
    <div>
      <label>URL: <input v-model="url" /> </label>
    </div>
    <button type="submit" :disabled="titleNotUnique">Add post</button>
  </form>
</template>

<script>
import { computed, reactive, toRefs } from "@vue/reactivity";
export default {
  name: "BlogPostCreateForm",
  props: { posts: Array, addPost: Function },
  setup(props) {
    const formData = reactive({ title: "", text: "", image: "", url: "" });
    const titleNotUnique = computed(() =>
      props.posts.some(
        (p) =>
          p.title.trim().toLowerCase() == formData.title.trim().toLowerCase()
      )
    );
    function submitForm() {
      const { title, text, image, url } = formData;
      props.addPost(title, text, image, url);
      formData.title = formData.text = formData.image = formData.url = "";
    }
    return { ...toRefs(formData), titleNotUnique, submitForm };
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
