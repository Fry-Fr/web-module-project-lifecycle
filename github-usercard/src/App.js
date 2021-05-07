import React from 'react';
import axios from 'axios';
import './App.css';

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
    <div className="App" 
    style={{
      color: "red",
      background: "blue",
      fontSize: "2rem",
      padding: ".7rem"}}>
      GITHUB USERCARD UNDER CONSTRUCTION.
    </div>
  );
  }
}

export default App;
