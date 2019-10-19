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
        <qiudai-item
            v-for="item in list"
            class="item"
            :key="item.id"
            :item="item"
            @goTarget="goTarget(item.id)"
        ></qiudai-item>
        <qiudai-item></qiudai-item>
        <qiudai-item></qiudai-item>
        <qiudai-item></qiudai-item>
    </div>
  </div>
</template>

<script>
import QiudaiItem from '../../components/QiudaiItem.vue';
import {ajax} from '@fe-base/ajax';

export default {
    name: 'home',
    components: {
        QiudaiItem,
    },
    created() {
        this.getInfo();
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
            list: [],
        };
    },
    methods: {
        changePage(current) {
            console.log('当前轮播图序号为:' + current)
        },
        clickHandler(item, index) {
            console.log(item, index)
        },
        getInfo() {
            console.log('ni');
            let that = this;
            ajax({
                url: `//47.92.121.225:8080/needs/get_all`,
                xhrFields: {
                    withCredentials: false,
                },
                success(res){
                    if(res.success) {
                        that.renderList(res.data);
                    }
                },
                error: () => {
                },
            });
        },
        renderList(list) {
            this.list = list;
        },
        goTarget(id) {
            this.$router.push({
                name: 'askDetail',
                params: {
                    id: id
                }
            });
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
.item {
    margin-bottom: 16/@base;
}
</style>
