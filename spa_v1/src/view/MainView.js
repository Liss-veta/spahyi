

export default {
    
    template:
    ` <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Каталог товаров</h1>
    </div>
    <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div v-for="(product, index) in products" key="index" class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">{{ product.name }}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{{ product.price }}</h1>
                    <p>{{ product.description }}</p>
                    <button @click.prevent="addCart(product.id)" v-if="token" type="button" class="w-100 btn btn-lg btn-outline-primary">Добавить в корзину</button>
                </div>
            </div>
        </div>
    </div>
</main>`,
data(){
    return {
        products: [],
        token: localStorage.getItem('user_token'),
        product: ""
    }
},
mounted(){
    this.all()
},
    methods: {
        async all() {
            let response = await fetch('http://127.0.0.1:8000/api-samohod/products', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                }
            }).then(response => response.json()
            )
            return this.products = response.content;
        },
        async addCart(product) {
            console.log(product)
            let response = await fetch(`http://127.0.0.1:8000/api-samohod/cart/${product}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer '+this.token
                }
            }).then(response => response.json()
            )
            return response.content;
        },
    },
}
