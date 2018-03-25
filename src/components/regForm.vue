<template>
  <div >
    <el-row >
      <el-col :span="4" >用户名：</el-col>
      <el-col :span="18">
        <input type="text"/>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="4" >密码:</el-col>
      <el-col :span="18">
        <input type="password"/>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="4" >手机:</el-col>
      <el-col :span="18">
        <input type="text"/>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="4" >邮箱:</el-col>
      <el-col :span="18">
        <input type="text"/>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px">
      <el-col :span="4" :offset="5"><button>注册</button></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props:{
    
  },
  data () {
    return {
      
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
