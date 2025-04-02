<script>
import { computed, ref } from 'vue';
import { useMyStore } from '../../stores/store';
import Notify from './Notify.vue';

export default {
   name: 'FormBlock',
   components: {
      Notify
   },
   setup() {
      const store = useMyStore();
      const getPhoneErrors = computed(() => store.getPhoneErrors);
      const getFormErrors = computed(() => store.getFormErrors);
      const getSendedNumber = store.getSendedNumber;
      const setPhoneErrors = store.setPhoneErrors;
      const setFormErrors = store.setFormErrors;
      const setSendPromo = store.setSendPromo;
      const setPhoneNumbers = store.setPhoneNumbers;
      const setPhoneNumber = store.setPhoneNumber;

      const phoneNumber = ref("");
      const isChecked = ref(false);

      const commonSetIsChecked = () => {
         isChecked.value = !isChecked.value;
         setFormErrors(!isChecked.value);
      };

      const updatePhone = (event) => {
         let numbers = event.target.value.replace(/\D/g, "");

         if (numbers.startsWith("7") || numbers.startsWith("8")) {
            numbers = numbers.substring(1);
         }

         numbers = numbers.slice(0, 10);

         let formatted = "+7 ";
         if (numbers.length > 0) formatted += `(${numbers.slice(0, 3)}`;
         if (numbers.length > 3) formatted += `) ${numbers.slice(3, 6)}`;
         if (numbers.length > 6) formatted += `-${numbers.slice(6, 8)}`;
         if (numbers.length > 8) formatted += `-${numbers.slice(8, 10)}`;

         phoneNumber.value = formatted;
      };

      const validatePhone = () => {
         const regex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/;

         if (!regex.test(phoneNumber.value)) {
            setPhoneErrors(true);
         } else {
            setPhoneErrors(null);
         }
      };

      const sendPromo = () => {
         validatePhone();
         if (getPhoneErrors.value) {
            return;
         }

         if (!isChecked.value) {
            setFormErrors(true);
            return;
         } else {
            setFormErrors(null);
         }

         if (getSendedNumber(phoneNumber.value)) {
            document.querySelectorAll('#already-exists').forEach(item => {
               item.style.display = 'flex';
            });

            setTimeout(() => {
               document.querySelectorAll('#already-exists').forEach(item => {
                  item.style.display = 'none';
               });
            }, 2000);
            return;
         } else {
            setPhoneNumber(phoneNumber.value);
            setPhoneNumbers(phoneNumber.value);
         }

         setSendPromo(true);
      };

      return {
         getSendedNumber,
         validatePhone,
         phoneNumber,
         getPhoneErrors,
         getFormErrors,
         sendPromo,
         isChecked,
         commonSetIsChecked,
         updatePhone
      };
   }
};
</script>

<template>

   <section>

      <form id="promo-form" @submit.prevent="sendPromo">
         <fieldset>
            <img src="../../assets/Несколько шагов и 1 ТБ — ваш.svg" alt="" class="desk-title">

            <label class="phone__container">
               <span>Номер телефона</span>
               <input type="tel" v-model="phoneNumber" @input="updatePhone" maxlength="18" @blur="validatePhone"
                  placeholder="+7 (XXX) XXX-XX-XX" required />
            </label>

            <label class="condition__container">
               <input type="checkbox" class="custom-che" @click="commonSetIsChecked">
               <span class="checkmark"></span>
               <span>
                  Даю согласие на обработку персональных данных. <nobr><a href="#">Условия соглашения</a>.</nobr>
               </span>
            </label>

            <button id="promo-form__send-button" type="button" @click="sendPromo">
               <span>Выслать промокод</span>
            </button>

         </fieldset>

         <div class="notify-common-container">
            <Notify />
         </div>
      </form>

      <aside>
         <img src="../../assets/Оставьте номер и 1 ТБ — ваш.svg" alt="" class="mob-title">

         <ul class="aside__list">
            <li class="aside__item">
               <img src="../../assets/item1.svg" alt="">
               <span>
                  Ведите свой номер телефона, затем дождитесь смс с промокодом для получения Тб
               </span>
            </li>
            <li class="aside__item">
               <img src="../../assets/item2.svg" alt="">
               <span>
                  Перейдите на <a href="https://rostov.t2.ru">сайт Tele2</a> и активируйте промокод при подключении на
                  тариф
                  «Мой Онлайн+»
               </span>
            </li>
            <li class="aside__item">
               <img src="../../assets/item3.svg" alt="">
               <span>
                  Используйте свой подарочный ТБ от Tele2 в течение всего года
               </span>
            </li>
         </ul>
      </aside>

   </section>

</template>


<style scoped>
.desk-title {
   display: block;
}

@media (max-width: 768px) {
   .desk-title {
      display: none;
   }
}

.mob-title {
   display: none;
}

@media (max-width: 768px) {
   .mob-title {
      width: 60%;
      display: block;
   }
}

aside {
   width: 51%;
}

@media (max-width: 768px) {
   aside {
      margin: 0 auto;
      width: 100%;
   }
}

