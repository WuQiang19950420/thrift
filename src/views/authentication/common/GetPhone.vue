<template>
  <section class="get-phone">
    <van-icon class="icon" name="plus" />
    <span class="input-text"><slot></slot></span>
    <input type="file" ref="inputImg" @change="inputImgs" />
    <img class="showImg" :src="imgList" :class="{ 'showImg-active': isShow }" />
    <div class="delete-img" v-show="isShow" @click="deleteImg">x</div>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const inputImg = ref(null);
    const imgList = ref(null);
    const isShow = ref(false);
    //添加图片
    const inputImgs = () => {
      const imgObj = inputImg.value.files; //保存用户选择的图片或者视频
      imgList.value = URL.createObjectURL(imgObj.item(0)); //拿去每个图片转换url
      isShow.value = !isShow.value;
    };
    //删除图片
    const deleteImg = () => {
      inputImg.value.value = ''; //清空value值,防止不能上传一样的图
      imgList.value = null;
      isShow.value = !isShow.value;
    };
    return {
      inputImgs,
      inputImg,
      imgList,
      isShow,
      deleteImg
    };
  }
};
</script>

<style scoped lang="scss">
.get-phone {
  background-color: #f5f5f6;
  position: relative;
  height: 180px;
  border-radius: 15px;
  margin-top: 20px;
  .icon {
    width: 100%;
    height: 100%;
    font-size: 40px;
    text-align: center;
    line-height: 180px;
    color: #666;
    position: absolute;
  }
  .input-text {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    color: #9b9b9b;
  }
  input {
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  .showImg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
    z-index: -3;
    opacity: 0;
  }
  .showImg-active {
    z-index: 3;
    opacity: 1;
  }
  .delete-img {
    position: absolute;
    right: -3px;
    top: -3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
}
</style>
