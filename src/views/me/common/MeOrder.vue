<template>
  <article class="me-order">
    <div class="me-order-icon" @click="goMeInput">
      <img src="~assets/image/me/me-input.png" />
      <div class="order-text">
        <span>我发布的</span>
        <span>({{ userData.product > 999 ? '999+' : userData.product }})</span>
      </div>
    </div>
    <div class="me-order-icon" @click="goMeSale">
      <img src="~assets/image/me/me-sale.png" />
      <div class="order-text">
        <span>我卖出的</span>
        <span>({{ userData.sellCount > 999 ? '999+' : userData.sellCount }})</span>
      </div>
    </div>
    <div class="me-order-icon" @click="goMeBuy">
      <img src="~assets/image/me/me-buy.png" />
      <div class="order-text">
        <span>我买到的</span>
        <span>({{ userData.buyerCount > 999 ? '999+' : userData.buyerCount }})</span>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { getUserData } from '../hooks/getUserData';
export default defineComponent({
  setup() {
    const router = useRouter();
    const goMeInput = () => {
      router.push({
        path: '/meInput',
        query: {
          isGet: 'true'
        }
      });
    };
    const goMeSale = () => {
      router.push({
        path: './sale',
        query: {
          isGet: 'true'
        }
      });
    };
    const goMeBuy = () => {
      router.push({
        path: './buy',
        query: {
          isGet: 'true'
        }
      });
    };
    const userData = getUserData(useStore());
    return {
      goMeInput,
      goMeBuy,
      goMeSale,
      userData
    };
  }
});
</script>

<style lang="scss" scoped>
.me-order {
  width: 95%;
  margin: 0 auto;
  margin-top: -40px;
  background-color: #fff;
  box-shadow: 0px 4px 20px #f2f2f2;
  border-radius: 15px;
  display: flex;
  padding: 18px 10px;
  .me-order-icon {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
    }
    .order-text {
      display: flex;
      flex: 1;
      font-size: 11px;
      font-weight: 400;
      span {
        margin-top: 8px;
      }
    }
  }
}
</style>
