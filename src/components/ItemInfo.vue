<template>
    <div class="wrap">
        <div class="item">
            <span class="label">求带价</span>
            <span class="value spec">{{item.price | parseInt}}元</span>
        </div>
        <div class="item">
            <span class="label">规格</span>
            <span class="value">{{item.spec}}</span>
        </div>
        <div class="item">
            <span class="label">购买地</span>
            <span class="value">{{item.location}}</span>
        </div>
        <div class="item">
            <span class="label">购入渠道</span>
            <span class="value">{{item.channel}}</span>
        </div>
        <div class="item">
            <span class="label">是否需要发票</span>
            <span class="value">{{item.need_invoice === '0'?'否':'是'}}</span>
        </div>
        <div class="item">
            <span class="label">邮费承担方</span>
            <span class="value">{{item.postage_commitment === '0'?'求带人承担':'带购人承担'}}</span>
        </div>
        <div class="item">
            <span class="label">截止日期</span>
            <span class="value">{{item.closing_date|parseDate}}</span>
        </div>
        <div class="item">
            <span class="label">求带商品</span>
            <span class="value">SKII护肤精华露</span>
        </div>

    </div>
</template>
<script>
import config from '../config';
import dayjs from 'dayjs';

export default {
    props: ['item'],
    filters: {
        parseInt(val){
            return +val;
        },
        parseLocation(val) {
            return config.locationConfig[val];
        },
        parseDate(val){
            return dayjs(val*1000).format('YYYY-MM-DD');
        },
    }
}
</script>
<style lang="less" scoped>
@base: 46.875rem;
.wrap {
    background-color: #fff;
}

.item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    line-height: 88/@base;
    display: flex;
    flex-direction: row;
    padding-left: 32/@base;
    font-size: 32/@base;
    .label {
        color: #666;
    }
    .value {
        padding-right: 24/@base;
        color: #333;
    }
    .spec {
        color: #E31436;
    }
    border-bottom: 1px solid rgba(0,0,0,.2);
}
</style>
