import React, {Component} from 'react';
import NavbarView from "./features/composent/NavbarView";
import BannerHome from "./features/composent/BannerHome";
import Home from "./features/composent/Home";
import ListNavires from "./features/composent/navire/ListNavires";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import GalleryNavires from "./features/composent/navire/GalleryNavires";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <BannerHome/>
                    <NavbarView/>
                </div>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/navires" exact element={<ListNavires/>}/>
                    <Route path="/gallery" exact element={<GalleryNavires/>}/>
                </Routes>

            </Router>

        );
    }
}

export default App;