import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelancers from './pages/Freelancers';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/survey/:questionNumber',
                element: <Survey />,
            },
             {
                path: '/results',
                element: <Results />,
            },
            {
                path: '/freelancers',
                element: <Freelancers />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
