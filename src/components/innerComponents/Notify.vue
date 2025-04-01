<script>

export default {
   name: 'Notify',
   components: {
   },
   setup() {

   }
}
</script>

<template>

   <div class="notification__container ok-n">
      <img src="../../assets/ok-notify.svg" alt="">
      <span>
         Промокод выслан на ваш номер
      </span>
   </div>
   <div class="notification__container al-n">
      <img src="../../assets/alert-notify.svg" alt="">
      <span>
         На этот номер уже выслан промокод, на один номер можно получить один промокод
      </span>
   </div>

</template>

<style scoped>
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
   height: 48px;

   border-radius: 8px;

   background-color: rgba(38, 43, 54, 1);

   padding: 12px;

   display: flex;

   gap: 12px;

   box-sizing: border-box;
}

.ok-n{
   align-items: center;
}

.al-n{
   align-items: start;
}
</style>
