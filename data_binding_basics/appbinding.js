const appBinding = {
    data() {
        return {
            nomePaciente: "",
            tipoSanguineo: "",
            fatorRh: "",
            input_nome: "",
            tipos: "Não Informado",
            rh: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault() // Faz com que o resultado não seja armazenado no servidor
            console.log(this.tipos)
            this.nomePaciente = this.input_nome
            this.tipoSanguineo = this.tipos
            this.fatorRh = this.rh

        }
    }

}

Vue.createApp(appBinding).mount("#app")