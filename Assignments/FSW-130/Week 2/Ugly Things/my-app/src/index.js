import React from 'react';
import ReactDOM from 'react-dom';
import AddUgly from "./components/AddUgly"
import UglyList from "./components/UglyList"
import Footer from "./components/Footer"
import { UglyContextProvider } from "./contexts/ugly"



function App() {
    return (
        <UglyContextProvider>
            <AddUgly />
            <UglyList />
            <Footer />
        </UglyContextProvider>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)