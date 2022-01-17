<template>
  <section class="good-colloct-item">
    <!-- <colloct-item-header /> -->
    <colloct-item-main :colloct="colloctItem" :colloctItemIndex="colloctItemIndex" />
    <!-- <sell-end>卖掉了!</sell-end> -->
  </section>
</template>

<script lang="ts">
// import ColloctItemHeader from './ColloctItemHeader.vue';
import ColloctItemMain from './ColloctItemMain.vue';
// import SellEnd from './SellEnd.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    // ColloctItemHeader,
    ColloctItemMain
    // SellEnd
  },
  props: {
    colloctItem: {
      type: Object,
      default: () => {
        return {};
      }
    },
    colloctItemIndex: {
      type: Number,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.good-colloct-item {
  margin: 20px 10px 10px 10px;
  border-bottom: 1px solid #f2f2f2;
  position: relative;
}
</style>
