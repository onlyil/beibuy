<template>
  <div class="page-container">
    <div class="title-wrap">
      <div class="back" @click="goBack"></div>
      <p class="page-title">正在带购</p>
    </div>
    <div class="ask-list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <img :src="item.pic" alt="" class="pic">
        <div class="right">
          <p class="title">{{item.title}}</p>
          <p class="price">￥{{item.price}}</p>
          <div class="btn-box flex-between">
            <div class="receiver">{{item.user.name}}</div>
            <div class="status-btn" :class="{enable: item.status == '1'}" @click="send(item)">
              <span>{{item.stausDesc}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog" v-show="showDialog">
      <div class="content">
        <p class="title">发货</p>
        <div class="form-item flex-between">
          <span>是否需要邮寄</span><cube-switch v-model="post"></cube-switch>
        </div>
        <div class="form-item flex-between">
          <span>快递单号</span><cube-input v-model="number"></cube-input>
        </div>
        <div class="btns flex-between">
          <div class="btn confirm-btn flex-center" @click="confirm"><span>确认</span></div>
          <div class="btn cancel-btn flex-center" @click="showDialog = false"><span>取消</span></div>
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
      showDialog: false,
      post: false,
      number: '',
      nowItem: {},
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      const self = this
      ajax({
        url: `//47.92.121.225:8080/seller/get_my_order`,
        data: {
          uid: 2,
        },
        xhrFields: {
          withCredentials: false,
        },
        success(res){
          if (res.success) {
            res.data.forEach((item) => {
              if (item.status == '1') {
                item.stausDesc = '我要发货'
              } else {
                item.stausDesc = '等待确认收获'
              }
            })
            self.list = res.data
          }
        },
        error: () => {},
      });
    },
    send(item) {
      if (item.status == '2') {
        return
      }
      this.showDialog = true
      this.nowItem = item
        if(item.status === '1') {
            this.showDialog = true
            this.nowItem = item
        }
    },
    confirm() {
      const self = this
      ajax({
        url: `//47.92.121.225:8080/seller/update_order_status`,
        data: {
          id: this.nowItem.id,
          status: '2',
        },
        xhrFields: {
          withCredentials: false,
        },
        success(res){
          if (res.success) {
            self.showDialog = false
            self.getList()
          }
        },
        error: () => {},
      });
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
  padding-top: 88/@b;
  height: 100vh;
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
      color: #ff1940;
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
          background: #8032F5;
        }
      }
    }
  }
}
.dialog {
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600/@b;
    height: 400/@b;
    padding: 24/@b;
    transform: translate(-50%, -50%);
    background: #fff;
    .title {
      margin-bottom: 20/@b;
    }
    .form-item {
      margin-bottom: 20/@b;
    }
    .btns {
      margin-top: 40/@b;
      padding: 0 30/@b;
      .btn {
        width: 200/@b;
        height: 60/@b;
        border-radius: 8/@b;
        color: #fff;
        &.confirm-btn {
          background: #8032F5;
        }
        &.cancel-btn {
          background: #bbb;
        }
      }
    }
  }
}
</style>
