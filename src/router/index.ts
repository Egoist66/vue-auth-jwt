import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalizedGeneric, type RouteLocationNormalized } from 'vue-router'

/**
 * Validates the current route and redirects to the authentication page if the user is not authenticated.
 * Also updates the document title based on the current route.
 *
 * @param {RouteLocationNormalizedGeneric} to - The current route location.
 * @param {RouteLocationNormalized} from - The previous route location.
 * @param {NavigationGuardNext} next - The next navigation guard.
 * @return {Object} An object with the redirect path if the user is not authenticated.
 */
const validateRoutes = (
  to: RouteLocationNormalizedGeneric, 
  from: RouteLocationNormalized, 
  next: NavigationGuardNext
) => {

  document.title = `${to.meta.title as string }`

//   if(localStorage.getItem('user_id') && to.path === '/auth') {
//     next({name: 'home'})
   
//   }

//   if(!localStorage.getItem('user_id') && to.path !== '/auth') {
//     next({name: 'auth'})
//   }

  next()
  



}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      meta: {
        title: 'Home'
      },
      component: () => import('@/pages/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      alias: '/register',
      meta: {
        title: 'Sign Up'
      },
      component: () => import('@/pages/SignUp.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      alias: '/login',
      meta: {
        title: 'Sign In'
      },
      component: () => import('@/pages/SignIn.vue')
    },
],


   
})



router.beforeEach(validateRoutes)

export default router