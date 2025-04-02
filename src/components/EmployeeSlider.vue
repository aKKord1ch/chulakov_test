<script setup>
import { ref, computed } from 'vue';
import { useMyStore } from '../../stores/store';


const store = useMyStore()
const employees = computed(() => store.getEmployees);

const currentIndex = ref(0);

// Переключение слайдов
const nextSlide = () => {
  if (currentIndex.value < employees.value.length - 1) {
    currentIndex.value++;
  }
};
const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<template>
  <div class="slider">
    <div class="slider-container">
      <div class="slide" v-for="(employee, index) in employees" :key="employee.id" 
           :class="{ active: index === currentIndex }">
        <h3>{{ employee.name }}</h3>
        <p>{{ employee.position }}</p>
      </div>
    </div>

    <!-- Навигация -->
    <button @click="prevSlide" :disabled="currentIndex === 0">Назад</button>
    <button @click="nextSlide" :disabled="currentIndex === employees.length - 1">Вперед</button>

    <!-- Пагинация -->
    <div class="pagination">
      <span v-for="(employee, index) in employees" :key="index"
            @click="currentIndex = index"
            :class="{ active: index === currentIndex }"></span>
    </div>
  </div>
</template>

<style scoped>
.slider {
  width: 300px;
  text-align: center;
  margin: 20px auto;
}
.slider-container {
  display: flex;
  overflow: hidden;
  height: 100px;
  justify-content: center;
  align-items: center;
}
.slide {
  display: none;
}
.slide.active {
  display: block;
}
button {
  margin: 5px;
}
.pagination {
  margin-top: 10px;
}
.pagination span {
  width: 10px;
  height: 10px;
  display: inline-block;
  background: gray;
  border-radius: 50%;
  margin: 3px;
  cursor: pointer;
}
.pagination span.active {
  background: black;
}
</style>
