<script>

export default {
   name: 'ApllyTarif',
   components: {
   },
   setup() {

      const openHref = () => {
         window.open('https://rostov.tele2.ru', '_blank')
      }

      return {
         openHref
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

         <button class="desk-button" @click="openHref">
            <span>
               Оформить тариф
            </span>
         </button>
      </aside>

      <figure>
         <img src="../assets/phone.webp" alt="Оформить тариф" title="Оформить тариф">
         <button class="mob-button" @click="openHref">
            <span>
               Оформить тариф
            </span>
         </button>
      </figure>

   </section>

</template>

<style scoped>
.desk-button {
  display: inline-block;
  border-radius: 10rem;
  color: black;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.desk-button::after {
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

.desk-button::before {
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

.desk-button:hover {
  color: #fff;
  border: 2px solid #fff;
}

.desk-button:hover::before {
  width: 100%;
}

.desk-button:active::before{
   background-color: #50ccfc;
}

.desk-button:active{
   color: #1F2229 !important;
}


.aside__sub-title {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 20px;
   line-height: 150%;
   letter-spacing: 0%;
   color: var(--main-color);
   margin-bottom: 3.5vw;

   /* Для старых браузеров */
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 568px) {
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

   /* Для старых браузеров */
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

@media (max-width: 568px) {
   .aside__title {
      font-size: 24px;
   }
}

figure img {
   width: 64%;
   display: block;
   margin: 0 auto;
   /* Для старых браузеров */
   -ms-interpolation-mode: bicubic;
}

@media (max-width: 568px) {
   figure img {
      width: 50%;
   }
}

@media (max-width: 425px) {
   figure img {
      width: 80%;
   }
}

figure {
   width: 50%;
}

@media (max-width: 568px) {
   figure {
      width: 100%;
   }
}

aside {
   width: 50%;
   display: flex;
   flex-direction: column;
   /* Для старых браузеров */
   -webkit-flex-direction: column;
   -moz-flex-direction: column;
}

@media (max-width: 568px) {
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

   /* Для старых браузеров */
   -webkit-transition: background-color 0.3s ease;
   -moz-transition: background-color 0.3s ease;
   -ms-transition: background-color 0.3s ease;
   transition: background-color 0.3s ease;
}

@media (max-width: 568px) {
   section button {
      margin: 0 auto;
      font-size: 16px;
   }
}

@media (max-width: 568px) {
   .desk-button {
      display: none;
   }
}

.mob-button {
   display: none;
}

@media (max-width: 568px) {
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

   /* Для старых браузеров */
   -webkit-flex-direction: row;
   -moz-flex-direction: row;
}

@media (max-width: 568px) {
   section {
      flex-direction: column;
   }
}
</style>