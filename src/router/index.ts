import { useLS } from '@/composables/common/useLS'
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


const {get, exist} = useLS()
const validateRoutes = (
  to: RouteLocationNormalizedGeneric, 
  from: RouteLocationNormalized, 
  next: NavigationGuardNext
) => {

  document.title = `${to.meta.title as string }`

  if(get<string>('user_id') && to.path === '/signup') {
    next({name: 'home'})
   
  } else if(!exist('user_id') && to.path !== '/signin' && to.path !== '/signup') {
    next({name: 'signin'})

  } else {
    next()

  }


}



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      meta: {
        requiresAuth: true,
        title: 'Home'
      },
      component: () => import('@/pages/Home.vue')
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
    {
      path: '/cars',
      name: 'cars',
      meta: {
        requiresAuth: true,
        title: 'Cars'
      },
      component: () => import('@/pages/Cars.vue')
    },
],


   
})



router.beforeEach(validateRoutes)

export default router
