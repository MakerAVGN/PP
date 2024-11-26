<template>
  <main>
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <h1>Выгодные международные поездки для Пассажиров и Водителей</h1>
        <SearchBlock />
        <div class="main-board_footer-content">
          <button class="create-trip main-create-trip">
            + Создать поездку
          </button>
          <div class="payment-info">
            <span>
              <b>БЕЗОПАСНАЯ ОПЛАТА</b> <br />
              доступна при оплате по безналичному расчету
            </span>
          </div>
        </div>
      </div>
    </section>
    <BenefitsSection />
  </main>
</template>

<script>
import SearchBlock from "@/components/SearchBlock.vue";
import BenefitsSection from "@/components/BenefitsSection.vue";

export default {
  name: "HomePage",
  components: {
    SearchBlock,
    BenefitsSection,
  },
};
</script>
