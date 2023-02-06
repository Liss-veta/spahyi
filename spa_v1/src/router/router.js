import MainView from '../view/MainView.js'
import AuthView from '../view/AuthView.js'
import RegisterView from '../view/RegisterView.js'
import CartView from '../view/CartView.js'
import OrderView from '../view/OrderView.js'

const routes = [
    { path: '/', component: MainView},
    { path: '/auth', component: AuthView},
    { path: '/register', component: RegisterView},
    { path: '/cart', component: CartView},
    { path: '/order', component: OrderView},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})


export default router