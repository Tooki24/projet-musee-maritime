import React, {Component} from 'react';
import NavbarView from "./features/composent/NavbarView";
import HomePage from "./features/page/HomePage";
import NaviresListPage from "./features/page/NaviresListPage";
import GalleryPage from "./features/page/GalleryPage";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// TODO: Pour modifier le contenu de la page d'accueil, aller dans le fichier homePage 
// qui est dans features/composent/page/HomePage.js


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavbarView/>
                </div>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                    <Route path="/navires" exact element={<NaviresListPage/>}/>
                    <Route path="/gallery" exact element={<GalleryPage/>}/>
                </Routes>

            </Router>

        );
    }
}

export default App;