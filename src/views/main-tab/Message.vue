<template>
  <div class="home">
    <div class="message-list">
      <div class="message-item"
        v-for="(item, index) in MessageList"
        :key="index">
        <img :src="item.avatar" alt="" class="avatar">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      MessageList: [
        {
          avatar: '//h0.hucdn.com/open201918/0ab49db2491da2c2_180x180.png',
          nick: '一号运维',
          message: '一定要专柜么？',
        }
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@b: 46.875rem;

.message-item {
  display: flex;
  padding: 24/@b;
  .avatar {
    width: 64/@b;
    height: 64/@b;
    flex: 0 0 64/@b;
  }
}
</style>
