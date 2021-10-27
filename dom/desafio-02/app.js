new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(event) {
            alert('Estou alertando agora!')
        },
        alterarValor(event) {
            this.valor = event.target.value
        }
    }
})