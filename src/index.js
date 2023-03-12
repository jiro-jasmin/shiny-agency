import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelancers from './pages/Freelancers';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Comfortaa from './assets/fonts/Comfortaa-Regular.ttf';
import Error from './components/Error';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Comfortaa';
        src: url(${Comfortaa}) format('truetype');
    }

   body {
    margin: 0 40px;
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
   }
`;

const AppLayout = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
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
            {
                path: "*",
                element: <Error />,
                errorElement: <Error />,    
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);