import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {store} from "./stores.js";
import CoinCreate from "./CoinCreate.js";
import Header from "./Header.js";


function App(){

    return(
        <Provider store={store}>
            <Header></Header>
            <CoinCreate></CoinCreate>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)