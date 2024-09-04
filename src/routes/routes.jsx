import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import { Home } from '../pages/Home.jsx';
import { Assistir } from '../pages/assistir.jsx';
import { Acesso } from '../pages/acesso.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'Home',
        element: <Home />
    },
    {
        path: '/assistir',
        element: <Assistir />
    },
    {
        path: '/acesso',
        element: <Acesso />
    },
]);