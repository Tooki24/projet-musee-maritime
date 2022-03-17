import React, {Component} from 'react';
import NavbarView from "./features/composent/NavbarView";
import HomePage from "./features/page/HomePage";
import NaviresListPage from "./features/page/NaviresListPage";
import GalleryPage from "./features/page/GalleryPage";

<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';



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