.aside__item span a {
   color: #fff !important;
}

.aside__item span {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 20px;
   line-height: 150%;
   letter-spacing: 0%;

   color: var(--main-color);
}

@media (max-width: 768px) {
   .aside__item span {
      font-size: 14px;
   }
}

@media (max-width: 425px) {
   .aside__item span {
      font-size: 18px;
   }
}

@media (max-width: 768px) {
   .aside__item img {
      width: 10%;
   }
}

@media (max-width: 425px) {
   .aside__item img {
      width: 19%;
   }
}

.aside__item {
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 1.5vw;
}

@media (max-width: 768px) {
   .aside__item {
      gap: 3vw;
   }
}

@media (max-width: 425px) {
   .aside__item {
      flex-direction: column;
      align-items: start;
      gap: 5vw;
   }
}

.aside__list {
   width: 100%;
   height: fit-content;
   display: flex;
   flex-direction: column;
   gap: 2vw;
}

@media (max-width: 768px) {
   .aside__list {
      margin-top: 5vw;
      gap: 5vw;
   }
}

@media (max-width: 425px) {
   .aside__list {
      margin-top: 13vw;
      gap: 12vw;
   }
}

.notify-common-container {
   margin-top: 3.5vw;
}

#promo-form__send-button {
   font-family: var(--main-font);
   font-weight: 700;
   font-size: 16px;
   line-height: 22px;
   letter-spacing: 0%;
   text-align: center;
   color: #000;
}

#promo-form__send-button {
   margin-top: 2.1vw;
   width: 218px;
   height: 48px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 48px;
   background-color: #fff;
}

@media (max-width: 768px) {
   #promo-form__send-button {
      margin: 10vw auto 0 auto;
   }
}

.condition__container input {
   display: none;
}

.condition__container {
   position: relative;
   padding-left: 30px;
   cursor: pointer;
   user-select: none;
}

.checkmark {
   position: absolute;
   top: 0;
   left: 0;
   height: 20px;
   width: 20px;
   background-color: transparent;
   border: 2px solid #fff;
}

.condition__container input:checked+.checkmark {
   background-color: transparent;
}

.condition__container input:checked+.checkmark::after {
   content: '';
   position: absolute;
   left: 6px;
   top: 2px;
   width: 5px;
   height: 10px;
   border: solid #fff;
   border-width: 0 2px 2px 0;
   transform: rotate(45deg);
}

.condition__container span a {
   color: var(--main-color) !important;
}

.condition__container span {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 16px;
   line-height: 138%;
   letter-spacing: 0%;
   color: var(--main-color);
}

.condition__container {
   display: flex;
   flex-direction: row;
   align-items: start;
   margin-top: 25px;
}

.phone__container::after {
   content: '';
   width: 100%;
   height: 2px;
   background-color: rgba(143, 147, 153, 1);
   position: absolute;
   bottom: 0;
   left: 0;
}

.phone__container input:focus,
.phone__container input:active {
   border: none;
   outline: none;
}


.phone__container:has(input:focus) span {
   color: #fff;
}

.phone__container:has(input:focus)::after {
   background-color: #fff;
   color: #fff;
}

.phone__container input::placeholder {
   color: rgba(143, 147, 153, 1) !important;
}

.phone__container input,
.phone__container input::placeholder {
   background-color: transparent;
   border: none;
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 16px;
   line-height: 138%;
   letter-spacing: 0%;
   color: #fff;
}

.phone__container span {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 13px;
   line-height: 18px;
   letter-spacing: 0%;
   color: rgba(143, 147, 153, 1);
   padding-bottom: 5px;
}

.phone__container {
   margin-top: 4.5vw;
   padding-bottom: 5px;
   display: flex;
   flex-direction: column;
   position: relative;
}

fieldset {
   display: flex;
   flex-direction: column;
   padding: 0;
   margin: 0;
   border: none;
}

section {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   background-color: #1F2229;
}

@media (max-width:768px) {
   section {
      flex-direction: column-reverse;
   }
}

form {
   width: 32%;
}

@media (max-width:768px) {
   form {
      width: 65%;
      margin: 0 auto;
   }
}

@media (max-width:425px) {
   form {
      width: 100%;
      margin: 15vw auto 15vw auto;
   }
}

#promo-form__send-button {
   display: inline-block;
   border-radius: 10rem;
   transition: all 0.3s;
   position: relative;
   overflow: hidden;
   z-index: 1;
}

#promo-form__send-button::after {
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: #fff;
   border-radius: 10rem;
   z-index: -2;
}

#promo-form__send-button::before {
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
   width: 0%;
   height: 100%;
   background-color: #1F2229;
   transition: all 0.3s;
   border-radius: 10rem;
   z-index: -1;
}

#promo-form__send-button:hover {
   color: #fff;
   border: 2px solid #fff !important;
}

#promo-form__send-button:hover::before {
   width: 100%;
}

#promo-form__send-button:active::before {
   background-color: #50ccfc;
}

#promo-form__send-button:active {
   color: #1F2229 !important;
}
</style>