<script>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, watch, watchEffect } from 'vue';
import { useMyStore } from '../stores/store';

export default {
   name: 'AlertCity',
   setup() {
      const store = useMyStore()
      const setUserCity = store.setUserCity
      const setIsVisible = store.setIsVisible
      const setIsVisibleAlert = store.setIsVisibleAlert
      const getIsVisible = computed(() => store.getIsVisible);
      const getIsVisibleAlert = computed(() => store.getIsVisibleAlert);
      const getUserCity = computed(() => store.getUserCity);

      onBeforeMount(() => {
         document.body.style.overflow = 'hidden';
      });
      onBeforeUnmount(() => {
         document.body.style.overflow = 'auto';
      });

      const commonSet = () => {
         setIsVisibleAlert()
         setIsVisible()
      }

      return {
         getUserCity,
         setIsVisibleAlert,
         getIsVisibleAlert,
         setIsVisible,
         commonSet
      }
   }
}
</script>

<template>

   <section>
      <span class="alert__title">
         Ваш регион {{ getUserCity }} ?
      </span>
      <ul class="buttons__list">
         <li class="buttons__item">
            <button @click="setIsVisibleAlert">
               <span>
                  Да, верно
               </span>
            </button>
         </li>
         <li class="buttons__item" @click="commonSet">
            <span>
               Изменить регион
            </span>
         </li>
      </ul>

   </section>

   <div class="back-drop"></div>

</template>

<style scoped>
.buttons__item span {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   letter-spacing: 0%;

   color: rgba(31, 34, 41, 1);
}

.buttons__item button span {
   font-family: var(--main-font);
   font-weight: 700;
   font-size: 16px;
   line-height: 22px;
   letter-spacing: 0px;
   text-align: center;

   color: rgba(31, 34, 41, 1);
}

.buttons__item button {
   border: 2px solid rgba(31, 34, 41, 1);
   border-radius: 30px;

   width: 110px;
   height: 40px;

   display: flex;
   align-items: center;
   justify-content: center;
}

.buttons__item:hover {
   cursor: pointer;
}

.buttons__list {
   display: flex;
   flex-direction: row;
   align-items: center;

   gap: 16px;
}

.alert__title {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 18px;
   line-height: 150%;
   letter-spacing: 0%;

   color: rgba(31, 34, 41, 1);
}

.back-drop {
   width: 100%;
   height: 100vh;

   background-color: rgba(0, 0, 0, 0.8);

   position: absolute;
   top: 0;
   left: 0;

   z-index: 80;
}

section::before {
   content: '';

   width: 8px;
   height: 8px;

   transform: rotate(45deg);

   background-color: #fff;

   position: absolute;
   z-index: 90;

   top: 0;
   right: 15px;
}

section {
   width: 297px;
   height: 130px;

   background-color: var(--main-color);

   border-radius: 4px;

   position: absolute;
   right: 60px;
   z-index: 100;

   display: flex;
   flex-direction: column;
   gap: 16px;

   padding: 16px 16px 24px 16px;

   box-sizing: border-box;
}

@media (max-width: 425px) {
   section {
      width: 90%;
      right: 5%;
   }
}
</style>
