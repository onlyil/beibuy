<template>
  <div class="page-container">
    <div class="form-item flex-between">
      <div class="label">标题</div>
      <input class="val" type="text" v-model="title" placeholder="请输入标题">
    </div>
    <div class="form-item flex-between">
      <div class="label">规格</div>
      <input class="val" type="text" v-model="title" placeholder="请输入规格">
    </div>
    <div class="form-item flex-between">
      <div class="label">购买地</div>
      <input class="val" type="text" v-model="location" placeholder="请输入购买地">
    </div>
    <div class="form-item flex-between">
      <div class="label">购入渠道</div>
      <input class="val" type="text" v-model="channel" placeholder="请输入购入渠道">
    </div>
    <div class="form-item flex-between">
      <div class="label">是否需要发票</div>
      <cube-switch v-model="need_invoice"></cube-switch>
    </div>
    <div class="form-item flex-between">
      <div class="label">求带价格</div>
      <input class="val" type="number" v-model="price" placeholder="请输入求带价格">
    </div>
    <div class="form-item flex-between">
      <div class="label">邮费承担</div>
      <cube-switch v-model="postage_commitment"></cube-switch>
    </div>
    <div class="form-item flex-between" @click="selectDate">
      <div class="label">截至日期</div>
      <input class="val" type="text" v-model="closing_date" placeholder="截至日期">
      <!-- <div>{{closing_date}}</div> -->
    </div>
    <div class="form-item flex-between">
      <div class="label">描述</div>
      <textarea class="val desc" type="text" v-model="price" placeholder="请输入需求描述"></textarea>
    </div>
    <div class="form-item flex-between">
      <div class="label">图片</div>
      <div class="img-content">
        <div class="img-upload flex-col-center" @click="addPic">
          <img src="//h0.hucdn.com/open201942/38859119845fec6b_200x200.png" alt="" class="icon-add">
        </div>
      </div>
    </div>

    <div class="submit-btn">

    </div>
  </div>
</template>

<script>

export default {
  name: 'publish',
  data() {
    return {
      title: '',
      location: '',
      channel: '',
      need_invoice: false,
      postage_commitment: false,
      closing_date: '',
      price: '',
    }
  },
  methods: {
    selectDate() {
      if (!this.datePicker) {
        this.datePicker = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.datePicker.show()
    },
    addPic() {
      
    },
  },
}
</script>

<style lang="less">
@import "../style/common.less";

.page-container {
  font-size: 28/@b;
  padding: 0 24/@b;
  .form-item {
    padding: 10/@b 0;
    border-bottom: 1/@b solid #eee;
    .label {
      line-height: 80/@b;
    }
    .val {
      text-align: right;
    }
    .desc {
      height: 150/@b;
      width: 600/@b;
      padding: 10/@b;
      font-size: 28/@b;
      text-align: left;
      background: #ebe5e5;
    }
    .img-content {
      width: 600/@b;
      .img-item {
        width: 200/@b;
        height: 200/@b;
        background: #ebe5e5;
      }
      .img-upload {
        width: 200/@b;
        height: 200/@b;
        background: #ebe5e5;
        .icon-add {
          width: 100/@b;
          height: 100/@b;
        }
      }
    }
  }
}
.submit-btn {
  
}

// .form-item >>> .cube-switch .cube-switch-input {
//   width: 48/@b;
//   height: 28/@b;
// }
</style>
