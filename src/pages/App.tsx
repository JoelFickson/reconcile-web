import {Route, Switch} from "react-router-dom"
import Home from "./Home";
import Details from "./Details";


const App = () => {


    return (

        <Switch>

            <Route exact path='/' component={Home}/>
            <Route exact path='/details' component={Details}/>


        </Switch>
    );
}


export default App;