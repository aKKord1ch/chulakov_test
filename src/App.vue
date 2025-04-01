<script>
import { computed, ref } from 'vue';
import ApplyTarif from './components/ApplyTarif.vue';
import Beard from './components/Beard.vue';
import CityModal from './components/CityModal.vue';
import HeaderComp from './components/HeaderComp.vue';
import FormBlock from './components/innerComponents/FormBlock.vue';
import InsertBlock from './components/InsertBlock.vue';
import { useMyStore } from './stores/store';

export default {
  name: 'App',
  components: {
    HeaderComp,
    Beard,
    InsertBlock,
    FormBlock,
    ApplyTarif,
    CityModal
  },
  setup() {
    const store = useMyStore()
    const getIsVisible = computed(() => store.getIsVisible)

    const toggleComponent = () => {
      getIsVisible.value = !getIsVisible.value;
      if (getIsVisible.value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-100%)';
      el.style.opacity = '0';
    }
    const leave = (el, done) => {
      el.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      el.style.transform = 'translateY(-100%)'; 
      el.style.opacity = '0';
      done();
    }

    return {
      getIsVisible,
      toggleComponent,
      beforeEnter,
      leave
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="wrapper">

      <header class="header">
        <HeaderComp/>
      </header>



      <main class="main limiter">
        <Beard />
        <InsertBlock />
        <FormBlock />
        <ApplyTarif />

        <transition name="fade" @before-enter="beforeEnter" @leave="leave">
          <div v-if="getIsVisible" class="animated-component">
            <CityModal class="city-modal-animated-block" />
          </div>
        </transition>

      </main>

      <footer>

      </footer>

    </div>
  </div>
</template>

<style scoped>
.city-modal-animated-block {
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
}

.header {
  position: relative;
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
