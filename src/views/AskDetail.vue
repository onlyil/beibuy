<template>
  <div>
      <div class="title">
        <div class="back" @click="goBack"></div>
        <h1 class="title">{{item.title}}</h1>
      </div>
    <div class="user-wrap">
        <div class="user-info">
            <img :src="item.avatar" alt="头像" class="user-avatar">
            <span class="user-name">{{item.name}}</span>
        </div>
        <span class="time">{{item.closing_date | parseDate}}</span>
    </div>
    <item-info
        :item="item"
    ></item-info>
    <div class="detail">
        <p class="detail-info">{{item.des}}</p>
        <img :src="item.pic" alt="示例图片" class="detail-img">
    </div>
    <div class="bottom-btn-wrap" @click="goTalk(item.id)">我要带购</div>
  </div>
</template>

<script>
import {ajax} from '@fe-base/ajax';
import ItemInfo from '../components/ItemInfo.vue';
import dayjs from 'dayjs';
export default {
    name: 'askDetail',
    created() {
        if (this.id) {
            this.getInfo();
        } else {
            console.log('error');
        }
    },
    filters: {
        parseDate(val){
            return val ? dayjs(val*1000).format('YYYY-MM-DD'): '';
        },
    },
    components: {
        ItemInfo,
    },
    data() {
        return {
            id: this.$route.params.id,
            item: {},
        };
    },
    methods: {
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
        goTalk(id) {
            this.$router.push({
                name: 'chat',
                params: {
                    id: id
                }
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

.title {
    padding: 12/@base 24/@base;
    padding-left: 40/@base;
    line-height: 64/@base;
    font-size: 40/@base;
    background-color: #fff;
    text-align: left;
    .back {
        position: absolute;
        left: 24/@base;
        top: 20/@base;
        width: 64/@base;
        height: 64/@base;
        background: url(http://h0.hucdn.com/open201942/f90c9b99af03f8ee_200x200.png) left center no-repeat;
        background-size: 100% 100%;
    }
}
.detail {
    // background: #f2f2f2;
}
.detail-info {
    padding: 24px;
    font-size: 40/@base;
    line-height: 60/@base;
    color: #333;
}
.user-wrap {
    padding: 0 24/@base;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 88/@base;
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,.4);
}
.user-avatar {
    margin-right: 12/@base;
    width: 64/@base;
    height: 64/@base;
}
.user-name,
.time {
    line-height: 88/@base;
    font-size: 28/@base;
    color: #333;
}
.user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.detail-info {
    text-align: left;
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
.detail-img {
    width: 702/@base;
    border-radius: 12/@base;
}
</style>
