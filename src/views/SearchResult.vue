<template>
  <div>
        <search-input @search="search"></search-input>
        <div class="item-list">
            <qiudai-item class="item"></qiudai-item>
            <qiudai-item class="item"></qiudai-item>
            <qiudai-item class="item"></qiudai-item>
            <qiudai-item class="item"></qiudai-item>
            <qiudai-item class="item"></qiudai-item>
        </div>
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput.vue';
import QiudaiItem from '../components/QiudaiItem.vue';
import {ajax} from '@fe-base/ajax';
export default {
  name: 'searchResult',
  components: {
      SearchInput,
      QiudaiItem,
  },
  data() {
    return {};
  },
  methods: {
      search(value) {
          console.log(value);
          ajax({
                url: `//47.92.121.225:8080/needs/search`,
                data: {
                    location: '1',
                },
                xhrFields: {
                    withCredentials: false,
                },
                success(res){
                    console.log(res);
                },
                error: () => {
                },
          });
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
