import React,{Component} from 'react';
import{Route,Switch,Redirect} from 'react-router-dom';
import './default.scss';
import {auth, handleUserProfile} from './Firebase/Utils';
//layouts
import MainLayout from './Layouts/MainLayout';
import HomePageLayout from './Layouts/HomePageLayout';

//pages
import Registration from './pages/registration';
import HomePage from './pages/homepage';
import Login from './pages/Login';

const initialState={
  currentUser:null
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ...initialState
    };
  }
  authListner=null;

  componentDidMount(){
    this.authListner=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef=await handleUserProfile(userAuth);
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({
        ...initialState
      })
    })
  }
  componentWillUnmount(){
    this.authListner();
  }

  render(){
    const {currentUser}=this.state;
    return (
      <div className="App">
        <Switch>
            <Route exact path='/' render={()=>(
              <HomePageLayout currentUser={currentUser}>
                  <HomePage/>
              </HomePageLayout>
              
              
            )}/>
            <Route path='/registration' render={()=>(
              <MainLayout currentUser={currentUser}>
                <Registration/>
              </MainLayout>
            )}/>
            <Route path='/login' 
              render={()=> currentUser?<Redirect to='/'/>:(
                <MainLayout currentUser={currentUser}>
                  <Login/>
                </MainLayout>
            )}/>
          </Switch>  
      </div>
    );
  }
  
}

export default App;
