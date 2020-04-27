import SearchPage from "@/components/pages/SearchPage.vue"

export default [{
    path: '/',
    redirect: 'Home'
}, {
    path: '/Home',
    component: SearchPage
}, {
    path: '*',
    redirect: '/'
}]
