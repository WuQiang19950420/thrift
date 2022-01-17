<template>
  <main class="address-manage" :style="{ height: emptyHeight + 'px' }">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      :border="false"
      :fixed="true"
      title="地址管理"
      :placeholder="true"
    />
    <template v-if="isLoading">
      <van-loading class="loading" color="#CBCFD3" size="50">加载中...</van-loading>
    </template>
    <template v-else>
      <template v-if="address.length !== 0">
        <address-item
          class="address-item"
          v-for="(item, index) in address"
          :key="item.id"
          :address="item"
          @click="chooseAddress(index)"
        >
          <template v-slot:setAddress>
            <img src="~assets/image/address/set-address.png" @click.stop="setAddress(index)" />
          </template>
        </address-item>
      </template>
      <template v-else>
        <empty text="暂无地址" :style="{ height: emptyHeight + 'px' }" class="emptys" />
      </template>
      <button class="add-address-btn" @click="goSetAddress">新建收货地址</button></template
    >
  </main>
</template>

<script lang="ts">
import AddressItem from '@/views/common/address/AddressItem.vue';
import { useStore } from '@/store';
import { useRouter, useRoute } from 'vue-router';
import { computed, defineComponent, ref } from 'vue';
import empty from '../common/empty/empty.vue';
export default defineComponent({
  components: {
    AddressItem,
    empty
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute();
    const emptyHeight = ref(window.innerHeight);
    store.dispatch('address/getAddressItem');
    const address = computed(() => {
      return store.state.address.addressItem;
    });
    const isLoading = computed(() => {
      return store.state.address.isLoading;
    });
    const onClickLeft = () => {
      router.back();
      if (!route.query.isClick) {
        router.back();
      } else {
        router.push('/me');
      }
    };
    const goSetAddress = () => {
      router.push('/setAddressMain');
    };
    const chooseAddress = (index: number) => {
      if (!route.query.isClick) {
        router.push({
          path: '/writeOrder',
          query: {
            addressIndex: index
          }
        });
      }
    };
    const setAddress = (index: number) => {
      router.push({
        path: '/setAddressMain',
        query: {
          addressItem: JSON.stringify(address.value[index]),
          isSetAddress: 1
        }
      });
    };
    return {
      onClickLeft,
      address,
      goSetAddress,
      setAddress,
      chooseAddress,
      emptyHeight,
      isLoading
    };
  }
});
</script>

<style lang="scss" scoped>
.address-manage {
  .address-item {
    border-radius: 0;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 10px;
    img {
      width: 23px;
      height: 23px;
    }
  }
  .loading {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .add-address-btn {
    width: 70%;
    height: 40px;
    background-color: #1989fa;
    border: none;
    border-radius: 20px;
    line-height: 40px;
    color: #ffffff;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
