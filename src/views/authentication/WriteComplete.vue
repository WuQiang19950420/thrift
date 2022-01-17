<template>
  <article class="complete">
    <img src="~assets/image/authentication/happy.png" />
    <span>提交完成,待平台审核</span>
  </article>
</template>

<script>
export default {
  name: 'WriteComplete'
};
</script>

<style lang="scss" scoped>
.complete {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  img {
    width: 64px;
    height: 64px;
    margin-bottom: 30px;
  }
}
</style>
