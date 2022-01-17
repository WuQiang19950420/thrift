<template>
  <article class="publish-goods-text">
    <textarea
      class="input-text"
      placeholder="请描述下您的宝贝吧(最多255个字符)～"
      v-model="goodTextArea"
      maxlength="255"
    ></textarea>
    <div class="up-load">
      <van-uploader
        :before-delete="beforeDelete"
        :after-read="afterReads"
        v-model="fileList"
        :max-count="5"
        @load="imgLoad"
      >
      </van-uploader>
    </div>
  </article>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
import emitter from '@/bus';
import { upLoadImg } from '@/service/publishGoods/publishGoods';
import { Toast } from 'vant';
import Compressor from 'compressorjs';
export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const publishData = computed(() => {
      return store.state.order.AllBuySellData[parseInt(route.query.index as string)];
    });
    const goodTextArea = ref('');
    //上传图片
    const formData = new FormData();
    const fileList = ref<any>([]);
    const upLoadImgs = ref<string[]>([]);
    if (route.query.isWrite === '1') {
      goodTextArea.value = publishData.value.shortDescription;
      const fileLists = publishData.value.imagePath.split('|');
      fileLists.forEach((item: string) => {
        fileList.value.push({ url: item });
      });
      upLoadImgs.value = publishData.value.imagePath.split('|');
    }
    const afterReads = (files: any) => {
      if (!files) {
        return;
      }
      new Compressor(files.file, {
        quality: 0.6,
        async success(result) {
          files.status = 'uploading';
          files.message = '上传中...';
          formData.delete('file');
          formData.append('file', result);
          upLoadImg(formData).then((res) => {
            if (res.code === 1) {
              Toast('上传成功');
              files.status = 'done';
              upLoadImgs.value.push(res.url);
            } else {
              files.status = 'failed';
              files.message = '上传失败';
            }
          });
        }
      });
    };
    //删除图片
    const beforeDelete = (file: any, detail: any) => {
      upLoadImgs.value.splice(detail.index, 1);
      fileList.value.splice(detail.index, 1);
    };
    const imgLoad = () => {
      emitter.emit('imgLoad');
    };
    return {
      goodTextArea,
      upLoadImgs,
      publishData,
      fileList,
      afterReads,
      imgLoad,
      beforeDelete
    };
  }
});
</script>

<style scoped lang="scss">
.publish-goods-text {
  .input-text {
    width: 100%;
    height: 100px;
    border: none;
    resize: none;
    padding: 3px;
    font-size: 13px;
    &::placeholder {
      line-height: 50px;
      text-align: center;
    }
  }
  // .up-load {
  //   .up-load-img {
  //     width: 125px;
  //     height: 125px;
  //     background-color: #f5f5f6;
  //     .up-load-img-icon {
  //       font-size: 30px;
  //       color: #666;
  //       font-weight: 500;
  //       width: 100%;
  //       height: 100%;
  //       text-align: center;
  //       line-height: 125px;
  //     }
  //   }
  // }
}
</style>
