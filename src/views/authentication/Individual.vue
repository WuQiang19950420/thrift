<template>
  <article class="company">
    <template v-if="isFlag">
      <h4>填写实名信息</h4>
      <input-text>
        <template v-slot:text>姓名</template>
        <template v-slot:input>
          <input type="text" placeholder="请输入您的姓名" v-model="userData.name" />
        </template>
      </input-text>
      <input-text>
        <template v-slot:text>身份证号</template>
        <template v-slot:input>
          <input type="number" maxlength="18" placeholder="请输入您的身份证号" v-model="userData.idCard" />
        </template>
      </input-text>
      <input-text>
        <template v-slot:text>联系电话</template>
        <template v-slot:input>
          <input type="tel" maxlength="11" placeholder="请输入您的联系电话" v-model="userData.tel" />
        </template>
      </input-text>
    </template>

    <template v-else>
      <h4>上传身份证照片</h4>
      <get-phone>上传正面</get-phone>
      <get-phone>上传反面</get-phone>
    </template>
  </article>
</template>

<script>
import { reactive } from 'vue';
import GetPhone from './common/GetPhone.vue';
import InputText from './common/InputText.vue';
export default {
  components: { InputText, GetPhone },
  name: 'Individual',
  props: {
    isFlag: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const userData = reactive({
      name: '',
      idCard: '',
      tel: ''
    });
    return {
      userData
    };
  }
};
</script>

<style scoped lang="scss">
.company {
  margin-top: 30px;
  width: 95%;
  margin: 0 auto;
  margin-top: 30px;
  h4 {
    font-size: 15px;
    margin: 10px 0;
  }
  input {
    height: 100%;
    width: 100%;
    border: none;
    padding: 0;
  }
}
</style>
