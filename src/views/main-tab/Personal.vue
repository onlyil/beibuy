<template>
  <div class="page-container">
    <div class="banner flex-col-center">
      <img src="//h0.hucdn.com/open201918/0ab49db2491da2c2_180x180.png" alt="" class="avatar">
      <div class="nick">第一运维</div>
      <div class="info">
        <div class="info-item">
          <p>1000</p>
          <p class="label">信誉度</p>
        </div>
        <div class="info-item">
          <p>1000</p>
          <p class="label">赞</p>
        </div>
        <div class="info-item">
          <p>1000</p>
          <p class="label">粉丝</p>
        </div>
      </div>
    </div>
    <div class="section">
      <p class="section-title">我的求带</p>
      <div class="section-list">
        <div class="section-item flex-between" @click="goAskList">
          <div class="label">正在求带</div>
          <img src="http://h0.hucdn.com/open201939/2af3504c1455b4e0_36x36.png" alt="" class="icon-arrow">
        </div>
        <div class="section-item flex-between">
          <div class="label">历史求带</div>
          <img src="http://h0.hucdn.com/open201939/2af3504c1455b4e0_36x36.png" alt="" class="icon-arrow">
        </div>
      </div>
      <p class="section-title">我的带购</p>
      <div class="section-list">
        <div class="section-item flex-between" @click="goBuyList">
          <div class="label">正在带购</div>
          <img src="http://h0.hucdn.com/open201939/2af3504c1455b4e0_36x36.png" alt="" class="icon-arrow">
        </div>
        <div class="section-item flex-between">
          <div class="label">历史带购</div>
          <img src="http://h0.hucdn.com/open201939/2af3504c1455b4e0_36x36.png" alt="" class="icon-arrow">
        </div>
      </div>
      <p class="section-title">购买记录</p>
      <div class="section-list">
        <div class="section-item flex-between">
          <div class="label">我的收藏</div>
          <img src="http://h0.hucdn.com/open201939/2af3504c1455b4e0_36x36.png" alt="" class="icon-arrow">
        </div>
        <div class="section-item flex-between">
          <div class="label">历史购买</div>
          <img src="http://h0.hucdn.com/open201939/2af3504c1455b4e0_36x36.png" alt="" class="icon-arrow">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'personal',
  data() {
    return {}
  },
  methods: {
    goAskList() {
      this.$router.push({
        name: 'askList',
      })
    },
    goBuyList() {
      this.$router.push({
        name: 'buyList',
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import "../../style/common.less";

.page-container {
  height: 100%;
  font-size: 28/@b;
}
.banner {
  width: 100%;
  height: 400/@b;
  // background: url() no-repeat;
  background-image: linear-gradient(90deg, #FF335C 0%, #FF1940 100%);
  background-size: contain;
  color: #fff;
  .avatar {
    width: 120/@b;
    height: 120/@b;
    margin-bottom: 40/@b;
    border-radius: 50%;
  }
  .info {
    display: flex;
    width: 702/@b;
    margin-top: 30/@b;
    .info-item {
      flex: 1;
      .label {
        margin-top: 20/@b;
      }
    }
  }
}
.section {
  .section-title {
    padding: 0 24/@b;
    line-height: 80/@b;
    text-align: left;
  }
  .section-item {
    padding: 0 24/@b;
    height: 100/@b;
    background: #fff;
    .border-bottom-1px();
    .icon-arrow {
      width: 36/@b;
      height: 36/@b;
    }
  }
}
</style>
