<script>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import ApplyTarif from './components/ApplyTarif.vue';
import Beard from './components/Beard.vue';
import CityModal from './components/CityModal.vue';
import HeaderComp from './components/HeaderComp.vue';
import FormBlock from './components/innerComponents/FormBlock.vue';
import InsertBlock from './components/InsertBlock.vue';
import { useMyStore } from './stores/store';
import AlertCity from './components/AlertCity.vue';
import FooterComp from './components/FooterComp.vue';
import ModalDialog from './components/ModalDialog.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    Beard,
    InsertBlock,
    FormBlock,
    ApplyTarif,
    CityModal,
    AlertCity,
    FooterComp,
    ModalDialog
  },
  setup() {
    const store = useMyStore();
    const getIsVisible = computed(() => store.getIsVisible);
    const getIsVisibleAlert = computed(() => store.getIsVisibleAlert);
    const setLocalStorageUserCity = store.setLocalStorageUserCity;

    onBeforeMount(() => {
      setLocalStorageUserCity();
    });

    const showButton = ref(false);

    const handleScroll = () => {
      showButton.value = window.scrollY > 300;
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const modalRef = ref(null);

    // Проверка доступности modalRef после монтирования компонента
    onMounted(() => {
      console.log("Modal ref after mount:", modalRef.value);
    });

    const openModal = () => {
      if (modalRef.value && modalRef.value.openModal) {
        modalRef.value.openModal();
      } else {
        console.error("openModal не найден на modalRef.value");
      }
    };

    return {
      getIsVisible,
      getIsVisibleAlert,
      store,
      showButton,
      scrollToTop,
      modalRef,
      openModal
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <header class="header">
        <HeaderComp />
        <AlertCity v-if="getIsVisibleAlert" />
      </header>

      <main class="main limiter">
        <Beard @open-modal="openModal" />
        <InsertBlock />
        <FormBlock />
        <ApplyTarif />
        <div v-if="getIsVisible" class="animated-component">
          <CityModal class="city-modal-animated-block" />
        </div>
      </main>

      <footer class="footer limiter">
        <FooterComp />
      </footer>
    </div>

    <!-- Добавляем ref на модальное окно -->
    <ModalDialog ref="modalRef" class="limiter"/>

    <button v-if="showButton" class="scroll-top" :class="{ show: showButton }" @click="scrollToTop">
      ↑
    </button>
  </div>
</template>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: transparent;
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid #383D4A;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-top.show {
  opacity: 1;
  transform: translateY(0);
}

.footer {
  margin-top: 10vw;
}

.city-modal-animated-block {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.main {
  margin-top: 55px;
  display: flex;
  flex-direction: column;

  gap: 10.4167vw;
}

@media (max-width:425px) {
  .main {
    margin-top: 25px;
  }
}

.container {
  width: 100%;
  min-height: auto;
}

.wrapper {
  width: 100%;
  background-color: #1F2229;

  padding-bottom: 3vw;

  position: relative;
}

.header {
  position: relative;
  z-index: 1000;
}

.header::after {
  content: '';

  width: 100%;
  height: 1px;

  background-color: #383D4A;

  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
