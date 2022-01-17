<template>
  <article class="publish" :style="{ height: publishHeight + 'px' }">
    <div class="publish-box" :class="{ 'publish-box-active': publishShow }" @click="goPublishGoods">
      <img src="@/assets/image/common/publish.png" />
      <span>发布商品</span>
    </div>
  </article>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const publishShow = ref(false);
    setTimeout(() => {
      publishShow.value = true;
    });
    const publishHeight = ref(window.innerHeight);
    const goPublishGoods = () => {
      router.push('/publishGoods');
    };
    return {
      publishShow,
      publishHeight,
      goPublishGoods
    };
  }
};
</script>

<style lang="scss" scoped>
.publish {
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
  background-color: #333333;
  z-index: 2;
  .publish-box {
    position: absolute;
    left: 50%;
    bottom: 100px;
    transform: translateX(-265%);
    transition: all 0.5s;
    img {
      width: 45px;
      height: 45px;
      vertical-align: middle;
    }
    span {
      margin-left: 15px;
      font-size: 14px;
      color: #fff;
    }
  }
  .publish-box-active {
    transform: translateX(-50%);
  }
}
</style>
