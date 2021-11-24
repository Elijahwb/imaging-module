import Vue from 'vue';
import VueRouter from 'vue-router';
// import axios from 'axios';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import("@/views/Home.vue"),
        // beforeEnter: async (to, from, next) => {
        //     if(from.name == null) {
                
        //         if (to.query.isAuth !== 'true') location.replace('https://app.projectdental.nl/dashboard');
        //         else {
        //             sessionStorage.setItem('isDentalSoftImagingAuth', true);
        //             next();
        //         }
        //     }
        //     else {
        //         let isImagingAuth = sessionStorage.getItem('isDentalSoftImagingAuth');

        //         if(isImagingAuth !== "true") location.replace('https://app.projectdental.nl/dashboard');
        //         else next();
        //     }
        // }
    },
    {
        path: '/patient/modularity',
        name: 'Patient Modularity',
        component: () => import("@/views/Modularity.vue")  
    },
    {
        path: '/patient/timeseries',
        name: 'Patient Timeseries',
        component: () => import("@/views/TimeSeries.vue")  
    },
    {
        path: '/patient/studytemplate',
        name: 'Patient Study Template',
        component: () => import("@/views/Studytemplate.vue")  
    },
    {
        path: '*',
        redirect: {
          name: 'Home'
        }
    },
    {
        path: '/2D',
        name: '2D',
        component: () => import("@/views/2d.vue")  
    },
    {
        path: '/3D',
        name: '3D',
        component: () => import("@/views/3d.vue")  
    },
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     let isAuth = sessionStorage.getItem('isDentalSoftImagingAuth');
//     if (to.name != "Home" && isAuth !== 'true') location.replace('https://app.projectdental.nl/dashboard');
//     else next();
// });

export default router;