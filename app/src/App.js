import logo from './logo.svg';
import './App.css';
import Game from "./pages/Game";
import Shop from "./pages/Shop";
import Toolbar from "./components/Toolbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";

function App() {

    const [getPage, setPage] = useState("/")
    const [getBuilding, setBuilding] = useState()

    const [getGold, setGold] = useState(0)
    const [getStone, setStone] = useState(0)
    const [getWood, setWood] = useState(0)

  return (
    <div className="App">
        <BrowserRouter>
            <Toolbar page={{getPage, setPage}}
                     gold={{getGold, setGold}}
                     stone={{getStone, setStone}}
                     wood={{getWood, setWood}}/>
            <Routes>
                <Route path="/" element={<Game building={{getBuilding, setBuilding}}
                                               gold={{getGold, setGold}}
                                               stone={{getStone, setStone}}
                                               wood={{getWood, setWood}}/>}/>}

                <Route path="/shop" element={<Shop gold={{getGold, setGold}}
                                                   stone={{getStone, setStone}}
                                                   wood={{getWood, setWood}}
                                                   building={{getBuilding, setBuilding}}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
