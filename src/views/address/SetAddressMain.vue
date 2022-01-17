<template>
  <article class="set-address-main">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      :border="false"
      :fixed="true"
      title="地址更改"
      :placeholder="true"
      autocomplete="off"
    />
    <van-form @submit="onSubmit" class="form">
      <van-cell-group inset>
        <van-field
          v-model="addressRequest.name"
          name="name"
          label="姓名"
          placeholder="填写姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
          autocomplete="off"
        />
        <van-field
          v-model="addressRequest.phone"
          name="phone"
          label="手机号"
          placeholder="填写手机号"
          maxlength="11"
          :rules="[{ required: true, message: '请填写手机号' }]"
          autocomplete="off"
        />
        <van-field
          v-model="result"
          is-link
          readonly
          name="area"
          label="省市区"
          placeholder="点击选择省市区"
          @click="showAreas"
          :rules="[{ required: true, message: '请选择省市区' }]"
        />
        <van-popup v-model:show="showArea" position="bottom">
          <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
        </van-popup>
        <van-field
          v-model="specificAddress"
          name="address"
          label="详细地址"
          placeholder="填写详细地址"
          :rules="[{ required: true, message: '请填写详细地址' }]"
          autocomplete="off"
        />
      </van-cell-group>
      <div class="button">
        <div class="btn">
          <van-button round block type="primary" native-type="submit">
            {{ $route.query.isSetAddress == 1 ? '修改地址' : '保存地址' }}
          </van-button>
        </div>
        <div class="btn" v-if="result">
          <van-button round block @click="delAddress"> 删除地址 </van-button>
        </div>
      </div>
    </van-form>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { deleteAddress } from '@/service/address/address';
import { Toast } from 'vant';
import { setAddress } from '@/service/address/address';
import { areaList } from '@vant/area-data';
import type { AreaColumnOption } from 'vant';
import type { ISaveAddress } from './type/type';
import type { IAddressItem } from '@/store/address/type';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '@/store';
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const showArea = ref(false);
    const result = ref(''); //省市
    const addressId = ref('');
    let addressItem = reactive<IAddressItem>({
      address: '',
      id: 0,
      name: '',
      phone: '',
      userId: 0
    }); //存储保存地址的数据
    const specificAddress = ref(''); //详细地址
    const addressRequest = reactive({
      address: '',
      phone: '',
      name: ''
    });
    const onClickLeft = () => {
      router.back();
    };
    if (route.query.addressItem) {
      addressItem = JSON.parse(route.query.addressItem as string);
      const address = addressItem.address.split(' ');
      result.value = address[0];
      specificAddress.value = address[1];
      addressRequest.address = addressItem.address;
      addressRequest.phone = addressItem.phone;
      addressRequest.name = addressItem.name;
      addressId.value = addressItem.id.toString();
    }
    const showAreas = () => {
      showArea.value = !showArea.value;
    };
    const onConfirm = (results: AreaColumnOption[]) => {
      if (results[0].name === results[1].name) {
        result.value = `${results[1].name}${results[2].name}`;
      } else {
        result.value = `${results[0].name}${results[1].name}${results[2].name}`;
      }
      showArea.value = !showArea.value;
    };
    //删除地址
    const delAddress = () => {
      deleteAddress(`id=${addressItem.id}`).then((res) => {
        if (res.code === 1) {
          Toast('删除地址成功');
          store.dispatch('address/getAddressItem');
          router.back();
        } else {
          Toast('删除地址失败');
        }
      });
    };
    //提交地址信息
    const onSubmit = (value: ISaveAddress) => {
      const saveAddress = `address=${value.area} ${value.address}&phone=${value.phone}&name=${value.name}&id=${addressId.value}`;
      setAddress(saveAddress).then((res) => {
        if (res.code === 1) {
          Toast({
            message: res.msg,
            onOpened: goAddressManage
          });
        } else {
          Toast(res.msg);
        }
      });
    };
    const goAddressManage = () => {
      router.back();
    };
    return {
      showArea,
      showAreas,
      areaList,
      addressRequest,
      result,
      specificAddress,
      onConfirm,
      onSubmit,
      delAddress,
      addressItem,
      onClickLeft
    };
  }
});
</script>

<style lang="scss" scoped>
.set-address-main {
  background-color: #f7f8fa;
  height: 100vh;
  .form {
    margin-top: 20px;
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 30px;
    .btn {
      width: 70%;
      height: 40px;
      line-height: 40px;
      &:last-child {
        margin-top: 30px;
      }
    }
  }
}
</style>
