import Vue from 'vue'
import Router from 'vue-router'

import FrontEndView from '@/components/frontend/layout/FrontEndView'
import Home from '@/components/frontend/Home'

// Static Pages - FE
import About from '@/components/frontend/static/About'
import Contact from '@/components/frontend/static/Contact'
import Terms from '@/components/frontend/static/Terms'
import Privacy from '@/components/frontend/static/Privacy'

// Articles - FE
import Articles from '@/components/frontend/articles/All'
import SingleArticle from '@/components/frontend/articles/Single'

// Main - CMS
import CMSView from '@/components/cms/layout/CMSView'
import CMSDash from '@/components/cms/layout/Dash'

// Login - CMS
import CMSLogin from '@/components/cms/auth/Login'
import CMSRegister from '@/components/cms/auth/Register'

// Articles - CMS
import CMSArticles from '@/components/cms/articles/All'
import CMSNewArticle from '@/components/cms/articles/New'
import CMSEditArticle from '@/components/cms/articles/Edit'

import CMSProjects from '@/components/cms/projects/All'
import CMSNewProject from '@/components/cms/projects/New'
import CMSEditProject from '@/components/cms/projects/Edit'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: FrontEndView,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'about',
          name: 'about',
          component: About
        },
        {
          path: 'contact',
          name: 'contact',
          component: Contact
        },
        {
          path: 'articles',
          name: 'articles',
          component: Articles
        },
        {
          path: 'articles/:id',
          name: 'single-article',
          component: SingleArticle
        },
        {
          path: 'privacy-policy',
          name: 'privacy-policy',
          component: Privacy
        },
        {
          path: 'terms-of-service',
          name: 'terms-of-service',
          component: Terms
        }
      ]
    },
    {
      path: '/cms',
      component: CMSView,
      children: [
        {
          path: 'login',
          name: 'login',
          component: CMSLogin
        },
        {
          path: 'register',
          name: 'register',
          component: CMSRegister
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: CMSDash,
          meta: { auth: true, permissions: ['admin'] }
        },
        {
          path: 'articles',
          name: 'cms-articles',
          component: CMSArticles,
          meta: { auth: true, permissions: ['admin'] }
        },
        {
          path: 'new-article',
          name: 'new-article',
          component: CMSNewArticle,
          meta: { auth: true, permissions: ['admin'] }
        },
        {
          path: 'edit-article',
          name: 'edit-article',
          component: CMSEditArticle,
          meta: { auth: true, permissions: ['admin'] }
        },
        {
          path: 'projects',
          name: 'cms-projects',
          component: CMSProjects,
          meta: { auth: true, permissions: ['admin'] }
        },
        {
          path: 'new-project',
          name: 'new-project',
          component: CMSNewProject,
          meta: { auth: true, permissions: ['admin'] }
        },
        {
          path: 'edit-project',
          name: 'edit-project',
          component: CMSEditProject,
          meta: { auth: true, permissions: ['admin'] }
        }
      ]
    }
  ]
})
