<template>
  <div class="login-page">
    <div class="container">
      <div class="login-form">
        <h2>Регистрация</h2>

        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input type="text" placeholder="ФИО" v-model="fullName" required />
          </div>
          <div class="form-group">
            <input
              type="tel"
              placeholder="Номер телефона"
              v-model="phone"
              pattern="[0-9]{11}"
              title="Введите номер телефона в формате 89991234567"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="date"
              placeholder="Дата рождения"
              v-model="birthDate"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Пароль"
              v-model="password"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Повторите пароль"
              v-model="confirmPassword"
              required
            />
            <span v-if="!passwordsMatch" class="error-message">
              Пароли не совпадают
            </span>
          </div>
          <div class="form-group checkbox">
            <label>
              <input type="checkbox" v-model="agreeToTerms" required />
              <span>Я согласен с условиями использования</span>
            </label>
          </div>
          <button type="submit" class="submit-btn" :disabled="!isFormValid">
            Зарегистрироваться
          </button>
        </form>

        <div class="register-link">
          <span>Уже есть аккаунт?</span>
          <router-link to="/login">Войти</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      fullName: "",
      phone: "",
      birthDate: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    };
  },
  computed: {
    passwordsMatch() {
      return this.password === this.confirmPassword;
    },
    isFormValid() {
      return (
        this.fullName &&
        this.phone &&
        this.birthDate &&
        this.password &&
        this.confirmPassword &&
        this.passwordsMatch &&
        this.agreeToTerms
      );
    },
  },
  methods: {
    handleSubmit() {
      if (this.isFormValid) {
        console.log("Register attempt", {
          fullName: this.fullName,
          phone: this.phone,
          birthDate: this.birthDate,
          password: this.password,
          agreeToTerms: this.agreeToTerms,
        });
      }
    },
  },
};
</script>
