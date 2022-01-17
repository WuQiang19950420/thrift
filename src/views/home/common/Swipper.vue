<template>
  <swipe :autoplay="3000" indicator-color="white" class="swipper">
    <swipe-item v-for="image in images" :key="image">
      <img :src="image" @load="imgLoad" />
    </swipe-item>
  </swipe>
</template>

<script lang="ts">
import { Swipe, SwipeItem } from 'vant';
import { defineComponent, computed } from 'vue';
import emitter from '@/bus';
export default defineComponent({
  components: {
    Swipe,
    SwipeItem
  },
  props: {
    homeBannerData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup(props) {
    const images = computed(() => {
      let images: string[] = [];
      props.homeBannerData.forEach((item: any) => {
        images.push(item.imagePath);
      });
      return images;
    });
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    return {
      images,
      imgLoad
    };
  }
});
</script>

<style lang="scss" scoped>
.swipper {
  height: 150px;
  border-radius: 10px;
  width: 95%;
  margin: 0 auto;
  img {
    height: 200px;
    width: 100%;
  }
}
</style>
