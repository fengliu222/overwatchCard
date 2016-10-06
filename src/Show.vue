<template>
  <div>
  <div class="page__hd">
        <h1 class="page__title">守望先锋约车名片</h1>
        <p class="page__desc">快加好友去吧！</p>
    </div>
   <div class="weui-form-preview">
            <div class="weui-form-preview__hd">
                <label class="weui-form-preview__label">战网号</label>
                <em class="weui-form-preview__value">{{card.battle_id}}</em>
            </div>
            <div class="weui-form-preview__bd">
                <p>
                    <label class="weui-form-preview__label">擅长英雄</label>
                    <span class="weui-form-preview__value">{{card.heros}}</span>
                </p>
                <p v-if="card.summary">
                    <label class="weui-form-preview__label">简介</label>
                    <span class="weui-form-preview__value">{{card.summary}}</span>
                </p>
            </div>
            <div class="weui-form-preview__ft">
                <router-link to="/create" class="weui-form-preview__btn weui-form-preview__btn_primary" href="javascript:">我也想创建「守望约车名片」</router-link>
            </div>
        </div>
  </div>
</template>

<script>
import AV from 'leancloud-storage'
export default {
  beforeRouteEnter (to, from, next) {
    let query = new AV.Query('overwatch')
    if(!to.query.id){
      next('/create')
      return 
    }
    query.get(to.query.id).then((data)=>{
      if(data){
        next(vm => {
          vm.card = {
            battle_id : data.get('battle_id'),
            summary : data.get('summary'),
            heros : data.get('heros')
          }
        })
      }else{
        next('/create')
      }
    }, ()=>{
      next('/create')
    })
  },
  data () {
    return {
      card:{}
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  background: #f8f8f8;
}
.page__hd{
  padding: 40px;
}
.page__title {
    text-align: left;
    font-size: 20px;
    font-weight: 400;
}
.page__desc {
    margin-top: 5px;
    color: #888;
    text-align: left;
    font-size: 14px;
}
</style>
