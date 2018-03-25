<template>
  <div >
    <el-row >
      <el-col :span="3" :offset="1">用户名：</el-col>
      <el-col :span="10">
        <input type="text" v-model="usenameModel"/>
      </el-col>
      <el-col :span="4">
        {{userErrors.text}}
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="3" :offset="1">密码:</el-col>
      <el-col :span="10">
        <input type="password" v-model="passwordModel"/>
      </el-col>
      <el-col :span="4">
        {{passwordErrors.text}}
      </el-col>
    </el-row>
    <el-row style="margin-top:10px">
      <el-col :span="10" :offset="4">{{errorText}}</el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="4" :offset="8"><button @click="logClick">登录</button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usenameModel:"",
      passwordModel:"",
      errorText:""
    }
  },
  computed:{
    userErrors(){
      let text,status
      if(!/@/g.test(this.usenameModel)){
        status=false;
        text="不包含@"
      }else{
        status=true;
        text=""
      }
      if(!this.userFlag){
        text="";
        this.userFlag=true
      }
      return {status,text};
    },
    passwordErrors(){
      let text,status
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false
        text = '密码不是1-6位'
      }else{
        status=true;
        text=""
      }
      if(!this.passFlag){
        text="";
        this.passFlag=true
      }
      return {status,text};
    }
  },
  methods:{
    logClick(){
      if(!this.userErrors.status||!this.passwordErrors.status){
        this.errorText="部分选项未通过"
      }else{
        this.errorText="";
        this.$http.get('api/login')
        .then((res) => {
          let data=res.data.data
          this.$emit("has-log",data)
        })
        
        
      }
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-col input{
  width:260px
}
</style>
