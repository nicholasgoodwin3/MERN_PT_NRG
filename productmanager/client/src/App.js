import "./App.css";
import newProduct from "./components/NewProduct"; //unused error? find out why this presents.
import Main from "./view/Main"; //multi imports for different views
import { BrowserRouter, Routes, Route } from "react-router-dom"; //routes

function App() {
return (
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/product/:id" element={<showProduct/>}/> 
                <Route path="/product/edit/:id" element={<updateItem/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);
}
export default App;
