<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-col">
          <div class="footer-logo">
            <a href="#">TravelUs</a>
            <span>Выгодные международные поездки и перевозки</span>
          </div>
          <div class="footer-social">
            <a href="#" class="social-link">
              <img src="@/assets/img/icons/vk.svg" alt="VK" />
            </a>
            <a href="#" class="social-link">
              <img src="@/assets/img/icons/telegram.svg" alt="Telegram" />
            </a>
            <a href="#" class="social-link">
              <img src="@/assets/img/icons/youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>О компании</h4>
          <ul>
            <li v-for="(link, index) in companyLinks" :key="'c' + index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Пассажирам</h4>
          <ul>
            <li v-for="(link, index) in passengerLinks" :key="'p' + index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Водителям</h4>
          <ul>
            <li v-for="(link, index) in driverLinks" :key="'d' + index">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          © {{ currentYear }} TravelUs. Все права защищены
        </div>
        <div class="footer-links">
          <a
            v-for="(link, index) in legalLinks"
            :key="'l' + index"
            :href="link.url"
          >
            {{ link.text }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      companyLinks: [
        { text: "О нас", url: "#" },
        { text: "Контакты", url: "#" },
        { text: "Вакансии", url: "#" },
        { text: "Пресс-центр", url: "#" },
      ],
      passengerLinks: [
        { text: "Найти поездку", url: "#" },
        { text: "Как это работает", url: "#" },
        { text: "Правила поездок", url: "#" },
        { text: "Частые вопросы", url: "#" },
      ],
      driverLinks: [
        { text: "Создать поездку", url: "#" },
        { text: "Условия работы", url: "#" },
        { text: "Страхование", url: "#" },
        { text: "Правила перевозок", url: "#" },
      ],
      legalLinks: [
        { text: "Условия использования", url: "#" },
        { text: "Политика конфиденциальности", url: "#" },
        { text: "Правовая информация", url: "#" },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
