import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";

import App from './App';
import { globalStyles } from "./styles";
import "./bootstrap.min.css";


render(
    <BrowserRouter>
        <Global styles={globalStyles} />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
