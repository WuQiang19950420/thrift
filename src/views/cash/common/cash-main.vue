<template>
  <article class="captial-main">
    <h3>我的资产</h3>
    <div class="captial-main-center">
      <div class="captial-main-center-item">
        <span class="price"
          >￥<em>{{ priceArr[0] }}</em
          >.{{ priceArr[1] }}</span
        >
      </div>
    </div>
  </article>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
export default defineComponent({
  setup() {
    const store = useStore();
    const priceArr = computed(() => {
      const price = store.state.me.userData.amt.toString();
      const priceArr = price.split('.');
      return priceArr;
    });
    return {
      priceArr
    };
  }
});
</script>

<style lang="scss" scoped>
.captial-main {
  background-image: linear-gradient(140deg, #84bff7, #2e9aff);
  height: 120px;
  width: 95%;
  border-radius: 10px;
  margin: 0 auto;
  color: #ffffff;
  margin-top: 20px;
  padding: 15px;
  position: relative;
  h3 {
    font-size: 15px;
  }
  .captial-main-center {
    display: flex;
    font-size: 12px;
    margin-top: 30px;
    .captial-main-center-item {
      display: flex;
      flex-direction: column;
      flex: 1;
      position: relative;
      span {
        text-align: center;
      }
      .price {
        font-size: 15px;
        em {
          font-style: normal;
          font-size: 23px;
        }
        padding-right: 10px;
      }
    }
  }
  p {
    color: #828282;
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
  }
}
</style>
