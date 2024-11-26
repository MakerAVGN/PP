<template>
  <section class="benefits">
    <div class="container">
      <div class="benefits-grid">
        <div class="benefits-column passenger">
          <h2>Если вы пассажир</h2>

          <div
            class="benefit-item"
            v-for="(benefit, index) in passengerBenefits"
            :key="'p' + index"
          >
            <div class="benefit-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-html="benefit.icon"
              />
            </div>
            <div class="benefit-content">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>

        <div class="benefits-column driver">
          <h2>Если вы водитель</h2>

          <div
            class="benefit-item"
            v-for="(benefit, index) in driverBenefits"
            :key="'d' + index"
          >
            <div class="benefit-icon">
              <svg
                width="24"
                height="24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-html="benefit.icon"
              />
            </div>
            <div class="benefit-content">
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BenefitsSection",
  data() {
    return {
      passengerBenefits: [
        {
          title: "Легкость путешествия",
          description:
            "Больше никаких пересадок и ожиданий на остановках. Под рукой всегда комфортабельный автомобиль.",
          icon: `<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 12.5L10.5 15.5L16.5 9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
        },
        {
          title: "Безопасность",
          description:
            "Наши рейтинговые системы всегда подскажут вам наилучший выбор для вашего безопасного путешествия.",
          icon: `<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
        },
        {
          title: "Доступность",
          description:
            "Забронируйте машину по самой выгодной цене, на необходимую дату с нужными опциями.",
          icon: `<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
        },
      ],
      driverBenefits: [
        {
          title: "Много попутчиков",
          description:
            "Среди огромной базы наших пассажиров вы точно найдёте попутчиков, которым с вами по пути.",
          icon: `<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
        },
        {
          title: "Экономия",
          description:
            "Вы можете не только разделить ваши расходы на поездку с попутчиками, но и получить дополнительные бонусы.",
          icon: `<path d="M12 1V23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
        },
        {
          title: "Весело",
          description:
            "Вы не успеете заскучать в поездке. Ведь с вами рядом всегда много интересных людей.",
          icon: `<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 9H9.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 9H15.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
        },
      ],
    };
  },
};
</script>
