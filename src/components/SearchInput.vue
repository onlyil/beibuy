<template>
    <div class="container">
        <div class="back-icon"></div>
        <input v-model="searchText" type="text">
        <div class="search-btn" @click="search">搜索</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchText: 'aa',
        }
    },
    methods: {
        search() {
            this.$emit('search', this.searchText);
        }
    }

}
</script>
<style lang="less" scoped>
@base: 46.875rem;
@mainColor: #8032F5;

.container {
    padding: 0 24/@base;
    height: 128/@base;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.back-icon {
    width: 66/@base;
    height: 66/@base;
    background: url(//h0.hucdn.com/open201942/f90c9b99af03f8ee_200x200.png) left center no-repeat;
    background-size: 100% 100%;
}
input {
    box-sizing: border-box;
    margin-left: 12/@base;
    margin-right: 12/@base;
    padding: 0 24/@base;
    background-color: #f2f2f2;
    width: 500/@base;
    border-radius:33/@base;
    font-size: 24/@base;
    color: #666;
    line-height: 66/@base;
}
.search-btn {
    padding: 0 24/@base;
    color: #fff;
    background-color: @mainColor;
    font-size: 24/@base;
    line-height: 66/@base;
    border-radius: 33/@base;
}
</style>
