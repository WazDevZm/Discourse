import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Learning React Lol

import Join from "./components/Join";
import Chat from "./components/Chat";


const App = () => {
   <Router>
    <Route path = "/" exact Component={Join} />
    <Route path = "/chat" Component={Chat} />
   </Router>
};



export default App;
