<template>
    <div class="home">
        <search-input :searchText="searchTxt" @search="search"></search-input>
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
        </div>
    </div>
</template>

<script>
import QiudaiItem from '../../components/QiudaiItem.vue';
import {ajax} from '@fe-base/ajax';
import SearchInput from '../../components/SearchInput.vue';

export default {
    name: 'home',
    components: {
        QiudaiItem,
        SearchInput,
    },
    created() {
        this.getInfo();
    },
    data() {
        return {
            items: [
                {
                    url: 'javasrcipt:void()',
                    image: 'http://pic1.ymatou.com/G02/M0A/46/7E/CgzUCl2pyPeAWe_HAAD5pXOUEqY755_375_128_o.jpg'
                },
                {
                    url: 'javasrcipt:void()',
                    image: 'http://pic1.ymatou.com/G02/M0B/49/2F/CgzUC12pxtaAIV-vAAEPAOmqxFg270_375_128_o.jpg'
                },
                {
                    url: 'javasrcipt:void()',
                    image: 'http://pic1.ymatou.com/G02/M04/46/70/CgzUCl2pyGSAIIKKAAECvLLxe5c148_375_128_o.jpg'
                }
            ],
            list: [],
            searchTxt: '',
        };
    },
    methods: {
        changePage(current) {
        },
        clickHandler(item, index) {
        },
        getInfo() {
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
        },
        search(text) {
            this.$router.push({
                name: 'searchResult',
                params: {
                    search: text,
                }
            });
        },
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
