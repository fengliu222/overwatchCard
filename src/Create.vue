<template>
<div>
  <div class="page__hd">
        <h1 class="page__title">创建守望先锋约车名片</h1>
        <p class="page__desc">详实的描述会让更多人愿意成为您的车友</p>
    </div>
  <div class="weui-cells__title">
    基本资料
  </div>
  <div class="weui-cells weui-cells_form">
    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label for="" class="weui-label">战网号</label>
      </div>

      <div class="weui-cell__bd">
        <input class="weui-input" type="text" placeholder="战网号（例如 黄旭东#23333)" v-model="card.battle_id">
      </div>
    </div>

    <div class="weui-cell">
      <div class="weui-cell__hd">
        <label for="" class="weui-label">擅长英雄</label>
      </div>

      <div class="weui-cell__bd">
        <input class="weui-input" type="text" placeholder="例如 76、孤寡老锤" v-model="card.heros">
      </div>
    </div>
  </div>
  <div class="weui-cells__title">
    简介(选填)
  </div>
  <div class="weui-cells weui-cells_form">
    <div class="weui-cell">
      <div class="weui-cell__bd">
        <textarea class="weui-textarea" placeholder="此处可以填写些介绍自己的文字，方便别人更加了解你。" rows="3" v-model="card.summary"></textarea>
      </div>
    </div>
  </div>

  <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips" v-on:click="submit">就这么多，发布。</a>
        </div>
  
</div>
 
</template>

<script>
import {client} from './storage'
import AV from 'leancloud-storage'

export default {
  data () {
    return {
      card: {
        battle_id: '',
        heros: '',
        summary: ''
      }
    }
  },

  methods: {
    validate: function(){
      if(!this.card.battle_id){
        alert('请填写战网账号')
        return false
      }

      if(!this.card.heros){
        alert('请填写擅长英雄')
        return false
      }

      return true
    },
    submit: function() {
      if(this.validate()){
        let cardObject = AV.Object.extend('overwatch')
        let careItem = new cardObject(this.card)
        careItem.save().then((object)=>{
          this.$router.push({ path: '/', query: { id: object.id}})
        })
      } 
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  background: #f8f8f8
}
</style>
