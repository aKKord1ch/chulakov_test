<script>

export default {
   name: 'ApllyTarif',
   components: {
   },
   setup() {
      return {
      }
   }
}
</script>

<template>

   <section>
      <aside>
         <span class="aside__title">
            Заходите на сайт Tele2
         </span>
         <span class="aside__sub-title">
            Перейдите в магазин, оформите тариф «Мой онлайн+» и на страничке активации введите ваш промокод. Готово!
         </span>

         <button class="desk-button">
            <span>
               Оформить тариф
            </span>
         </button>
      </aside>

      <figure>
         <img src="../assets/phone.webp" alt="">
         <button class="mob-button">
            <span>
               Оформить тариф
            </span>
         </button>
      </figure>

   </section>

</template>

<style scoped>
.aside__sub-title {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 20px;
   line-height: 150%;
   letter-spacing: 0%;

   color: var(--main-color);

   margin-bottom: 3.5vw;
}

@media (max-width:568px) {
   .aside__sub-title {
      font-size: 18px;
   }
}

.aside__title {
   font-family: var(--main-font);
   font-weight: 700;
   font-size: 40px;
   line-height: 130%;
   letter-spacing: 0%;

   color: var(--main-color);

   margin-bottom: 2.5vw;
}

@media (max-width:568px) {
   .aside__title {
      font-size: 24px;
   }
}

figure img {
   width: 64%;
   display: block;
   margin: 0 auto;
}

@media (max-width:568px) {
   figure img {
      width: 50%;
   }
}
@media (max-width:425px) {
   figure img {
      width: 80%;
   }
}

figure {
   width: 50%;
}

@media (max-width:568px) {
   figure {
      width: 100%;
   }
}

aside {
   width: 50%;

   display: flex;
   flex-direction: column;
}

@media (max-width:568px) {
   aside {
      width: 100%;
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
   width: 205px;
   height: 48px;

   background-color: var(--main-color);
   border-radius: 30px;
}

@media (max-width:568px) {
   section button {
      margin: 0 auto;
      font-size: 16px;
   }
}

@media (max-width:568px) {
   .desk-button {
      display: none;
   }
}

.mob-button {
   display: none;
}

@media (max-width:568px) {
   .mob-button {
      display: block;
      margin-top: 50px;
   }
}

section {
   padding-bottom: 15px;

   display: flex;
   flex-direction: row;
   align-items: center;
}

@media (max-width:568px) {
   section {
      flex-direction: column;
   }
}
</style>