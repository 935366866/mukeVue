<template>
 <div>
    <this-dialog :is-show="isShowCheckDialog" @click-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" >
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog">
      购买失败！
    </this-dialog>
  </div>
</template>

<script>
import Dialog from './dialog'

export default {
 components:{
   ThisDialog:Dialog
 },
 props:{
   isShowCheckDialog:{
     type:Boolean,
     default:false
   },
   orderId:{
     type:[Number,String]
   }
 },
  data () {
    return {
      isShowSuccessDialog:false,
      isShowFailDialog:false
    }
  },
  methods: {
    checkStatus(){
       this.$http.get('/api/checkOrder', {
        orderId: this.orderId
      })
      .then((res) => {
        this.isShowSuccessDialog = true
        this.$emit('on-close-check-dialog')
      }, (err) => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
