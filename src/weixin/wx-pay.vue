<template>
  <main class="pay">
    <div class="pay-top">请确认支付是否已经完成?</div>
    <div class="pay-bottom">
      <div class="btn" @click="payEnd">
        <van-button round block type="primary"> 已经完成支付 </van-button>
      </div>
      <div class="btn" @click="payAgain">
        <van-button round block type="primary"> 支付遇到问题,重新支付 </van-button>
      </div>
      <div class="btn" @click="payBack">
        <van-button round block type="primary"> 不想支付了,返回首页 </van-button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const router = useRouter();
    const payEnd = () => {
      router.push({
        path: './buy',
        query: {
          isGet: 'true'
        }
      });
    };
    const payAgain = () => {
      location.href = sessionStorage.getItem('mweb_url') as string;
    };
    const payBack = () => {
      router.push('/home');
    };
    return {
      payEnd,
      payAgain,
      payBack
    };
  }
});
</script>

<style scoped lang="scss">
.pay {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  .pay-bottom {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn {
      width: 100%;
      height: 30px;
      line-height: 30px;
      margin-top: 35px;
    }
  }
}
</style>
