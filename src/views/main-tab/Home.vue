<template>
  <div class="home">
    <cube-slide class="slider" ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
            <img :src="item.image">
        </a>
      </cube-slide-item>
    </cube-slide>
    <div class="qiudai-item-list">
        <qiudai-item></qiudai-item>
        <qiudai-item></qiudai-item>
        <qiudai-item></qiudai-item>
        <qiudai-item></qiudai-item>
    </div>
  </div>
</template>

<script>
import QiudaiItem from '../../components/QiudaiItem.vue';
export default {
  name: 'home',
  components: {
    QiudaiItem,
  },
  data() {
    return {
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: 'http://h0.hucdn.com/open201942/1b604aee24eaf622_794x408.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: 'http://h0.hucdn.com/open201942/1b604aee24eaf622_794x408.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: 'http://h0.hucdn.com/open201942/1b604aee24eaf622_794x408.png'
        }
      ],
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="less" scoped>
@base: 46.875rem;
.cube-slide-item>a, .cube-slide-item>a>img {
  width: 100%;
  height: auto;
}
.slider {
  margin-bottom: 24/@base;
}
</style>
