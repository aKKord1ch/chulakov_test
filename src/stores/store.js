// stores/myStore.js
import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  state: () => ({
    userCity: null,

    sendedNumbers: null,

    isVisibleCityModal: false,
  }),
  getters: {
    getUserCity() {
      return this.userCity;
    },
    getSendedNumbers() {
      return this.sendedNumbers;
    },
    getIsVisible() {
      return this.isVisibleCityModal;
    },
  },
  actions: {
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
      this.isVisibleCityModal = !this.isVisibleCityModal
    },
  },
});
