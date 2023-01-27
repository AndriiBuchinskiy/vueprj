// создаем роутер, и добавляем отслеживание истории переходов
import { createRouter, createWebHistory } from 'vue-router'
// импортрируем маршруты для сущности books
import ShopRoutes from "/src/router/routes/shop.js"
// регистрируем стартовую страницу
import HelloWorld from "@/components/HelloWorld.vue"

import loginPage from "@/components/login/LoginPage.vue";
import pageNotFound from "@/PageNotFound.vue";
import {useAuthStore} from "/src/router/stores/auth.js";
//import CreateProduct from "@/components/Products/CreateProduct.vue";
import CheckoutProduct from "@/components/Products/CheckoutProduct.vue";
import modalCard from "@/components/Products/ModalCard.vue";
const routes = [
    {
        path: '/home',
        name: 'home',
        component: HelloWorld,
    },

    {
        path: '/404',
        name: '404',
        // регистрируем необходимые страницы
        component: pageNotFound,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    },
    {
        path: '/create',
        name: 'Create Card',
        component: CheckoutProduct,
        meta: {requiresAuth: true},
    },
    {
      path: '/login',
      name:  'Login',
      component: loginPage,
    },
    {
      path: '/modalUpdate',
      name: 'modal',
      component: modalCard,
    },
    // добавляем маршруты в роутер
    ...ShopRoutes,
]


const router = createRouter({
    // добавление классов к используемым <router-link>
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    // подключаем истории переходов
    history: createWebHistory(),
    // подключаем роуты
    routes
})


router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const store = useAuthStore();
    console.log(store.user)
    if (requiresAuth && !store.user.id) {
        next('/login');
    } else {
        next();
    }
})
export default router