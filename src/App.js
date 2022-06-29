import {Route, HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import NavBar from './components/Navbar';
import Home from './components/Home';
import  CreateAccount from 'components/CreateAccount';
import  Login from 'components/Login';
import  Deposit from 'components/Deposit';
import  Withdraw from 'components/Withdraw';
import  AllData from 'components/AllData';


function App() {
    return (
        <HashRouter>
           <div className="container-fluid">
               <NavBar/>
                   <Route path="/" component={Home} />
                   <Route path="/createaccount/" component={CreateAccount} />
                   <Route path="/login/" component={Login} />
                   <Route path="/deposit/" component={Deposit}/>
                   <Route path="/withdraw/" component={Withdraw} />
                   <Route path="/alldata/" component={AllData} />
           </div>
        </HashRouter>
    );
}





export default App;
