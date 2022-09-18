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
          :rules="userFormRules.mobile"
          type="number"
          maxlength="11"
      >
        <i slot="left-icon" class="toutiao toutiao-shouji"/>
      </van-field>
      <van-field
          v-model="user.code"
          name="验证码"
          placeholder="请输入验证码"
          :rules="userFormRules.code"
          type="number"
          maxlength="6"
      >
        <i slot="left-icon" class="toutiao toutiao-yanzhengma"/>
        <template #button>
          <van-button
              class="send-sms-btn"
              round size="small"
              type="default"
              @click="onSendSms"
              native-type="button"
          >发送验证码</van-button>
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
      },
      userFormRules: {
        mobile:[
          {
            required: true,
            message: '手机号码不能为空'
          },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: '手机号码格式不正确'
          }
        ],
        code:[
          {
            required: true,
            message: '验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式不正确'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onSubmit() {
      // 1.获取表单数据
      const user = this.user

      this.$toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁用背景点击
        duration: 0
      })


      try {
        const res = await login(user)
        console.log('登录成功', res)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response.status === 400) {
          console.log('手机号或者验证码错误', err)
          this.$toast.fail('手机号或者验证码错误')
        } else {
          console.log('登录失败，请稍后重试', err)
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    },
    async onSendSms() {

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
