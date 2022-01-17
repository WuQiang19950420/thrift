<template>
  <article>
    <van-empty :description="text" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss"></style>
