<template>
  <div class="page-container">
    <div class="header flex-between">
      <p>消息</p>
      <p>
        <i class="cubeic-search"></i>
      </p>
    </div>
    <div class="message-list">
      <div class="message-item"
        v-for="(item, index) in messageList"
        :key="index"
        @click="goChat">
        <img :src="item.avatar" alt="" class="avatar">
        <div class="right">
          <p class="nick">{{item.nick}}</p>
          <p class="msg">{{item.message}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      messageList: [
        {
          avatar: '//h0.hucdn.com/open201918/0ab49db2491da2c2_180x180.png',
          nick: '一号运维',
          message: '一定要专柜么？',
        },
        {
          avatar: '//h0.hucdn.com/open201918/0ab49db2491da2c2_180x180.png',
          nick: '强生用户版',
          message: '我在飞机上了',
        },
        {
          avatar: '//h0.hucdn.com/open201918/0ab49db2491da2c2_180x180.png',
          nick: '一号运维',
          message: '一定要专柜么？',
        },
      ],
    }
  },
  methods: {
    goChat() {
      this.$router.push({
        name: 'chat',
        params: {
          id: 3,
        },
      })
    },
  },
}
</script>

<style lang="less" scoped>
@b: 46.875rem;

.page-container {
  height: 100%;
  background: #fff;
  font-size: 28/@b;
}
.header {
  height: 100/@b;
  padding: 0 24/@b;
  font-size: 40/@b;
  background: #eee;
  i {
    font-size: 50/@b;
  }
}
.message-item {
  display: flex;
  padding: 24/@b;
  border-bottom: 1/@b solid #eee;
  .avatar {
    width: 64/@b;
    height: 64/@b;
    flex: 0 0 64/@b;
    margin-right: 20/@b;
  }
  .right {
    flex: 1;
    text-align: left;
  }
  .msg {
    margin-top: 20/@b;
    font-size: 24/@b;
    color: #666;
  }
}
</style>
