<template>
  <div class="hello">
    <div class="login">
      <div class="logo">

      </div>
      <v-form direction="horizontal" :model="customForm" :rules="customRules" ref="customRuleForm">
        <v-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol" prop="user" has-feedback>
          <v-input type="input" size="large" v-model="customForm.user"></v-input>
        </v-form-item>
        <v-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol" prop="pass" has-feedback>
          <v-input type="password" size="large" v-model="customForm.pass"></v-input>
        </v-form-item>
        <v-form-item :wrapper-col="{offset:6, span: 14 }">
          <v-button type="primary" style="margin-right:10px" @click.prevent="submitForm('customRuleForm')">提交</v-button>
          <v-button type="ghost" @click.prevent="resetForm('customRuleForm')">重置</v-button>
        </v-form-item>
      </v-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else{
          callback()}
      };

      let validateUser = (rule, value, callback) =>{
        if (value === '') {
          callback(new Error('请输入用户名'));
        }else{
          callback()
        }
      };

      return {
        customForm: {
          user:'',
          pass: ''
        },
        customRules: {
          user:[{
            required: true,
            message: '请输入用户名'
          },
            {
              validator: validateUser
            }
            ],
          pass: [{
            required: true,
            message: '请输入密码'
          },
            {
              validator: validatePass
            }
          ]
        },
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 14
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
//            alert('submit!');
            this.$router.push('home')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width: 100%;
    height: 100vh;
    background-color: cornflowerblue;
    display: flex;
    justify-content: center;
    align-items:center;
  }
  .logo{
    height: 100px;
    background-color: coral;
    margin-bottom: 20px;
    border-radius: 5px 5px 0 0;
  }
  .login{
    width: 350px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
  }
</style>
