import React,{Component} from 'react';
import{Route,Switch} from 'react-router-dom';
import './default.scss';
import {auth} from './Firebase/Utils';
//layouts
import MainLayout from './Layouts/MainLayout';
import HomePageLayout from './Layouts/HomePageLayout';

//pages
import Registration from './pages/registration';
import HomePage from './pages/homepage';
import Login from './pages/Login';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' render={()=>(
              <HomePageLayout>
                  <HomePage/>
              </HomePageLayout>
              
              
            )}/>
            <Route path='/registration' render={()=>(
              <MainLayout>
                <Registration/>
              </MainLayout>
            )}/>
            <Route path='/login' render={()=>(
              <MainLayout>
                <Login/>
              </MainLayout>
            )}/>
          </Switch>  
      </div>
    );
  }
  
}

export default App;
