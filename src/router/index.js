import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


function createBreadCrumb(bcObj, bcMap){
  let newObj = JSON.parse(JSON.stringify(bcMap.get(bcObj.parent)))
  
  let tgt = newObj.breadcrumb_srb.length - 1;

  newObj.breadcrumb_srb[tgt].link = newObj.linkReal;
  newObj.breadcrumb_eng[tgt].link = newObj.linkReal;
  newObj.breadcrumb_srb.push({
    name: bcObj.name_srb, link: "",
  })
  newObj.breadcrumb_eng.push({
    name: bcObj.name_eng, link: ""
  })
  newObj.linkReal = bcObj.link
  bcMap.set(bcObj.key, newObj)
}

// This is the list for breadcrumb making
//
// When adding new route to the rooter add path information to this list!!
//
// key - just the key for the path, usually same as the route name (it must be unique!!!)
//
// name_srb - name of the route in serbian
//
// name_eng - name of the route in english
//
// link - path to the page
//
// parent - the *key* of the parent page () // home page doesn't have parent because it is the root/starting page
const bcList = [
  {key: 'home', name_srb: "Početna", name_eng: "Home", link: "/", parent: null},
  {key: 'about', name_srb: "O nama", name_eng: "About", link: "/about", parent: "home"},
  {key: 'artworks', name_srb: "Umetnine", name_eng: "Artworks", link: "/artworks", parent: "home"},
  {key: 'artists', name_srb: "Umetnici", name_eng: "Artists", link: "/artists", parent: "home"},
  {key: 'account', name_srb: "Moj nalog", name_eng: "My account", link: "/account", parent: "home"},
  {key: 'paintings', name_srb: "Slike", name_eng: "Paintings", link: "/artworks/paintings", parent: "artworks"},
  {key: 'sculptures', name_srb: "Skulpture", name_eng: "Sculptures", link: "/artworks/sculptures", parent: "artworks"},
  {key: 'showArtwork', name_srb: "generic", name_eng: "generic", link: "/artworks", parent: "artworks"}
]

const bcMap = new Map();

bcMap.set(bcList[0].key, {
  breadcrumb_srb: [ 
    {name: bcList[0].name_srb, link: ""}],
  breadcrumb_eng: [
    {name: bcList[0].name_srb, link: ""}],
  linkReal: bcList[0].link
})

for(let i = 1; i < bcList.length; i++)
  createBreadCrumb(bcList[i], bcMap)



var routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      ...bcMap.get('home')
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    
    // !IMPORTANT! LOOK FOR THE COMMENTS UP (before bcList declaration)
    
    // !IMPORTANT! Please when adding new route add the meta for the route like this
    meta: {
      ...bcMap.get('about')
    }
  },
  {
    path: '/artworks',
    name: 'artworks',
    component: () => import(/* webpackChunkName: "artworks" */ '../views/ArtworkView.vue'),
    meta: {
      ...bcMap.get('artworks')
    }
  },
  {
    path: '/artists',
    name: 'artists',
    component: () => import(/* webpackChunkName: "artists" */ '../views/ArtistView.vue'),
    meta: {
      ...bcMap.get('artists')
    }
  },
  {
    path: "/account",
    name: 'account',
    component: () => import(/*webpackChunkName: "Account" */ '../views/AccountView.vue'),
    meta: {
      ...bcMap.get('account')
    }
  },
  {
    path: '/artworks/paintings',
    name: 'paintings',
    component: () => import(/* webpackChunkName: "paintings" */ '../views/ArtworkView.vue'),
    meta: {
      ...bcMap.get('paintings')
    }
  },
  {
    path: '/artworks/sculptures',
    name: 'sculptures',
    component: () => import(/* webpackChunkName: "scluptures" */ '../views/ArtworkView.vue'),
    meta: {
      ...bcMap.get('sculptures')
    }
  },
  {
    path: '/artworks/showArtwork/:id',
    name: 'showArtwork',
    component: () => import(/* webpackChunkName: "showArtwork" */ '../views/IndArtworkView.vue'),
    meta: {
      ...bcMap.get('showArtwork')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
