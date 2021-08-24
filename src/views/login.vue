<template>
  <div>
    <span>姓名：</span><el-input v-model="userName" placeholder="请输入姓名"></el-input>
    <span>密码：</span><el-input v-model="password" placeholder="请输入密码"></el-input>
    <el-button @click="toHome">登陆</el-button>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, ref } from 'vue'
//引入的useRoute,useRouter 相当于vue2的 this.$route()，this.$router()
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default defineComponent ({
  setup(props, context) {
    const {appContext}  = getCurrentInstance()
    const $http = appContext.config.globalProperties.$http
    const router = useRouter()
    const userName = ref('')
    const password = ref('')
    const toHome = () => {
      if(!userName.value){
        ElMessage.error('请输入姓名');
        return
      }
      if(!password.value){
        ElMessage.error('请输入密码');
        return
      }
      $http.post('/user/login',{
        userName: userName.value,
        password: password.value
      }).then(res => {
        if(res.code === 0){
          router.push('home')
        }
        else{
          ElMessage.error(res.msg);
        }
      })
    }

    return {
      userName,
      password,
      toHome
    }
  }
})
// export default {
//   setup () {
//     const router = useRouter()
//     const toHome = (() => {

//       router.push({
//         name: 'home'
//       })
//     })
//     return {
//       toHome
//     }
//   },
// }
</script>