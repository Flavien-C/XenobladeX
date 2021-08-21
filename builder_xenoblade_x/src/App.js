import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Menu from "./Components/Layers/Menu";
import Builder from "./Components/Builder";
import MainArmor from "./Components/Api/Armor/MainArmor";
import MainMeleeWeapon from "./Components/Api/MeleeWeapon/MainMeleeWeapon";
import MainRangeWeapon from "./Components/Api/RangeWeapon/MainRangeWeapon";

axios.defaults.baseURL = "http://localhost:8000/api";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/builder" component={Builder} />
        <Route exact path="/armor" component={MainArmor} />
        <Route exact path="/meleeWeapon" component={MainMeleeWeapon} />
        <Route exact path="/rangeWeapon" component={MainRangeWeapon} />
        <Route exact path="/login" component={null} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
