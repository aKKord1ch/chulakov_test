<script>


export default {
   name: 'InsertBlock',
   setup() {

   }
}
</script>

<template>

   <section class="insert__container">
      <span class="insert__title">
         Один терабайт — много любимых развлечений
      </span>

      <span class="insert__sub-title">
         Подарок получают только новые абоненты при подключении услуг Tele2
         с тарифом «Мой онлайн+». Трафик расходуется в течение года.
      </span>

      <ul class="insert_ops__list">
         <li class="insert__item">
            <figure>
               <img src="../assets/1.svg" alt="">
               <figcaption>
                  Около 500 часов видео
               </figcaption>
            </figure>
         </li>
         <li class="insert__item">
            <figure>
               <img src="../assets/2.svg" alt="">
               <figcaption>
                  Примерно 200 000 песен
               </figcaption>
            </figure>
         </li>
         <li class="insert__item">
            <figure>
               <img src="../assets/3.svg" alt="">
               <figcaption>
                  Порядка 300 000 фото
               </figcaption>
            </figure>
         </li>
      </ul>
   </section>


</template>

<style scoped>
figcaption {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 20px;
   line-height: 150%;
   letter-spacing: 0%;

   color: var(--main-color);

}

@media (max-width:1024px) {
   figcaption {
      padding-right: 10px;
      font-size: 16px;

   }
}

@media (max-width:768px) {
   figcaption {
      font-size: 14px;
   }
}

figure img {
   width: 23%;
}

@media (max-width:725px) {
   figure img {
      width: 16%;
   }
}

figure {
   display: flex;
   flex-direction: row;

   align-items: center;
   gap: 0.5vw;
}

@media (max-width:725px) {
   figure {
      gap: 4vw;
   }
}

.insert_ops__list {
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   margin-top: 2.7vw;

}

@media (max-width:725px) {
   .insert_ops__list {
      flex-direction: column;
      gap: 4vw;
   }
}

.insert__container {
   display: flex;
   flex-direction: column;

   padding-bottom: 20px;
}

.insert__title {
   font-family: var(--main-font);
   font-weight: 700;
   font-size: 40px;
   line-height: 130%;
   letter-spacing: 0%;

   color: var(--main-color);

   margin-bottom: 1.5vw;
}

@media (max-width:768px) {
   .insert__title {
      font-size: 32px;
   }
}

@media (max-width:425px) {
   .insert__title {
      font-size: 24px;
      margin-bottom: 4vw;
   }
}

.insert__sub-title {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 20px;
   line-height: 150%;
   letter-spacing: 0%;
   color: var(--main-color);

}

@media (max-width:768px) {
   .insert__sub-title {
      font-size: 18px;
   }
}
</style>
