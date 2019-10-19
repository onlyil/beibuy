<template>
    <div class="item-wrap" @click="clickBtn">
        <img :src="item.pic" alt="带购图片" class="item-img">
        <div class="item-info">
            <p class="title">{{ item.title }}</p>
            <p class="price-wrap">
                <span class="price-label">求带价:</span>
                <span class="price">{{item.price | parseInt}}元</span>
            </p>
            <p class="info-wrap">
                <span class="label address">购入地: {{item.location | parseLocation}}</span>
                <span class="label">截止日期: {{item.closing_date|parseDate}}</span>
            </p>
            <div class="button">立即带购</div>
        </div>
    </div>
</template>
<script>
import dayjs from 'dayjs';
const config = {
    '1': '日本',
    '2': '奥地利',
}
export default {
    name: 'QiudaiItem',
    props: ['item'],
    filters: {
        parseLocation(val) {
            return config[val];
        },
        parseInt(val){
            console.log(val);
            return +val / 100;
        },
        parseDate(val){
            return dayjs(val*1000).format('YYYY-MM-DD');
        },

    },
    methods:{
        clickBtn() {
            this.$emit('goTarget');
        }
    }

}
</script>
<style lang="less" scoped>
@base: 46.875rem;
@mainColor: #8032F5;
p {
    text-align: left;
    font-size: 0;
}
.item-wrap {
    margin: 0 auto;
    width: 702/@base;
    background: #fff;
    border-radius: 12/@base;
}
.item-img {
    width: 702/@base;
}
.title {
    margin-bottom: 12/@base;
    font-size: 28/@base;
    line-height: 32/@base;
    height: 64/@base;
    font-weight: bold;
    text-align: left;
}
.item-info {
    position: relative;
    padding: 24/@base;
}
.price-wrap,
.info-wrap {
    margin-bottom: 8/@base;
    font-size: 24/@base;
}
.price-label,
.label {
    color: #666;
}
.price {
    color: #E31436;
}
.button {
    position: absolute;
    bottom: 24/@base;
    right: 24/@base;
    width: 152/@base;
    line-height: 48/@base;
    background: @mainColor;
    color: #fff;
    border-radius: 6/@base;
    font-size: 24/@base;
}
.address {
    margin-right: 20/@base;
}
</style>
