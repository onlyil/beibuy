<template>
    <div v-if="item" class="item-wrap" @click="clickBtn">
        <div class="img-wrap">
            <img :src="item.pic" alt="带购图片" class="item-img">
            <img :src="item.icon" alt="" class="country-icon">
        </div>
        <slot>
            <div class="item-info">
                <p class="title">
                    {{ item.title }}
                </p>
                <p class="price-wrap">
                    <span class="price-label">求带价:</span>
                    <span class="price">{{item.price | parseInt}}元</span>
                </p>
                <p class="info-wrap">
                    <span class="label">截止日期: {{item.closing_date|parseDate}}</span>
                </p>
                <div class="button">立即带购</div>
            </div>
        </slot>

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
            return +val;
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
.img-wrap {
    position: relative;
}
.country-icon {
    position: absolute;
    left: 24/@base;
    top: 24/@base;
    width: 64/@base;
    height: 64/@base;
}
.item-img {
    width: 702/@base;
}
.title {
    margin-bottom: 12/@base;
    font-size: 36/@base;
    line-height: 42/@base;
    font-weight: bold;
    text-align: left;
}
.item-info {
    position: relative;
    padding: 24/@base;
}
.price-wrap {
    font-size: 32/@base;
    line-height: 40/@base;
    margin-bottom: 12/@base;
}
.info-wrap {
    margin-bottom: 8/@base;
    font-size: 32/@base;
    line-height: 40/@base;
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
    width: 180/@base;
    line-height: 64/@base;
    background: @mainColor;
    color: #fff;
    border-radius: 6/@base;
    font-size: 28/@base;
}
.address {
    margin-right: 20/@base;
}
</style>
