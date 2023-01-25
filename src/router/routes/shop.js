export default [
    {
        path: '/products',
        name: 'products',
        component: () => import('@/components/Products/ProductsList.vue'),
    },
    {
        path: '/products/:id',
        name: 'single-products',
        component: () => import('@/components/Products/SingleProduct.vue'),
        props: true
    },
]