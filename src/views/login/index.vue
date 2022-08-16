<template>
  <div class="login-container">
    <!--导航栏-->
    <van-nav-bar title="登录" class="page-nav-bar"/>

    <!--登录表单-->
    <van-form @submit="onSubmit">
      <van-field
          v-model="user.mobile"
          name="手机号"
          placeholder="请输入手机号"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"/>
      </van-field>
      <van-field
          v-model="user.code"
          name="验证码"
          placeholder="请输入验证码"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"/>
        <template #button>
          <van-button class="send-sms-btn" round size="small" type="default">发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button class="login-btn" block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>

  </div>

</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onSubmit() {
      const user = this.user

      try {
        const res = await login(user)
        console.log('登录成功', res)
      } catch (err) {
        console.log('登录失败', err)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .toutiao {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }

</style>
