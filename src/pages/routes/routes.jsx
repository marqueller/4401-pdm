import { createBrowserRouter } from "react-router-dom";
import App from '../App.jsx';
import { Home } from '../pages/Home.jsx';
import { Acesso } from '../pages/acesso.jsx';
import { Assistir } from '../assistir.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/assistir",
        element: <Assistir />
    },
    {
        path: "/acesso",
        element: <Acesso />
    }

])