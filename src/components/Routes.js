import { createBrowserRouter } from "react-router-dom";
import Main from "../Main";
import About from "./About";
import BookDetails from "./BookDetails";
import Books from "./Books";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,  /* or use path:'/' */
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },

            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'books',
                element: <Books></Books>,
                loader: () => fetch('https://api.itbook.store/1.0/new'),
            },
            {
                path: 'book/:id',
                element: <BookDetails></BookDetails>,
                loader: ({ params }) =>
                    fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            }
        ]
    }
]);

export default router;