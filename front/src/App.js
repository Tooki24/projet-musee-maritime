import React, {Component} from 'react';
import NavbarView from "./features/composent/NavbarView";
import HomePage from "./features/page/HomePage";
import GalleryPage from "./features/page/GalleryPage";
import {
    BrowserRouter as Router,
    Routes,
    Route, BrowserRouter,
} from 'react-router-dom';
import NotFound from "./features/page/NotFound";
import Layout from "./features/composent/Layout";
import ListNavires from "./features/composent/navire/ListNavires";
import DetailsNavires from "./features/composent/navire/DetailsNavires";
import PlanningPage from "./features/page/PlanningPage";
import NaviresPage from "./features/page/NaviresPage";

// TODO: Pour modifier le contenu de la page d'accueil, aller dans le fichier homePage 
// qui est dans features/composent/page/HomePage.js


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path={"navires"} element={<NaviresPage/>}>
                            <Route index element={<ListNavires/>}/>
                            <Route path={":boatID"} element={<DetailsNavires/>}/>
                            <Route path={"planning/:boatID"} element={<PlanningPage/>}/>
                        </Route>

                        <Route path={"gallery"} element={<GalleryPage/>}/>
                        <Route path={"*"} element={<NotFound/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}


export default App;