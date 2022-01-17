<template>
  <article class="home-loction">
    <div class="back-home" @click="goHome">
      <img src="~assets/image/home/back-shop.png" />
    </div>
    <div class="choose">
      <span @click="tagsClick(0)" :class="{ 'choose-active': isActive === 0 }">推荐</span>
      <span
        @click="tagsClick(1)"
        :class="{
          'choose-active': isActive === 1,
          'location-active': isActive === 1
        }"
        >{{ city }}</span
      >
    </div>
    <div class="location"></div>
    <van-popup :show="areaShow" position="bottom" :round="true">
      <Area title="选择地区" :area-list="areaList" @cancel="areaCancel" @confirm="areaConfirm" columns-num="2" />
    </van-popup>
  </article>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { Area } from 'vant';
import { areaList } from '@vant/area-data';
import { useStore } from '@/store';
import emitter from '@/bus';

export default defineComponent({
  components: {
    Area
  },
  setup() {
    const store = useStore();
    const isActive = ref(0);
    let isLocationClick = 0;
    const areaShow = ref(false);
    const city = ref('上海市');
    store.commit('shopItem/changeLocationCity', city.value);
    //0 为推荐内容  1 为选择地址内容 isLocationClick 选择地址是否被点击
    const tagsClick = (index: number) => {
      isActive.value = index;
      //推荐
      if (index === 0) {
        emitter.emit('locationClick', 1);
        isLocationClick = 0;
        //选择地区
      } else if (index === 1 && isLocationClick === 1) {
        areaShow.value = true;
        isLocationClick = 0;
        //地区
      } else {
        emitter.emit('locationClick', 2);
        isLocationClick = 1;
      }
    };
    const areaCancel = () => {
      areaShow.value = false;
      isLocationClick = 1;
    };
    const areaConfirm = (address: any[]) => {
      city.value = address[1].name;
      areaShow.value = false;
      isLocationClick = 1;
      store.commit('shopItem/changeLocationCity', city.value);
    };
    const goHome = () => {
      window.location.href = 'https://keira.cn/m-wap';
    };
    return {
      tagsClick,
      isActive,
      areaList,
      areaShow,
      areaCancel,
      areaConfirm,
      city,
      goHome
    };
  }
});
</script>

<style lang="scss" scoped>
.home-loction {
  display: flex;
  width: 95%;
  height: 28px;
  justify-content: space-between;
  line-height: 28px;
  margin: 0 auto;
  margin-bottom: 5px;
  font-size: 14px;
  color: #c0c0c0;
  .back-home {
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    img {
      width: 23px;
      height: 23px;
    }
  }
  .location {
    width: 50px;
    height: 100%;
    text-align: right;
  }
  .choose {
    flex: 1;
    height: 100%;
    text-align: center;
    span {
      height: 100%;
      display: inline-block;
      &:first-child {
        margin-right: 20px;
      }
    }
    .choose-active {
      color: #000;
      font-size: 15px;
      font-weight: 500;
      transition: all 0.1s;
    }
    .location-active {
      &::after {
        content: '';
        box-sizing: border-box;
        width: 7px;
        height: 7px;
        border: 1px solid #c8c9cc;
        border-top: none;
        border-left: none;
        display: inline-block;
        transform: rotate(45deg);
        position: relative;
        left: 5px;
        bottom: 4px;
      }
    }
  }
}
</style>
