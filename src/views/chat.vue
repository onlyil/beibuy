<template>
  <div class="page-container">
    <div class="header flex-center">
      <span>一号运维</span>
    </div>
    <div class="content">
      <div class="goods">
        <img :src="goodsInfo.pic" alt="" class="pic">
        <div class="right">
          <div class="title">{{goodsInfo.title}}</div>
          <div class="flex-between">
            <p>求带价：{{goodsInfo.price}}</p>
            <div class="btn flex-center" @click="goBuyConfirm"><span>立即抢单</span></div>
          </div>
        </div>
      </div>
      <div class="message-item" v-for="(item, index) in messages" :key="index">
        <template v-if="item.mine">
          <div class="mine">
            <img :src="item.avatar" alt class="avatar" />
            <div class="msg-box">
              <p class="message">{{item.msg}}</p>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="mine not">
            <img :src="item.avatar" alt class="avatar" />
            <div class="msg-box">
              <p class="message">{{item.msg}}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="bottom-bar">
      <input type="text" class="input" v-model="text" />
      <div class="send-btn flex-center" @click="sendMsg">
        <span>发送</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ajax } from "@fe-base/ajax";

export default {
  name: "chat",
  props: ["id"],
  data() {
    return {
      goodsInfo: {},
      text: "",
      messages: [
        {
          mine: true,
          avatar: "//h0.hucdn.com/open201918/0ab49db2491da2c2_180x180.png",
          msg: "你好，明天的飞机飞日本"
        },
        {
          mine: false,
          avatar: "//h0.hucdn.com/open201918/0ab49db2491da2c2_180x180.png",
          msg: "大概几号回来呢"
        }
      ],
    };
  },
  created() {
    this.getGoodsInfo();
  },
  methods: {
    getGoodsInfo() {
      const self = this
      ajax({
        url: `//47.92.121.225:8080/needs/get_one`,
        data: {
          id: this.id
        },
        xhrFields: {
          withCredentials: false
        },
        success(res) {
          if (res.success) {
            self.goodsInfo = res.data[0]
          }
        },
        error: () => {}
      });
    },
    goBuyConfirm() {
      this.$router.push({
        name: 'buyConfirm',
        params: {
          id: this.id,
        },
      })
    },
    sendMsg() {
      if (this.text) {
        this.messages.push({
          mine: true,
          avatar: "//h0.hucdn.com/open201918/0ab49db2491da2c2_180x180.png",
          msg: this.text
        });
        this.text = "";
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../style/common.less";
@b: 46.875rem;

.page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 28 / @b;
}
.header {
  flex: 0 0 100 / @b;
  height: 100 / @b;
  font-size: 32 / @b;
  border-bottom: 1/@b solid #f2f4f6;
}
.content {
  flex: 1;
  background: #eee;
  .goods {
    display: flex;
    padding: 24/@b;
    background: #fff;
    .pic {
      flex: 0 0 100/@b;
      width: 100/@b;
      height: 100/@b;
      margin-right: 20/@b;
    }
    .right {
      flex: 1;
      text-align: left;
      .title {
        font-size: 32/@b;
      }
      .btn {
        width: 160/@b;
        height: 60/@b;
        border-radius: 30/@b;
        color: #fff;
        background: rgb(178, 136, 241);
      }
    }
  }
  .message-item {
    padding: 30 / @b 24 / @b;
  }
  .mine {
    display: flex;
    flex-direction: row-reverse;
    .avatar {
      width: 64 / @b;
      height: 64 / @b;
      flex: 0 0 64 / @b;
    }
    .msg-box {
      flex: 1;
      display: flex;
      flex-direction: row-reverse;
      margin-right: 30 / @b;
      .message {
        max-width: 500 / @b;
        padding: 20 / @b;
        background: rgb(160, 112, 231);
        color: #fff;
        text-align: left;
      }
    }
    &.not {
      flex-direction: row;
      .msg-box {
        flex-direction: row;
        margin-left: 30 / @b;
        .message {
          background: #fff;
          border: 1 / @b solid #ccc;
          color: #333;
        }
      }
    }
  }
}
.bottom-bar {
  flex: 0 0 100 / @b;
  height: 100 / @b;
  padding: 10 / @b;
  display: flex;
  background: #ddd;
  .input {
    flex: 1;
    padding: 0 10 / @b;
    background: #fff;
  }
  .send-btn {
    flex: 0 0 160 / @b;
    width: 100 / @b;
    background: #8032f5;
    color: #fff;
  }
}
</style>
