<template>
  <article class="all-tags">
    <div class="tags">
      <div
        class="tags-item"
        :class="{ 'tags-item-active': isActive === index }"
        v-for="(item, index) in tags"
        :key="index"
        @click="tagsClick(index)"
      >
        {{ item }}
      </div>
    </div>
    <div
      class="tags-line"
      :style="{
        transform: `translateX(${changeTagsLineWidth}px) translateX(-50%)`
      }"
    ></div>
  </article>
</template>

<script>
import { ref } from 'vue';
export default {
  emits: ['tagsClick'],
  setup(_, { emit }) {
    //tags移动
    const tags = ['测试1', '测试2', '测试3', '测试4'];
    const innerWidth = window.innerWidth;
    const isActive = ref(0);
    const onceInnerWidth = innerWidth / tags.length / 2; //标签线正对中间
    let changeTagsLineWidth = ref(onceInnerWidth);
    const tagsClick = (index) => {
      isActive.value = index;
      changeTagsLineWidth.value = onceInnerWidth * (index + (index + 1));
      emit('tagsClick', index);
    };
    return {
      tags,
      tagsClick,
      isActive,
      changeTagsLineWidth
    };
  }
};
</script>

<style lang="scss" scoped>
.all-tags {
  margin: 10px 0 10px 0;
  background-color: #fff;
  .tags {
    display: flex;
    text-align: center;
    font-size: 13px;
    font-weight: 300;
    .tags-item {
      flex: 1;
      padding-bottom: 6px;
    }
    .tags-item-active {
      font-size: 14px;
      font-weight: 600;
    }
  }
  .tags-line {
    width: 20px;
    height: 4px;
    background-color: #0099ff;
    border-radius: 4px;
    transition: all 0.4s;
  }
}
</style>
