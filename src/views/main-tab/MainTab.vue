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
      }, {
        label: '好货',
        icon: 'cubeic-like',
        value: 'goods',
      }, {
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
  methods: {
    changeHandler (val) {
      this.$router.push({
        name: val,
      })
    }
  },
  components: {},
}
</script>

<style lang="less">
.home {
  padding-bottom: 47px;
  background: #f2f2f2;
}
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
