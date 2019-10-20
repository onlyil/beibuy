<template>
  <div class="page-container">
    <div class="title-wrap">
      <div class="back" @click="goBack"></div>
      <p class="page-title">正在求带</p>
    </div>
    <div class="ask-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img :src="item.pic" alt="" class="pic">
        <div class="right">
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          <div class="btn-box flex-between">
            <div class="receiver">{{item.receiver}}</div>
            <div class="status-btn" :class="{enable: item.status == '2'}" @click="btnClick(item)">
              <span>{{item.statusDesc}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ajax} from '@fe-base/ajax'

export default {
  name: 'buyList',
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      const self = this
      ajax({
        url: `//47.92.121.225:8080/needs/get_myneeds`,
        data: {
          uid: 2,
        },
        xhrFields: {
          withCredentials: false,
        },
        success(res){
          if (res.success) {
            res.data.forEach((item) => {
              if (item.status == '0') {
                item.statusDesc = '等待接单'
              } else if (item.status == '1') {
                item.statusDesc = '等待发货'
              } else {
                item.statusDesc = '确认收货'
              }
            })
            self.list = res.data
          }
        },
        error: () => {},
      });
    },
    btnClick(item) {
      if (item.status == '2') {
        console.log('确认收货')
      }
    },
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="less" scoped>
@import "../style/common.less";

.page-container {
  height: 100vh;
  padding-top: 88/@b;
  font-size: 28/@b;
  background: #f2f4f6;
}
.title-wrap {
    position: fixed;
    top: 0;
    left: 0;
    line-height: 88/@b;
    font-size: 40/@b;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,.2);
    .back {
        position: absolute;
        left: 24/@b;
        top: 12/@b;
        width: 64/@b;
        height: 64/@b;
        background: url(http://h0.hucdn.com/open201942/f90c9b99af03f8ee_200x200.png) left center no-repeat;
        background-size: 100% 100%;
    }
}
.ask-list {
  .item {
    display: flex;
    padding: 24/@b;
    background: #fff;
    margin-bottom: 20/@b;
    .pic {
      flex: 0 0 300/@b;
      width: 300/@b;
      height: 200/@b;
      margin-right: 10/@b;
    }
    .right {
      flex: 1;
      text-align: left;
    }
    .price {
      margin-top: 30/@b;
      color: #FF1940;
    }
    .btn-box {
      margin-top: 40/@b;
      .status-btn {
        display: inline-block;
        width: 200/@b;
        height: 60/@b;
        line-height: 60/@b;
        text-align: center;
        background: #bbb;
        color: #fff;
        border-radius: 8/@b;
        &.enable {
          background: #FF1940;
        }
      }
    }
  }
}
</style>
