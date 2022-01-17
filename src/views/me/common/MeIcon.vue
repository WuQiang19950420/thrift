<template>
  <article class="me-order">
    <div class="me-order-icon">
      <div @click="goAddress">
        <img src="~assets/image/me/me-address.png" />
        <span>地址管理</span>
      </div>
      <!-- <div>
        <img src="~assets/image/me/me-account.png" />
        <span>账目明细</span>
      </div> -->
      <div @click="goCash">
        <img src="~assets/image/me/me-card.png" />
        <span>我的资产</span>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const router = useRouter();
    const goAddress = () => {
      router.push({
        path: '/addressManage',
        query: {
          isClick: 1
        }
      });
    };
    const goCash = () => {
      router.push({
        path: '/cash'
      });
    };
    return {
      goAddress,
      goCash
    };
  }
});
</script>

<style lang="scss" scoped>
.me-order {
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 20px #f2f2f2;
  border-radius: 15px;
  padding: 18px 0 8px 0;
  .me-order-icon {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    img {
      width: 35px;
      height: 35px;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(100% / 4);
      font-size: 13px;
      margin-bottom: 10px;
      span {
        margin-top: 5px;
        font-size: 12px;
      }
    }
  }
}
</style>
