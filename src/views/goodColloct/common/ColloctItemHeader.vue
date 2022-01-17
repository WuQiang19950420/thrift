<template>
  <header class="detail-header">
    <div class="user-left">
      <div class="user-img">
        <img src="~assets/image/home/mouse.png" />
      </div>
      <div class="user-name">
        <h4>测试姓名</h4>
        <span>上海市 奉贤区</span>
      </div>
    </div>
    <!-- <div class="user-right">
      <span class="time">8小时前来过</span>
    </div> -->
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.detail-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  .user-left {
    display: flex;
    align-items: center;
    .user-img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .user-name {
      margin-left: 10px;
      h4 {
        font-size: 13px;
        margin: 0;
        margin-bottom: 5px;
      }
      span {
        font-size: 11px;
        color: #666;
      }
    }
  }
  .user-right {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    .time {
      font-size: 11px;
      color: #666;
    }
  }
}
</style>
