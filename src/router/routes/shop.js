export default [
    {
        path: '/products',
        name: 'products',
        component: () => import('@/components/Products/ProductsList.vue'),
        meta: {requiresAuth: true},
    },
    {
        path: '/products/:id',
        name: 'single-products',
        component: () => import('@/components/Products/SingleProduct.vue'),
        meta: {requiresAuth: true},
        props: true
    },
]