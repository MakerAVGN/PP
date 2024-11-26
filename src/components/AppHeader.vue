<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <router-link to="/">TravelUs</router-link>
        <span
          >Выгодные международные <br />
          поездки и перевозки</span
        >
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/routes" class="find-trip">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 16C13.0599 16 16 13.0599 16 9C16 4.94005 13.0599 2 9 2C4.94005 2 2 4.94005 2 9C2 13.0599 4.94005 16 9 16Z"
                  stroke="#65B23A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 18L14 14"
                  stroke="#65B23A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Найти поездку
            </router-link>
          </li>
          <li>
            <router-link to="/create-trip" class="create-trip">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4V16M4 10H16"
                  stroke="#064ea0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Создать поездку
            </router-link>
          </li>
          <li>
            <router-link to="/login" class="auth">Войти</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
