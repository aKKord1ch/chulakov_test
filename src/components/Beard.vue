<script>

export default {
   name: 'Beard',
   components: {

   },
   setup() {

   }
}
</script>

<template>

   <ul class="beard__list">
      <li class="beard__item">
         <section>
            <span class="sub-title --upper">
               Акция продлится <nobr>с 1 по 20 сентября</nobr>
            </span>

            <img src="../assets/это ваша выгода!.svg" alt="">

            <span class="sub-title --under">
               <nobr>Тариф «Мой онлайн+»</nobr> и <nobr>1 ТБ трафика</nobr> в подарок для новых абонентов
            </span>

            <button>
               <span>
                  Принять участие
               </span>
            </button>
         </section>
      </li>
      <li class="beard__item">
         <img src="../assets/Boss1-2.webp" alt="" class="boss-img">
      </li>
   </ul>

</template>

<style scoped>
@media (max-width:425px) {
   section img {
      width: 60%;
   }
}


section button {
   font-family: var(--main-font);
   font-weight: 700;
   font-size: 16px;
   line-height: 22px;
   letter-spacing: 0px;
   text-align: center;

}

section button {
   margin-top: 4vw;

   width: 200px;
   height: 60px;

   background-color: var(--main-color);
   border-radius: 30px;
}

@media (max-width:768px) {
   section button {
      width: 125px;
      height: 50px;

      font-size: 12px;
   }
}

@media (max-width:425px) {
   section button {
      width: 200px;
      height: 48px;
      border-radius: 48px;
      margin-top: 10vw;
      margin-bottom: 11vw;

      font-size: 16px;
   }
}

section {
   padding-bottom: 15px;
}

.--upper {
   margin-top: 2vw;
   margin-bottom: 4vw;
}

@media (max-width:425px) {
   .--upper {
      margin-top: 0;
      margin-bottom: 10vw;
   }
}

.--under {
   margin-top: 1vw;
}

@media (max-width:425px) {
   .--under {
      margin-top: 4vw;
   }
}

.sub-title {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 1.25em;
   line-height: 150%;
   letter-spacing: 0%;

   color: var(--main-color);
}

@media (max-width:1024.99px) {
   .sub-title {
      font-size: 1em;
   }
}

@media (max-width:768px) {
   .sub-title {
      font-size: 0.75em;
   }
}

@media (max-width:425px) {
   .sub-title {
      font-size: 16px;
   }
}

section {
   display: flex;
   flex-direction: column;

   padding-right: 30%;
}

@media (max-width:425px) {
   section {
      padding: 0;
   }
}

.beard__list {
   display: flex;
   flex-direction: row;
}

@media (max-width:425px) {
   .beard__list {
      flex-direction: column;
   }
}

.beard__item {
   width: 50%;
}

@media (max-width:425px) {
   .beard__item {
      width: 100%;
   }
}

.boss-img {
   width: 100%;
}
</style>
