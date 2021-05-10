import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';

const followers = ['karapeoples', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

class App extends React.Component {
  state = {
    dataObj: []
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/Fry-Fr')
    .then(res=>{
      this.setState({
        dataObj:[...this.state.dataObj,res.data]
      })
    })
    .catch(err=>{
      console.error("errors",err)
    })
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.dataObj.length === 0){
      followers.forEach( item => {
        axios
        .get(`https://api.github.com/users/${item}`)
        .then(res=>{
          this.setState({
            dataObj: [...this.state.dataObj,res.data]
          })
        })
        .catch(err=>{
          console.error("errors",err)
        })
      })
    }
  }

  render() {return (
    <div className="App container">
      <Header/>
      {this.state.dataObj[0] ? <Cards data={this.state.dataObj} /> :
      <div className="no-card">NO DATA</div>}
    </div>
  );
  }
}

export default App;
