Vue.component('fiche-produit',{
    template:
    `<div class="col-12 col-md-6 col-lg-4">
        <div class="card mb-4">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">  
                <h5 class="card-title">{{nom}}</h5>
                <p class="card-text">{{description}}</p>
                <a v-on:click="passer_commande(article)" class="btn btn-primary">Acheter</a>
            </div>
        </div>
    </div>`
    ,props:['nom', 'description','article'],
    methods:{
        passer_commande:function(pro){
            this.$emit('commande-passee',pro)
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        welcomeMessage: 'Welcome back to the store',
        user: 'Said-Fekih',
        porduits: [["Pizza", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "images/pizza.jpg"],
        ["Hamburguer", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "images/pizza.jpg"],
        ["Cheeseburger", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "images/pizza.jpg"],
        ["Tacos", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "images/pizza.jpg"]],
        commandes: []
    },
    methods: {
        commander: function(pro){
            this.commandes.push(pro);
            verifcation();
        },
        supprimer: function(pro){
            this.commandes.pop(pro);
        }
    }
})

