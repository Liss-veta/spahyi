export default {
    template:
    ` <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Корзина</h1>
    </div>    <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div v-for="product in products" class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">{{ product.name }}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{{ product.price }}<small class="text-muted fw-light"> &times; {{product.count}}
                        шт.</small></h1>
                    <p>Описание товара Описание товара Описание товара Описание товара Описание товара Описание
                        товара</p>

                    <button type="button" class="btn btn-lg btn-info mb-3">+</button>
                    <button type="button" class="btn btn-lg btn-warning mb-3">&minus;</button>
                    <button type="button" class="btn btn-lg btn-outline-danger mb-3">Удалить из корзины</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center gap-1">
        <h2 class="mb-5">Итоговая стоимость: 600р.</h2>
        <button @click.prevent="router.go(-1)" class="col-6 btn btn-lg btn-outline-info mb-3" type="button">Назад</button>
        <button type="button" class="col-6 btn btn-lg btn-primary mb-3">Оформить заказ</button>

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
            let response = await fetch('http://127.0.0.1:8000/api-samohod/cart', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer '+localStorage.getItem('user_token')
                }
            }).then(response => response.json()
            )
            this.products = response.content
            console.log(this.products)
            for(let a = 0; this.products.length > a; a++){
                this.products[a]['count'] = 1;
            }
            console.log(this.products)
            const array = {}
            for (const item of this.products) {
                array[item.product_id] = array[item.product_id] ? array[item.count] + 1 : 1;
            }
            const keys = Object.keys(array)

            for(let a = 0; this.products.length > a; a++){
                if(this.products[a]['product_id'] == keys[a]){
                    this.products[a]['count'] = this.products[a]['count'] + 1
                }
                for(let u = 0; this.products.length > u; u++){
                    // console.log(this.products[u]['id']);
                    // console.log(this.products[a]);
                    if(this.products[u]['product_id'] == this.products[a]['product_id'] && this.products[u]['id'] > this.products[a]['id']){
                        this.products[u]['count'] = this.products[a]['count'] 
                        this.products.splice(this.products[u], 1); 
                    }
                }
            }

            // const result = Object.keys(array).filter((item) => array[item] > 1);
            console.log(this.products);
            return this.products;
        },
    },
}