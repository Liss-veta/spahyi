export default {
  template: `<header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <router-link to="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">«Самоход»</span>
        </router-link>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <router-link v-if="!token" class="me-3 py-2 text-dark text-decoration-none" to="/register">Регистрация</router-link>
            <router-link v-if="!token" class="me-3 py-2 text-dark text-decoration-none" to="/auth">Авторизация</router-link>
            <router-link v-if="token" class="me-3 py-2 text-dark text-decoration-none" @click.prevent="clearToken" to="/auth">Выход</router-link>
            <router-link class="me-3 py-2 text-dark text-decoration-none" to="/order">Мои заказы</router-link>
            <router-link class="me-3 py-2 text-dark text-decoration-none" to="/cart">Корзина</router-link>
        </nav>
    </div>
</header>`,
data(){
    return {
        token: localStorage.getItem('user_token')
    }
},
updated() {
    this.token = localStorage.getItem('user_token')
},
methods:{
    async clearToken(){
        let response = await fetch(`http://127.0.0.1:8000/api-samohod/logout`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer '+this.token
                }
            })
        delete localStorage.user_token
        return this.token = '';
    }
}
};
