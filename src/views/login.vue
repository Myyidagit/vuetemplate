<template>
  <div class="hello">
    <!-- <div class="logo"></div> -->
    <el-row class="login_bg">
      <el-row class="login-container">
        <div class="container_left">
          <img class="no-select car_bg" src="../assets/image/logincar.png" alt>
        </div>
        <div style="width:2px;height:174px;background:#4D7CFE;float:left;margin-top:123px;"></div>
        <div class="container_right">
          <el-col class="title">
            <div class="title_header no-select">
              <!-- 风行科技 暂时在这里写死 -->
              <h3>*******平台</h3>
              <!-- <h3>开易车辆管理云平台</h3> -->
              <p>这里是介绍</p>
            </div>
          </el-col>
          <el-col class="login_form">
            <el-form :model="login_form" :rules="rules" ref="verify">
              <el-form-item prop="account" style="position: relative;">
                <el-input v-model="login_form.account" placeholder="请输入登录账号"></el-input>
                <img src="../assets/image/accounta.png" alt="" style="position: absolute;left:10px;top:8px">
              </el-form-item>
              <el-form-item prop="password" style="margin-top:24px;position: relative;">
                <el-input v-model="login_form.password" type="password" placeholder="请输入登录密码" @keyup.enter.native="submit_login"></el-input>
                <img src="../assets/image/password.png" alt="" style="position: absolute;left:10px;top:8px">
              </el-form-item>
              <el-form-item style="margin-top:24px;position: relative;" prop="verificationCode">
                <div class="identify_code">
                  <el-input v-model="login_form.verificationCode" style="width:136px;float:left" maxlength="4" @keyup.enter.native="submit_login"></el-input>
                  <div class="code" style="float:left;margin-left:30px;cursor: pointer;margin-top:1px;" @click="refreshCode">
                    <identify :identifyCode="identifyCode"></identify>
                  </div>
                </div>
              </el-form-item>
              <el-checkbox v-model="checked" checked>记住密码</el-checkbox>
              <el-form-item style="text-align: center;">
                <el-button class="submit_login" type="primary" size="medium" @click="submit_login">登录</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </div>

      </el-row>
      
    </el-row>

  </div>
</template>

<script>
import Base64 from "../assets/js/base.js";
import identify from "../components/identify.vue";

export default {
  name: "HelloWorld",
  data() {
    let identifyCodeCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        if (this.login_form.verificationCode != this.identifyCode) {
          callback(new Error('验证码错误'));
        }else{
          callback();
        }
      }
    };
    return {
      checked: true,
      login_form: {
        account: "",
        password: "",
        verificationCode: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }], // blur
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 25,
            message: "密码长度在 6 到 20 个字符",
            trigger: "blur"
          }
        ],
        verificationCode:[
          { validator: identifyCodeCheck, trigger: 'blur' }
        ]
      },
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  components: { identify },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      //   console.log(this.identifyCode);
    },
    open(msg) {
      this.$alert(msg, "系统提示", {
        confirmButtonText: "确定"
      });
    },
    //对字符串进行加密
    compileStr(code) {
      var base = new Base64();
      var encodeStr = base.encode(code);
      return encodeStr;
    },
    //字符串进行解密
    uncompileStr(code) {
      var base = new Base64();
      var decodeStr = base.decode(code);
      return decodeStr;
    },
    // 判断是否需要记住账户密码，如果选择记住，则存储账户密码，否则清除以往的账户密码
    rememberPassword() {
      if (this.checked) {
        // 记住密码
        localStorage.setItem(
          "account",
          this.compileStr(this.login_form.account)
        );
        localStorage.setItem(
          "password",
          this.compileStr(this.login_form.password)
        );
      } else {
        // 不记住密码
        localStorage.removeItem("account");
        localStorage.removeItem("password");
      }
    },
    // 提交登录数据
    async submit_login() {
      this.$refs.verify.validate((val)=>{
        if(val){
          this.rememberPassword();

          this.$router.push({
            name:'HomePage'
          })
        }else{
          return false;
        }
      })
    }
  },
  created() {
    if (window.localStorage.account) {
      this.login_form.account = this.uncompileStr(window.localStorage.account);
      this.login_form.password = this.uncompileStr(
        window.localStorage.password
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
// @import "../style/mixin.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.hello ::v-deep {
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/logologin.png");
  background-repeat: no-repeat;
  background-size: cover;
  .login_bg {
    width: 100%;
    height: 100%;
    position: relative;
    .login-container {
      width: 800px;
      height: 420px;
      background: rgba(255, 255, 255, 1);
      border-radius: 16px;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      box-shadow: 0px 0px 47px 2px rgb(57, 71, 99);
      .container_left {
        width: 400px;
        float: left;
        position: relative;

        .car_bg {
          margin-top: 123px;
          margin-left: 48px;
        }
      }
      .container_right {
        width: 278px;
        float: left;
        padding: 0px 60px;
        // margin-left:60px;
        .title {
          // margin-bottom: 24px;
          .title_header {
            margin-top: 24px;
            h3 {
              width: 290px;
              height: 34px;
              font-size: 32px;
              font-family: MicrosoftYaHei-Bold;
              font-weight: bold;
              color: rgba(51, 51, 51, 1);
            }
            p {
              width: 198px;
              height: 18px;
              font-size: 18px;
              font-family: MicrosoftYaHei;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              margin-top: 10px;
            }
          }
        }
        .login_form {
          margin-top: 24px;
          .submit_login {
            width: 220px;
            height: 40px;
            margin-top: 30px;
          }
          .el-input__inner{
            padding-left: 50px;
          }
          .el-form-item__content{
            line-height: 0;
          }
        }
      }
    }
  }

  .no-select {
    user-select: none;
    cursor: default;
  }
}
</style>
