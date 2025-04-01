<script>
import { computed, ref } from 'vue';
import { useMyStore } from '../stores/store';



export default {
   name: 'HeaderComp',
   setup(props, { emit }) {
      const store = useMyStore()
      const getUserCity = computed(() => store.getUserCity)

      const setUserCity = store.setUserCity
      const setLocalStorageUserCity = store.setLocalStorageUserCity
      const setIsVisible = computed(() => store.setIsVisible)

      return {
         getUserCity,
         setLocalStorageUserCity,
         setUserCity,
         setIsVisible
      }
   }
}
</script>

<template>

   <ul class="header__list">
      <li class="header__item">
         <img src="../assets/Logo.svg" alt="" class="header__logo">
      </li>
      <li class="header__item">
         <button @click="setIsVisible">
            <img src="../assets/Location.png" alt="">
            <span>
               {{ getUserCity ? getUserCity : 'Ростов-на-Дону' }}
            </span>
         </button>
      </li>
   </ul>

</template>

<style scoped>
.header__list {
   padding: 22px 30px;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
}

@media (max-width:375.99px) {
   .header__list {
      padding: 13px 15px;
   }
}

.header__item {
   display: flex;
   flex-direction: row;

   gap: 5px;

   align-items: center;
}


@media (max-width:375.99px) {
   .header__logo {
      width: 48px;
   }

   .header__item button img {
      width: 24px;
   }
}

.header__item span {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 1.25em;
   line-height: 150%;
   letter-spacing: 0%;

   color: #fff;
}

.header__item button {
   display: flex;
   flex-direction: row;

   gap: 5px;

   align-items: center;

   background-color: transparent;
   border: none;
   padding: 0;
   margin: 0;
}

.header__item button:hover {
   cursor: pointer;
}
</style>