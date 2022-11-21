import Home from '../pages/Home';
import Test from '../pages/Test';

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/test', component: Test},
];

const privateRoutes = []

export { publicRoutes, privateRoutes };