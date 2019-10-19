<template>
  <div class="page-container">
    <div class="form-item flex-between">
      <div class="label">标题</div>
      <input class="val" type="text" v-model="form.title" placeholder="请输入标题">
    </div>
    <div class="form-item flex-between">
      <div class="label">规格</div>
      <input class="val" type="text" v-model="form.spec" placeholder="请输入规格">
    </div>
    <div class="form-item flex-between">
      <div class="label">购买地</div>
      <input class="val" type="text" v-model="form.location" placeholder="请输入购买地">
    </div>
    <div class="form-item flex-between">
      <div class="label">购入渠道</div>
      <input class="val" type="text" v-model="form.channel" placeholder="请输入购入渠道">
    </div>
    <div class="form-item flex-between">
      <div class="label">是否需要发票</div>
      <cube-switch v-model="form.need_invoice"></cube-switch>
    </div>
    <div class="form-item flex-between">
      <div class="label">求带价格</div>
      <input class="val" type="number" v-model="form.price" placeholder="请输入求带价格">
    </div>
    <div class="form-item flex-between">
      <div class="label">邮费承担</div>
      <cube-switch v-model="form.postage_commitment"></cube-switch>
    </div>
    <div class="form-item flex-between" @click="selectDate">
      <div class="label">截至日期</div>
      <div>{{form.closingDate ? form.closingDate : '请选择'}}</div>
    </div>
    <div class="form-item flex-between">
      <div class="label">描述</div>
      <textarea class="val desc" type="text" v-model="form.des" placeholder="请输入需求描述"></textarea>
    </div>
    <div class="form-item flex-between">
      <div class="label">图片</div>
      <div class="img-content">
        <img :src="item" alt="" v-for="(item, index) in imgs" :key="index" class="img-item">
        <div class="img-upload flex-col-center" @click="addPic">
          <img src="//h0.hucdn.com/open201942/38859119845fec6b_200x200.png" alt="" class="icon-add">
        </div>
      </div>
    </div>

    <div class="submit-btn flex-center" @click="submit">
      <span>提交</span>
    </div>
  </div>
</template>

<script>
import {ajax} from '@fe-base/ajax'

export default {
  name: 'publish',
  data() {
    return {
      form : {
        uid: 2,
        title: '求带海蓝之谜',
        location: '美国',
        spec: 'AL001',
        channel: '专柜',
        need_invoice: false,
        postage_commitment: false,
        closing_date: '',
        closingDate: '',
        price: '100',
        des: '求带海蓝之谜',
        pic: 'http://h0.hucdn.com/open201942/eb3512657c6fd2b7_251x201.jpeg',
      },
      imgs: [
        'http://h0.hucdn.com/open201942/eb3512657c6fd2b7_251x201.jpeg',
      ],
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
        })
      }
      this.datePicker.show()
    },
    selectHandle(date, selectedVal, selectedText) {
      this.form.closingDate = selectedText.join('-')
      this.form.closing_date = Date.parse(date) / 1000
    },
    addPic() {},
    submit() {
      const self= this
      ajax({
        url: `//47.92.121.225:8080/needs/post_need`,
        type: 'POST',
        data: self.form,
        xhrFields: {
          withCredentials: false,
        },
        success(res){
          if(res.success) {
              self.$createToast({
                time: 1500,
                txt: '提交成功',
                onTimeout: () => {
                  self.$router.replace({
                    name: 'askList',
                  })
                },
              }).show()
          }
        },
        error: () => {},
      });
    },
  },
}
</script>

<style lang="less" scoped>
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
      background: #f3f0f0;
    }
    .img-content {
      display: flex;
      width: 600/@b;
      .img-item {
        width: 200/@b;
        height: 200/@b;
        background: #ebe5e5;
        margin-right: 10/@b;
        border: 1/@b solid #eee;
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
  width: 100%;
  height: 80/@b;
  margin-top: 30/@b;
  background: #8032F5;;
  color: #fff;
}
</style>
