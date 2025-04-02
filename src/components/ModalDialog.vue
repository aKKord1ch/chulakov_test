<script>
import { ref } from 'vue';
import FormBlock from './innerComponents/FormBlock.vue';

export default {
   components: { FormBlock },
   setup() {
      const dialog = ref(null);

      const openModal = () => {
         console.log("Opening modal");
         document.body.style.overflow = 'hidden'
         if (dialog.value) dialog.value.showModal();
      };

      const closeModal = () => {
         console.log("Closing modal");
         document.body.style.overflow = 'auto'
         if (dialog.value) dialog.value.close();
      };

      return { dialog, openModal, closeModal };
   }
};
</script>

<template>
   <dialog ref="dialog" class="modal">
      <div class="modal-content">
         <button class="close-btn" @click="closeModal">✖</button>
         <slot></slot>
         <FormBlock class="pad"/>
      </div>
   </dialog>
</template>


<style scoped>
dialog::backdrop {
   background-color: rgb(0, 0, 0, 0.8);
}

dialog {
   padding: 0;
   position: fixed;
   top: 50%;
   transform: translateY(-50%);
}

.pad {
   padding: 30px 15px 15px;
}

.modal {
   border: none;
   border-radius: 10px;
}

.modal-content {
   position: relative;
}

.close-btn {
   position: absolute;
   top: 10px;
   right: 10px;
   border: none;
   background: transparent;
   font-size: 20px;
   cursor: pointer;
   color: #fff;
}
</style>