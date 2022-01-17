<template>
  <div class="next-btn"><slot></slot></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.next-btn {
  height: 40px;
  width: 250px;
  border-radius: 30px;
  margin-top: 15px;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  line-height: 40px;
  color: #fff;
  background-image: linear-gradient(8deg, #84bff7, #2e9aff);
}
</style>
