<script>
import { computed } from 'vue'
import { useMyStore } from '../../stores/store'


export default {
   name: 'Notify',
   components: {
   },
   setup() {
      const store = useMyStore()
      const getSendedNumber = computed(() => store.getSendedNumber)
      const getSendedNumbersArray = computed(() => store.getSendedNumbersArray)
      const getPhoneErrors = computed(() => store.getPhoneErrors)
      const getFormErrors = computed(() => store.getFormErrors)
      const getSendPromos = computed(() => store.getSendPromo)
      const getPhoneNumber = computed(() => store.getPhoneNumber)

      return {
         getSendedNumber,
         getPhoneErrors,
         getFormErrors,
         getSendPromos,
         getSendedNumbersArray,
         getPhoneNumber
      }

   }
}
</script>

<template>

   <section class="notify__container">

      <div class="notification__container ok-n" v-if="getSendPromos">
         <img src="../../assets/ok-notify.svg" alt="">
         <span>
            Промокод выслан на ваш номер
         </span>
      </div>
      <div class="notification__container al-n" id="already-exists">
         <img src="../../assets/alert-notify.svg" alt="">
         <span>
            На этот номер уже выслан промокод, на один номер можно получить один промокод
         </span>
      </div>
      <div class="notification__container al-n" v-if="getFormErrors">
         <img src="../../assets/alert-notify.svg" alt="">
         <span>
            Необходимо принять условия соглашения
         </span>
      </div>
      <div class="notification__container al-n" v-if="getPhoneErrors">
         <img src="../../assets/alert-notify.svg" alt="">
         <span>
            Необходимо ввести корректный номер телефона
         </span>
      </div>

   </section>

</template>

<style scoped>
#already-exists {
   display: none;
}

.notify__container {
   display: flex;
   flex-direction: column;
   gap: 1vw;
}

.notification__container span {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 14px;
   line-height: 138%;
   letter-spacing: 0%;
   color: var(--main-color);
}

.notification__container {
   width: 100%;
   height: fit-content;
   border-radius: 8px;
   background-color: rgba(38, 43, 54, 1);
   padding: 12px;
   display: flex;
   gap: 12px;
   box-sizing: border-box;

   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
}

.ok-n {
   align-items: center;
}

.al-n {
   align-items: start;
}

@supports (display: -webkit-flex) {
   .notify__container {
      display: -webkit-flex;
   }

   .notification__container {
      display: -webkit-flex;
   }
}

@supports (display: flex) {
   .notify__container {
      display: flex;
   }

   .notification__container {
      display: flex;
   }
}
</style>
