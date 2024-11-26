<template>
  <div class="login-page">
    <div class="container">
      <div class="login-form choice-form">
        <h2>Для создания поездки войдите или зарегистрируйтесь</h2>

        <div class="choice-buttons">
          <button class="choice-btn" @click="$router.push('/login')">
            <div class="choice-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="choice-content">
              <h3>Войти</h3>
              <p>Если у вас уже есть аккаунт</p>
            </div>
          </button>

          <button class="choice-btn" @click="$router.push('/register')">
            <div class="choice-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 8V14M17 11H23"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="choice-content">
              <h3>Зарегистрироваться</h3>
              <p>Создать новый аккаунт</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateTripChoicePage",
};
</script>

<style lang="scss" scoped>
.choice-form {
  max-width: 600px;

  h2 {
    margin-bottom: $spacing-xl * 2;
  }
}

.choice-buttons {
  display: flex;
  flex-direction: column;
  gap: $spacing-lg;
}

.choice-btn {
  display: flex;
  align-items: center;
  gap: $spacing-lg;
  width: 100%;
  padding: $spacing-xl;
  background: $white;
  border: 1px solid #e5e5e5;
  border-radius: $border-radius-md;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-md;
    border-color: $primary-color;

    .choice-icon {
      background: $primary-color;
      color: $white;
    }
  }
}

.choice-icon {
  @include flex-center;
  width: 64px;
  height: 64px;
  background: #f0f7ff;
  border-radius: $border-radius-sm;
  color: $primary-color;
  transition: all 0.3s ease;
}

.choice-content {
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: $text-color;
    margin-bottom: $spacing-xs;
  }

  p {
    color: $text-light;
    font-size: 14px;
    margin: 0;
  }
}

@include responsive(sm) {
  .choice-btn {
    padding: $spacing-lg;
  }

  .choice-icon {
    width: 48px;
    height: 48px;
  }
}
</style>
