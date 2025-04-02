// stores/myStore.js
import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  state: () => ({
    userCity: null,

    sendedNumbers: [],
    phoneErrors: null,
    formErrors: null,
    sendPromo: null,

    phoneNumber: null,

    isVisibleCityModal: false,
    isVisibleAlert: true,
  }),
  getters: {
    getUserCity() {
      return this.userCity;
    },
    getSendedNumbersArray() {
      return this.sendedNumbers;
    },
    getIsVisible() {
      return this.isVisibleCityModal;
    },
    getIsVisibleAlert() {
      return this.isVisibleAlert;
    },
    getPhoneErrors() {
      return this.phoneErrors;
    },
    getFormErrors() {
      return this.formErrors;
    },
    getSendPromo() {
      return this.sendPromo;
    },
    getPhoneNumber(){
      return this.phoneNumber
    }
  },
  actions: {
    setPhoneNumber(val){
      this.phoneNumber = val
    },
    setSendPromo(val) {
      this.sendPromo = val;
      setTimeout(() => {
        this.sendPromo = false;
      }, 2000);
    },
    setFormErrors(val) {
      this.formErrors = val;
    },
    setPhoneNumbers(val) {
      if ((this.sendedNumbers.length > 0)) {
        let item = this.sendedNumbers.find(item => item.number === val);
        if (item === undefined) {
          this.sendedNumbers.push({
            id: this.sendedNumbers.length,
            number: val,
          });
        }else {
          console.log('already exists')
        }
      } else {
        this.sendedNumbers.push({
          id: this.sendedNumbers.length,
          number: val,
        });
      }
    },
    setPhoneErrors(val) {
      this.phoneErrors = val;
    },
    setUserCity(city) {
      this.userCity = city;
      localStorage.setItem("userCity", city);
    },
    setLocalStorageUserCity() {
      const city = localStorage.getItem("userCity");

      if (city) {
        this.setUserCity(city);
      } else {
        console.log("Without ls");
      }
    },
    setIsVisible() {
      this.isVisibleCityModal = !this.isVisibleCityModal;
    },
    setIsVisibleAlert() {
      this.isVisibleAlert = !this.isVisibleAlert;
      console.log("isVisibleAlert изменился:", this.isVisibleAlert);
    },
    getSendedNumber(val) {
      console.log('SKMSKM', this.sendedNumbers.some((item) => item.number === val));
      return this.sendedNumbers.some((item) => item.number === val);
   }
  },
});
