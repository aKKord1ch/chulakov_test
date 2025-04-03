<script>
import { ref, computed } from 'vue';
import { useMyStore } from '../stores/store';


export default {
  setup() {
    const store = useMyStore()
    const employees = computed(() => store.getEmployees);
    const currentIndex = ref(0);
    const modal = ref(null);
    const selectedEmployee = ref(null);

    const prevSlide = () => {
      if (currentIndex.value > 0) currentIndex.value--;
    };

    const nextSlide = () => {
      if (currentIndex.value < employees.value.length - 1) currentIndex.value++;
    };

    const openModal = (employee) => {
      selectedEmployee.value = employee;
      modal.value.showModal();
    };

    const closeModal = () => {
      modal.value.close();
    };

    return {
      employees,
      currentIndex,
      prevSlide,
      nextSlide,
      openModal,
      closeModal,
      selectedEmployee,
      modal
    };
  }
};
</script>

<template>
  <div class="slider">
    <div class="slider-container">
      <div class="slide" v-for="(employee, index) in employees" :key="employee.id"
        :class="{ active: index === currentIndex }" @click="openModal(employee)">
        <h3>{{ employee.name }}</h3>
        <p>{{ employee.position }}</p>
      </div>
    </div>

    <button @click="prevSlide" :disabled="currentIndex === 0" class="arrow-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        :stroke="currentIndex !== 0 ? '#fff' : 'currentColor'" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>

    <button @click="nextSlide" :disabled="currentIndex === employees.length - 1" class="arrow-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        :stroke="currentIndex !== employees.length - 1 ? '#fff' : 'currentColor'" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>

    <div class="pagination">
      <span v-for="(employee, index) in employees" :key="index" @click="currentIndex = index"
        :class="{ active: index === currentIndex }">
      </span>
    </div>

    <dialog ref="modal" class="modal">
      <div class="modal-content">
        <h2>{{ selectedEmployee?.name }}</h2>
        <p>{{ selectedEmployee?.position }}</p>
        <button @click="closeModal">Закрыть</button>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
h3 {
  font-family: var(--main-font);
  font-weight: 700;
  font-size: clamp(18px, 100%, 32px);
  line-height: 130%;
  letter-spacing: 0%;
  color: #fff;
}

p {
  font-family: var(--main-font);
  font-weight: 700;
  font-size: clamp(14px, 100%, 24px);
  line-height: 130%;
  letter-spacing: 0%;

  color: #fff;
}

.slider {
  text-align: center;
  position: relative;
  width: 300px;
  margin: auto;
}

@media (max-width: 425px) {
  .slider {
    width: 80vw;
  }
}

.slider-container {
  display: flex;
  overflow: hidden;
  justify-content: center;
}

.slide {
  display: none;
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: 0.3s;
}

.slide.active {
  display: block;
}

.arrow-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-btn:first-of-type {
  left: -2vw;
}

.arrow-btn:last-of-type {
  right: -2vw;
}

.pagination {
  margin-top: 10px;
}

.pagination span {
  width: 10px;
  height: 10px;
  background: gray;
  display: inline-block;
  margin: 0 5px;
  border-radius: 50%;
  cursor: pointer;
}

.pagination span.active {
  background: black;
}

.modal {
  border: none;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal button {
  margin-top: 10px;
  cursor: pointer;
}
</style>