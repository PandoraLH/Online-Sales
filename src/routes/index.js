import HomePage from '../pages/HomePage/HomePage';
import TestPage from '../pages/TestPage/TestPage';

const publicRoutes = [
    { path: '/', component: HomePage},
    { path: '/testpage', component: TestPage},
];

const privateRoutes = []

export { publicRoutes, privateRoutes };