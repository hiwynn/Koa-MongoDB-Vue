<template>
  <div class="login container" :style="style">
    <h2>登录</h2>
    <form>
      <div class="form-group row">
        <label for="username" class="col-sm-3 col-form-label" style="text-align: right">用户名</label>
        <div class="col-sm-7">
          <input type="text" class="form-control" id="username" v-model="username" placeholder="请输入用户名">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label" style="text-align: right">密码</label>
        <div class="col-sm-7">
          <input type="password" class="form-control" id="inputPassword" v-model="password"
                 placeholder="请输入密码">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-3"></div>
        <div class="col-sm-7">
          <button class="btn btn-primary btn-block" type="button" @click="login()">登录</button>
        </div>
      </div>
      <div class="form-group row">
        <a @click="goRegister()">还没有账号，快去注册一个吧！</a>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import swal from 'sweetalert2'

  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        style: {
          backgroundImage: "url(" + require("../image/login.jpg") + ")",
        }
      }
    },
    methods: {
      login() {
        if (this.username && this.password) {
          let userInfo = {
            "username": this.username,
            "password": this.password
          };
          const _this = this
          this.$http.get('/api/login/' + this.username + '/' + this.password).then(function (response) {
            console.log(response);
            if (response.data.length) {
              localStorage.setItem('username', JSON.stringify(userInfo));
              _this.$router.push('/');
            } else {
              swal({
                title: '用户名或密码错误？',
                type: 'warning',
                confirmButtonText: 'OK'
              });
            }
          })
        } else {
          swal('用户名和密码都不能为空！')
        }
      },
      goRegister() {
        this.$router.push('/register')
      }
    }
  }
</script>
<style scoped>
  .login {
    width: 410px;
    margin: auto;
    margin-top: 100px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  form {
    width: 80%;
    margin: 30px auto auto;
  }

  input, button {
    outline: none;
  }

  a {
    display: block;
    width: 100%;
    text-decoration: none;
    margin: auto;
    cursor: pointer;
  }
</style>
