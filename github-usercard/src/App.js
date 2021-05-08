import React from 'react';
import axios from 'axios';
import './App.css';
import img1 from './assets/githublogo.png';
import img2 from './assets/lambdalogo.png';

const Header = () => {
  return (
    <header className="logo-header">
      <img alt="logo" src={`${img1}`}/>
      <p>❤️'s</p>
      <img alt="logo" src={`${img2}`}/>
    </header>
  )
}

class App extends React.Component {
  state = {
    dataObj: {},
    name: '',
    followers: null
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/Fry-Fr')
      .then(res=>{
        this.setState({
          dataObj: res.data
        })
      })
      .catch(err=>{
        console.error("errors",err)
      })
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.dataObj !== this.state.dataObj){
      this.setState({
        name: this.state.dataObj.name,
        followers: this.state.dataObj.followers
      })
    }
  }

  render() {return (
    <div className="App">
      <Header/>
    </div>
  );
  }
}

export default App;
