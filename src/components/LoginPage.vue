<template>
  <div class="login-page">
    <div class="container">
      <div class="login-form">
        <h2>Войти</h2>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input
              type="tel"
              placeholder="Номер телефона"
              v-model="phone"
              pattern="[0-9]{11}"
              title="Введите номер телефона в формате 89991234567"
            />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Пароль" v-model="password" />
            <a href="#" class="forgot-password">Забыл пароль</a>
          </div>
          <button type="submit" class="submit-btn">Войти</button>
        </form>

        <div class="register-link">
          <span>Нет аккаунта?</span>
          <router-link to="/register">Зарегистрируйтесь</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("Login attempt", {
        phone: this.phone,
        password: this.password,
      });
    },
  },
};
</script>
