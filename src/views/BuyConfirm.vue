<template>
    <div class="home">
        <div class="title-wrap">
            <div class="back" @click="goBack"></div>
            <p class="page-title">确认带货信息</p>
        </div>
        <qiudai-item :item="item">
            <div class="info">
                <p class="title">{{item.title}}</p>
            </div>
        </qiudai-item>
        <item-info
            class="item-info"
            :item="item"
        ></item-info>
        <div class="bottom-btn-wrap" @click="confirm(item.id)">确认带货</div>
    </div>
</template>

<script>
import QiudaiItem from '../components/QiudaiItem.vue';
import ItemInfo from '../components/ItemInfo.vue';
import {ajax} from '@fe-base/ajax';

export default {
    name: 'buyConfirm',
    components: {
        QiudaiItem,
        ItemInfo,
    },
    data() {
        return {
            item: {},
            id: this.$route.params.id
        };
    },
    created() {
        this.getInfo();
    },
    filters:{
        parsePrice(val) {
            return +val;
        }
    },
    methods:{
        getInfo() {
            let that = this;
            ajax({
                url: `//47.92.121.225:8080/needs/get_one`,
                data: {
                    id: this.id,
                },
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
            if(list && list.length) {
                this.item = list[0];
            }
        },
        confirm(id){
            this.$router.push({
                name: 'buyList',
            });
        },
        goBack() {
            this.$router.go(-1)
        },
    }
}
</script>

<style lang="less" scoped>
@base: 46.875rem;
@mainColor: #8032F5;
.home {
    padding-top: 100/@base;
    height: 1500/@base;
}
.title-wrap {
    position: fixed;
    top: 0;
    left: 0;
    line-height: 88/@base;
    font-size: 40/@base;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,.2);
    .back {
        position: absolute;
        left: 24/@base;
        top: 12/@base;
        width: 64/@base;
        height: 64/@base;
        background: url(http://h0.hucdn.com/open201942/f90c9b99af03f8ee_200x200.png) left center no-repeat;
        background-size: 100% 100%;
    }
}
.info {
    padding: 24/@base;
}
.title {
    font-size: 32/@base;
    text-align: left;
    font-weight: bold;
    line-height: 40/@base;
    height: auto;
    margin-bottom: 24/@base;
}
.price-wrap {
    font-size: 28/@base;
}
.bottom-btn-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 128/@base;
    width: 750/@base;
    line-height: 128/@base;
    font-size: 48/@base;
    color: #fff;
    font-weight: bold;
    background-color: @mainColor;
}
.item-info {
    margin-top: 24/@base;
}
</style>
