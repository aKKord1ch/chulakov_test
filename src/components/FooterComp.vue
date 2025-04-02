<script>

export default {
   name: 'FooterComp',
   components: {
   },
   setup() {



      return {
      }
   }
}
</script>

<template>

   <section class="upper__footer">
      <ul class="upper__socials">
         <li class="socials__item">
            <img src="../assets/twitter.svg" alt="">
         </li>
         <li class="socials__item">
            <img src="../assets/vk.svg" alt="">
         </li>
         <li class="socials__item">
            <img src="../assets/facebook.svg" alt="">
         </li>
      </ul>

      <ul class="upper__conditions">
         <li class="conditions__item">
            Полные условия акци
         </li>
         <li class="conditions__item">
            <img src="../assets/16plus.svg" alt="">
         </li>
      </ul>
   </section>

   <section class="bottom__footer">
      <ul class="bottom__left-part">
         <li class="left-part__item">
            <img src="../assets/Logo__bottom.svg" alt="">
         </li>
         <li class="left-part__item">
            <span>
               © Tele2 Россия, 2021
            </span>
         </li>
      </ul>

      <ul class="bottom__right-part">
         <li class="right-part__item">
            <span>
               Сделано в Студии Олега Чулакова
            </span>
         </li>
         <li class="right-part__item">
            <span>
               <img src="../assets/chul__logo.svg" alt="">
            </span>
         </li>
      </ul>
   </section>

</template>

<style scoped>
.right-part__item span {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 13px;
   line-height: 18px;
   letter-spacing: 0%;

   color: rgba(143, 147, 153, 1);

   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

.left-part__item span {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   letter-spacing: 0%;

   color: rgba(143, 147, 153, 1);

   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

.conditions__item {
   font-family: var(--main-font);
   font-weight: 400;
   font-size: 13px;
   line-height: 18px;
   letter-spacing: 0%;

   color: var(--main-color);

   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}

.upper__conditions,
.bottom__right-part {
   display: flex;
   flex-direction: row;

   align-items: center;
   gap: 12px;

   -ms-flex-direction: row;
}

@media (max-width: 768px) {
   .bottom__right-part {
      display: none;
   }
}

.upper__socials,
.bottom__left-part {
   display: flex;
   flex-direction: row;

   align-items: center;
   gap: 15px;

   -ms-flex-direction: row;
}

@media (max-width: 768px) {
   .bottom__left-part {
      justify-content: space-between;
   }
}

.upper__footer::after {
   content: '';

   width: 100%;
   height: 1px;

   display: block;

   background-color: rgba(255, 255, 255, 1);
   position: absolute;
   bottom: 0;
   left: 0;
}

.upper__footer,
.bottom__footer {
   width: 100%;

   display: flex;
   flex-direction: row;

   justify-content: space-between;

   position: relative;

   padding-bottom: 10px;

   -ms-flex-direction: row;
}

.bottom__footer {
   margin-top: 3vw;
}

@media (max-width: 768px) {
   .bottom__footer {
      flex-direction: column;
   }
}
</style>