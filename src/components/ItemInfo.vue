<template>
    <div class="wrap">
        <div class="item">
            <span class="label">求带商品</span>
            <span class="value">SKII护肤精华露</span>
        </div>
        <div class="item">
            <span class="label">求带商品</span>
            <span class="value">SKII护肤精华露</span>
        </div>
        <div class="item">
            <span class="label">求带商品</span>
            <span class="value">SKII护肤精华露</span>
        </div>
        <div class="item">
            <span class="label">求带商品</span>
            <span class="value">SKII护肤精华露</span>
        </div>
    </div>
</template>
<script>
export default {
    props: ['list'],
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
    border-bottom: 1px solid rgba(0,0,0,.2);
}
</style>
