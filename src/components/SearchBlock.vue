<template>
  <div class="search-block">
    <div class="search-tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: activeTab === index }]"
        @click="activeTab = index"
      >
        <v-icon :name="tab.icon" />
        <span>{{ tab.name }}</span>
      </button>
    </div>

    <div class="search-container">
      <div class="search-inputs">
        <div class="input-wrapper">
          <input
            type="text"
            placeholder="Город отправления"
            v-model="fromCity"
          />
        </div>
        <div class="input-divider"></div>
        <button class="swap-button" @click="swapCities">
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="32" height="32" rx="16" fill="white"></rect>
            <path
              d="M11.5586 23.0592C12.0782 23.5788 12.9205 23.5788 13.4401 23.0592V23.0592C13.9538 22.5455 13.9604 21.7146 13.4549 21.1928L12.2993 20H16.4994C17.2357 20 17.8327 19.403 17.8327 18.6666V18.6666C17.8327 17.9302 17.2357 17.3333 16.4993 17.3333H12.2993L13.4549 16.1405C13.9604 15.6186 13.9538 14.7878 13.4401 14.274V14.274C12.9205 13.7545 12.0782 13.7545 11.5586 14.274L7.87312 17.9595C7.4826 18.35 7.4826 18.9832 7.87312 19.3737L11.5586 23.0592ZM19.5586 17.7259C20.0782 18.2454 20.9205 18.2454 21.4401 17.7259L25.1256 14.0404C25.5161 13.6499 25.5161 13.0167 25.1256 12.6262L21.4401 8.9407C20.9205 8.42114 20.0782 8.42114 19.5586 8.9407V8.9407C19.0449 9.45444 19.0383 10.2853 19.5438 10.8071L20.6993 12H16.4993C15.763 12 15.166 12.5969 15.166 13.3333V13.3333C15.166 14.0697 15.763 14.6666 16.4993 14.6666H20.6993L19.5438 15.8595C19.0383 16.3813 19.0449 17.2122 19.5586 17.7259V17.7259ZM16.4993 29.3333C14.6549 29.3333 12.9216 28.9831 11.2993 28.2826C9.67713 27.5831 8.26602 26.6333 7.06602 25.4333C5.86602 24.2333 4.91624 22.8222 4.21668 21.2C3.51624 19.5777 3.16602 17.8444 3.16602 16C3.16602 14.1555 3.51624 12.4222 4.21668 10.8C4.91624 9.17774 5.86602 7.76663 7.06602 6.56663C8.26602 5.36663 9.67713 4.4164 11.2993 3.71596C12.9216 3.0164 14.6549 2.66663 16.4993 2.66663C18.3438 2.66663 20.0771 3.0164 21.6993 3.71596C23.3216 4.4164 24.7327 5.36663 25.9327 6.56663C27.1327 7.76663 28.0825 9.17774 28.782 10.8C29.4825 12.4222 29.8327 14.1555 29.8327 16C29.8327 17.8444 29.4825 19.5777 28.782 21.2C28.0825 22.8222 27.1327 24.2333 25.9327 25.4333C24.7327 26.6333 23.3216 27.5831 21.6993 28.2826C20.0771 28.9831 18.3438 29.3333 16.4993 29.3333Z"
              fill="#5348a8"
            ></path>
          </svg>
        </button>
        <div class="input-divider"></div>
        <div class="input-wrapper">
          <input type="text" placeholder="Город прибытия" v-model="toCity" />
        </div>
        <div class="input-divider"></div>
        <div class="input-wrapper date-wrapper">
          <input type="date" v-model="date" :min="currentDate" />
        </div>
      </div>
      <button class="find-button" @click="search">Найти</button>
    </div>
  </div>
</template>

<script>
import {
  IoCarSportSharp,
  IoCard,
  FaBus,
  MdTrain,
  BiBoxSeam,
} from "oh-vue-icons/icons";
import { addIcons } from "oh-vue-icons";

addIcons(IoCarSportSharp, IoCard, FaBus, MdTrain, BiBoxSeam);

export default {
  name: "SearchBlock",
  data() {
    return {
      activeTab: 0,
      fromCity: "",
      toCity: "",
      date: "",
      tabs: [
        {
          name: "Попутчики",
          icon: "io-car-sport-sharp",
        },
        {
          name: "Аренда и трансфер",
          icon: "io-card",
        },
        {
          name: "Автобусы",
          icon: "fa-bus",
        },
        {
          name: "Ж/Д билеты",
          icon: "md-train",
        },
        {
          name: "Доставка грузов",
          icon: "bi-box-seam",
        },
      ],
    };
  },
  computed: {
    currentDate() {
      const today = new Date();
      return today.toISOString().split("T")[0];
    },
  },
  methods: {
    swapCities() {
      [this.fromCity, this.toCity] = [this.toCity, this.fromCity];
    },
    search() {
      this.$router.push({
        path: "/routes",
        query: {
          from: this.fromCity,
          to: this.toCity,
          date: this.date,
        },
      });
    },
  },
};
</script>
