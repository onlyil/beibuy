<template>
  <div class="home">
    <router-view/>

    <!-- <cube-tab-bar
      class="tab"
      v-model="selectedTab"
      :data="tabs"
      @change="changeHandler">
    </cube-tab-bar> -->

    <div class="tab-bar">
      <div class="tab-item flex-col-center"
        v-for="(item, index) in tabs"
        :key="index"
        @click="switchTab(item)">
        <span class="label">{{item.label}}</span>
        <img :src="item.icon" alt="" class="icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainTab',
  data () {
    return {
      selectedTab: 'home',
      tabs: [{
        label: '带购',
        icon: 'http://h0.hucdn.com/open201942/48a4655cd0f09f91_32x32.png',
        value: 'home',
      }, {
        label: '好货',
        icon: 'http://h0.hucdn.com/open201942/48a4655cd0f09f91_32x32.png',
        value: 'goods',
      }, {
        label: '发布',
        icon: 'http://h0.hucdn.com/open201942/48a4655cd0f09f91_32x32.png',
        value: 'publish',
      }, {
        label: '消息',
        icon: 'http://h0.hucdn.com/open201942/48a4655cd0f09f91_32x32.png',
        value: 'message',
      }, {
        label: '我的',
        icon: 'http://h0.hucdn.com/open201942/48a4655cd0f09f91_32x32.png',
        value: 'personal',
      }]
    }
  },
  methods: {
    switchTab(item) {
      if (item.value === this.selectedTab) {
        return
      }
      this.selectedTab = item.value
      this.$router.push({
        name: item.value,
      })
    },
  },
  components: {},
}
</script>

<style lang="less">
@import "../../style/common.less";
@b: 46.875rem;
html,
body {
    height: 100%;
}
.home {
  padding-bottom: 100px;
  background: #f2f2f2;
}
.tab-bar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100/@b;
  font-size: 28/@b;
  border-top: 1px solid #ddd;
  .tab-item {
    flex: 1;
    padding: 10/@b 0;
    .icon {
      width: 56/@b;
      height: 56/@b;
    }
  }
}
</style>
