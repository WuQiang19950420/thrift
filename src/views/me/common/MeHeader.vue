<template>
  <article class="me-header">
    <header>
      <div class="me-header-left">
        <div class="user-img">
          <img :src="userData.photo" />
        </div>
        <div class="user-name">
          <h3>{{ userData.userName }}</h3>
          <span>普通会员</span>
        </div>
      </div>
      <!-- 			<div class = "me-header-right">
				<img src = "/static/image/me/section.png">
			</div> -->
    </header>
    <footer>
      <div @click="shopCollect">
        <span>{{ userData.collection }}</span>
        <span>我的收藏</span>
      </div>
      <div>
        <span>{{ userData.amt }}</span>
        <span>账户余额</span>
      </div>
    </footer>
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
    const shopCollect = () => {
      router.push({
        path: '/goodColloct',
        query: {
          isGet: 'true'
        }
      });
    };
    const userData = getUserData(useStore());
    // const goMeDetail = () => {
    //   router.push('/meDetail');
    // };
    return {
      shopCollect,
      // goMeDetail,
      userData
    };
  }
});
</script>

<style lang="scss" scoped>
.me-header {
  padding: 20px;
  background-image: linear-gradient(140deg, #84bff7, #2e9aff);
  color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  header {
    display: flex;
    justify-content: space-between;
    .me-header-left {
      display: flex;
      align-items: center;
      .user-img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .user-name {
        margin-left: 10px;
        h3 {
          font-size: 18px;
          margin-bottom: 5px;
        }
        span {
          font-size: 12px;
          background-color: rgba(0, 0, 0, 0.16);
          border-radius: 10px;
          height: 16px;
          padding: 0 5px;
        }
      }
    }
    .me-header-right {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  footer {
    display: flex;
    margin-top: 30px;
    div {
      display: flex;
      flex-direction: column;
      flex: 1;
      align-items: center;
      span:nth-child(1) {
        margin-bottom: 8px;
      }
      span:nth-child(2) {
        font-size: 13px;
      }
    }
  }
}
</style>
