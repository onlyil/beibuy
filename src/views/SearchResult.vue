<template>
  <div>
        <search-input :searchText="searchTxt" @search="search" @back="back"></search-input>
        <div
            v-if="list && list.length"
            class="item-list"
        >
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
import SearchInput from '../components/SearchInput.vue';
import QiudaiItem from '../components/QiudaiItem.vue';
import {ajax} from '@fe-base/ajax';
const config = {
    '日本': '1',
    '奥地利': '2',
}
export default {
    name: 'searchResult',
    components: {
        SearchInput,
        QiudaiItem,
    },
    created() {
        this.search(this.searchTxt);

    },
    data() {
        return {
            list: [],
            searchTxt: this.$route.params.search,
        };
    },
    methods: {
        search(value) {
            let that = this;
            this.searchTxt = value;
            let location = config[this.searchTxt] || '1';
            ajax({
                url: `//47.92.121.225:8080/needs/search`,
                data: {
                    location,
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
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
@base: 46.875rem;
.item-list {
    padding-top: 24/@base;
    background-color: #f2f2f2;
}
.item {
    margin-bottom: 24/@base;
}
</style>
