import HomePage from '../pages/HomePage/HomePage';
import TestPage from '../pages/TestPage/TestPage';
import TestPage1 from '../pages/TestPage1/TestPage1';


const publicRoutes = [
    { path: '/', component: HomePage},
    { path: '/testpage', component: TestPage},
    { path: '/testpage1', component: TestPage1},
];

const privateRoutes = []

export { publicRoutes, privateRoutes };