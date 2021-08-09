import { render } from 'react-dom';
import { Global } from "@emotion/react";

import App from './App';
import { globalStyles } from "./styles";
import "./bootstrap.min.css";


render(
    <>
        <Global styles={globalStyles} />
        <App />
    </>,
    document.getElementById('root')
);
