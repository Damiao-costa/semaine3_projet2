import React from 'react';
import Navbar from './components/Navbar';
import Bois from "./views/Bois";
import Home from "./views/Home";
import Plastique from "./views/Plastique";
import Fer from "./views/Fer";

function App() {
    let component;

    switch (window.location.pathname){
        case "/":
            component = <Home />
            break
        case "/bois":
            component = <Bois />
            break
        case "/plastique":
            component = <Plastique />
            break
        case "/fer":
            component = <Fer />
            break
    }
        return (
        <>
            <Navbar />
            {component}
       </>
        )
}
export default App;
