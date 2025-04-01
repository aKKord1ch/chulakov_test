<script>
import { computed, onBeforeMount } from 'vue';
import ApplyTarif from './components/ApplyTarif.vue';
import Beard from './components/Beard.vue';
import CityModal from './components/CityModal.vue';
import HeaderComp from './components/HeaderComp.vue';
import FormBlock from './components/innerComponents/FormBlock.vue';
import InsertBlock from './components/InsertBlock.vue';
import { useMyStore } from './stores/store';
import AlertCity from './components/AlertCity.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    Beard,
    InsertBlock,
    FormBlock,
    ApplyTarif,
    CityModal,
    AlertCity
  },
  setup() {
    const store = useMyStore();
    const getIsVisible = computed(() => store.getIsVisible);
    const getIsVisibleAlert = computed(() => store.getIsVisibleAlert);
    const setLocalStorageUserCity = store.setLocalStorageUserCity

    onBeforeMount(()=>{
      setLocalStorageUserCity()
    })

    return {
      getIsVisible,
      getIsVisibleAlert,
      store
    };
  }
};

</script>

<template>
  <div class="container" @click="console.log(store)">

    <div class="wrapper">

      <header class="header">
        <HeaderComp />
        <AlertCity v-if="getIsVisibleAlert" />
      </header>



      <main class="main limiter">
        <Beard />
        <InsertBlock />
        <FormBlock />
        <ApplyTarif />

        <div v-if="getIsVisible" class="animated-component ">
          <CityModal class="city-modal-animated-block" />
        </div>

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
