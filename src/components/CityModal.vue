<script>
import { computed, onBeforeMount, onBeforeUnmount, onMounted } from 'vue';
import { useMyStore } from '../stores/store';

export default {
   name: 'CityModal',
   setup() {
      const store = useMyStore()
      const setUserCity = store.setUserCity
      const setIsVisible = store.setIsVisible
      const getIsVisible = computed(() => store.getIsVisible);


      onBeforeMount(() => {
         document.querySelector('body').style.overflow = 'hidden'
      })
      onBeforeUnmount(() => {
         document.querySelector('body').style.overflow = 'auto'
      })

      onMounted(() => {
         const items = document.querySelectorAll('.city__item')

         console.log(items)

         items.forEach(item => {
            item.addEventListener('click', () => {
               setIsVisible(!getIsVisible.value)
               setUserCity(item.innerHTML)
            })
         })
      })

      return {
         setUserCity
      }
   }
}
</script>

<template>

   <section>
      <div class="modal__container">
         <span class="city__title">
            Выберите город
         </span>

         <ul class="city__list">
            <li class="city__item">
               Воронеж
            </li>
            <li class="city__item">
               Москва
            </li>
            <li class="city__item">
               Ростов-на-Дону
            </li>
            <li class="city__item">
               Иркутск
            </li>
            <li class="city__item">
               Н. Новгород
            </li>
            <li class="city__item">
               Санкт Петербург
            </li>
            <li class="city__item">
               Кемерово
            </li>
            <li class="city__item">
               Новосибирск
            </li>
            <li class="city__item">
               Челябинск
            </li>
            <li class="city__item">
               Красноярск
            </li>
            <li class="city__item">
               Пермь
            </li>
         </ul>
      </div>
   </section>

</template>

<style scoped>
.city__item:hover {
   cursor: pointer;
}

.city__item {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 20px;
   line-height: 150%;
   letter-spacing: 0px;

   color: var(--main-color);

   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 768px) {
   .city__item {
      font-size: 18px;
   }
}

.city__list {
   display: grid;
   grid-template-rows: repeat(4, auto);
   grid-template-columns: repeat(3, auto);

   gap: 25px 50px;

   -ms-grid-rows: repeat(4, auto);
   -ms-grid-columns: repeat(3, auto);
}

@media (max-width: 768px) {
   .city__list {
      display: grid;
      grid-template-rows: repeat(6, auto);
      grid-template-columns: repeat(2, auto);

      gap: 25px 50px;

      -ms-grid-rows: repeat(6, auto);
      -ms-grid-columns: repeat(2, auto);
   }
}

.city__title {
   font-family: var(--main-font);
   font-weight: 700;
   font-size: 40px;
   line-height: 130%;
   letter-spacing: 0px;

   color: var(--main-color);
}

@media (max-width: 768px) {
   .city__title {
      font-size: 24px;
   }
}

.modal__container {
   display: flex;
   flex-direction: column;

   gap: 5vw;

   max-width: 1120px;

   padding: 0 15px;
}

@media (max-width: 768px) {
   .modal__container {
      gap: 17vw;
   }
}

section {
   width: 100%;
   height: 100%;

   display: flex;
   align-items: center;

   padding-bottom: 272px;
   padding-left: 20%;

   background-color: #1F2229;

   -ms-flex-align: center;
}

@media (max-width: 768px) {
   section {
      padding-left: unset;
   }
}

.city__item{
   position: relative;
}

.city__item::after {
   content: '';

   width: 0%;
   height: 1px;

   background-color: #fff;

   position: absolute;
   bottom: -2px;
   left: 0;

   transition: width 0.3s ease;

}

.city__item:hover::after {
   width: 100%
}
</style>
