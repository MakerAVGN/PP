<template>
  <main class="routes-page">
    <div class="search-wrapper">
      <div class="container">
        <SearchBlock />
      </div>
    </div>
    <div class="container">
      <div class="routes-content">
        <div class="routes-list">
          <div class="routes-header">
            <h2>Найдено {{ routes.length }} поездок</h2>
            <div class="routes-sort">
              <select v-model="sortBy" class="custom-select">
                <option value="price">По цене</option>
                <option value="date">По дате</option>
                <option value="rating">По рейтингу</option>
              </select>
            </div>
          </div>
          <div v-if="routes.length" class="routes-items">
            <div v-for="route in routes" :key="route.id" class="route-card">
              <div class="route-info">
                <div class="route-time">
                  <div class="time">{{ route.startTime }}</div>
                  <div class="city">{{ route.from }}</div>
                  <div class="location">{{ route.startLocation }}</div>
                </div>
                <div class="route-duration">
                  <div class="duration-line"></div>
                </div>
                <div class="route-time">
                  <div class="time">{{ route.endTime }}</div>
                  <div class="city">{{ route.to }}</div>
                  <div class="location">{{ route.endLocation }}</div>
                </div>
                <div class="route-price">
                  <div class="price">{{ route.price }} ₽</div>
                  <div class="seats">осталось {{ route.seatsLeft }} места</div>
                </div>
              </div>
              <div class="route-driver">
                <div class="driver-info">
                  <img
                    :src="route.driverAvatar"
                    :alt="route.driverName"
                    class="driver-avatar"
                  />
                  <div class="driver-details">
                    <div class="driver-name">{{ route.driverName }}</div>
                    <div class="driver-car">{{ route.carModel }}</div>
                  </div>
                </div>
                <button class="book-button">Выбрать</button>
              </div>
            </div>
          </div>
          <div v-else class="no-routes">
            <p>Поездки не найдены. Попробуйте изменить параметры поиска.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SearchBlock from "./SearchBlock.vue";

export default {
  name: "RoutesPage",
  components: {
    SearchBlock,
  },
  data() {
    return {
      sortBy: "price",
      routes: [
        {
          id: 1,
          from: "Симферополь",
          to: "Казань",
          startTime: "16:00",
          endTime: "05:00",
          startLocation: "ЖД вокзал Гагарина 3 мага...",
          endLocation: "ЖД вокзал Вкусно и точка",
          price: 9000,
          seatsLeft: 3,
          driverName: "Динар",
          carModel: "Ford Transit",
          driverAvatar: "https://via.placeholder.com/48",
        },
        {
          id: 2,
          from: "Симферополь",
          to: "Казань",
          startTime: "16:00",
          endTime: "05:00",
          startLocation: "ЖД вокзал Гагарина 3 мага...",
          endLocation: "ЖД вокзал Вкусно и точка",
          price: 9000,
          seatsLeft: 3,
          driverName: "Динар",
          carModel: "Ford Transit",
          driverAvatar: "https://via.placeholder.com/48",
        },
        {
          id: 3,
          from: "Симферополь",
          to: "Казань",
          startTime: "16:00",
          endTime: "05:00",
          startLocation: "ЖД вокзал Гагарина 3 мага...",
          endLocation: "ЖД вокзал Вкусно и точка",
          price: 9000,
          seatsLeft: 3,
          driverName: "Динар",
          carModel: "Ford Transit",
          driverAvatar: "https://via.placeholder.com/48",
        },
        {
          id: 4,
          from: "Симферополь",
          to: "Казань",
          startTime: "16:00",
          endTime: "05:00",
          startLocation: "ЖД вокзал Гагарина 3 мага...",
          endLocation: "ЖД вокзал Вкусно и точка",
          price: 9000,
          seatsLeft: 3,
          driverName: "Динар",
          carModel: "Ford Transit",
          driverAvatar: "https://via.placeholder.com/48",
        },
        {
          id: 5,
          from: "Симферополь",
          to: "Казань",
          startTime: "16:00",
          endTime: "05:00",
          startLocation: "ЖД вокзал Гагарина 3 мага...",
          endLocation: "ЖД вокзал Вкусно и точка",
          price: 9000,
          seatsLeft: 3,
          driverName: "Динар",
          carModel: "Ford Transit",
          driverAvatar: "https://via.placeholder.com/48",
        },
        {
          id: 6,
          from: "Симферополь",
          to: "Казань",
          startTime: "16:00",
          endTime: "05:00",
          startLocation: "ЖД вокзал Гагарина 3 мага...",
          endLocation: "ЖД вокзал Вкусно и точка",
          price: 9000,
          seatsLeft: 3,
          driverName: "Динар",
          carModel: "Ford Transit",
          driverAvatar: "https://via.placeholder.com/48",
        },
        // Добавьте больше маршрутов для примера
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.routes-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $spacing-lg;

  h2 {
    font-size: 20px;
    color: $text-color;
    font-weight: 600;
  }

  .routes-sort {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid $primary-color;
      pointer-events: none;
    }
  }

  .custom-select {
    appearance: none;
    padding: $spacing-sm $spacing-xl $spacing-sm $spacing-md;
    font-size: 14px;
    color: $primary-color;
    background: $white;
    border: 1px solid lighten($primary-color, 30%);
    border-radius: 20px;
    cursor: pointer;
    font-family: "Montserrat", sans-serif;
    min-width: 140px;
    transition: all 0.3s ease;

    &:hover {
      border-color: $primary-color;
      background: lighten($primary-color, 45%);
    }

    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba($primary-color, 0.1);
    }

    option {
      color: $text-color;
      background: $white;
      padding: $spacing-sm $spacing-md;
    }
  }
}

@include responsive(sm) {
  .routes-header {
    flex-direction: column;
    gap: $spacing-md;
    text-align: center;

    .custom-select {
      width: 100%;
    }
  }
}
</style>
