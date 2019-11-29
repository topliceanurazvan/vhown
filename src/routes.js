import Home from './components/Home'
import Gallery from './components/Gallery'
import Experiences from './components/Experiences'

export const routes = [
    {path: '', component: Home, name: 'home'},
    {path: '*', redirect: '', name: 'home'},
    {path: '/gallery', component: Gallery, name: 'gallery'},
    {path: '/experiences', component: Experiences, name: 'experiences'},
]