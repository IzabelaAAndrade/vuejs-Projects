const myapp = {
    data() {
        return {
            name: "Izabela's First VueJS app",
            createdon: new Date()
        }
    }
}

Vue.createApp(myapp).mount("#app");