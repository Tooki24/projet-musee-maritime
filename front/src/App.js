import React, {Component} from 'react';
import HomePage from "./features/page/HomePage";
import NaviresPage from "./features/page/NaviresPage";
import GalleryPage from "./features/page/GalleryPage";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import NotFound from "./features/page/NotFound";
import Layout from "./features/composent/Layout";
import ListNavires from "./features/composent/navire/ListNavires";
import DetailsNavires from "./features/composent/navire/DetailsNavires";
import PlanningPage from "./features/page/PlanningPage";



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