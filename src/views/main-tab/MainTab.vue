<template>
  <div class="home">
    <router-view/>

    <cube-tab-bar
      class="tab"
      v-model="selectedTab"
      :data="tabs"
      @change="changeHandler">
    </cube-tab-bar>
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
        icon: 'cubeic-home',
        value: 'home',
      },
      // {
      //   label: '好货',
      //   icon: 'cubeic-like',
      //   value: 'goods',
      // },
      {
        label: '发布',
        icon: 'cubeic-add',
        value: 'publish',
      }, {
        label: '消息',
        icon: 'cubeic-message',
        value: 'message',
      }, {
        label: '我的',
        icon: 'cubeic-person',
        value: 'personal',
      }]
    }
  },
  created() {
    this.selectedTab = this.$route.name
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
    changeHandler(val) {
      this.$router.push({
        name: val,
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
  min-height: 100%;
  padding-bottom: 100/@b;
  background: #f2f2f2;
}
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100/@b;
  font-size: 30/@b;
  background: #fff;
  border-top: 1/@b solid #f2f2f2;
  i {
    font-size: 40/@b;
  }
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
