import React from 'react';
import{Route,Switch} from 'react-router-dom';
import './default.scss';
import Registration from './pages/registration';
import HomePage from './pages/homepage';
import MainLayout from './Layouts/MainLayout';
import HomePageLayout from './Layouts/HomePageLayout';
function App() {
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
        </Switch>  
    </div>
  );
}

export default App;
