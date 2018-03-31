import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Predictions from "./components/Predictions"
import axios from "axios";

const apiKey = "mQqqBksAR5JpYtr6dwTse7YMT";
const proxy = 'https://cors-anywhere.herokuapp.com/'

class App extends React.Component {
  state = {
    route: '',
    direction: [],
    stops:[],
    directionSelected:'',
    stopSelected:' ',
    prd: []
};

handleChange = event =>{
    let routeNum = event.target.value;
    this.setState({ route: routeNum});
    var url = `http://ctabustracker.com/bustime/api/v2/getdirections?key=${apiKey}&rt=${routeNum}&format=json`
    axios.get(proxy + url)
        .then(res => {
            this.setState({ direction: res.data['bustime-response'].directions})
        })
} 

handleDirChange = event => {
    let dir = event.target.value;
    this.setState({ directionSelected: dir });
    var url = `http://www.ctabustracker.com/bustime/api/v2/getstops?key=${apiKey}&rt=${this.state.route}&&dir=${dir}&format=json`
    axios.get(proxy + url)
    .then(res => {
        this.setState({ stops: res.data['bustime-response'].stops})
    })
}

handleStop = event =>{
    let stop = event.target.value;
    this.setState({ stopSelected: stop});
    
}
  getPredictions = async (e) => {
    e.preventDefault();
    const route = this.state.route;
    const stpid = this.state.stopSelected;
    const finalUrl = `http://ctabustracker.com/bustime/api/v2/getpredictions?key=${apiKey}&rt=${route}&stpid=${stpid}&format=json`;
    axios.get(proxy + finalUrl)
    .then(res => {
      console.log(res.data)
      this.setState ({
        prd: res.data['bustime-response'].prd
        })
      })
  }

  render(){
    return(
      <div>
        <Titles />
        <Form 
        getPredictions={this.getPredictions} 
        handleChange={this.handleChange} 
        handleStop={this.handleStop} 
        handleDirChange={this.handleDirChange}
        stops={this.state.stops}
        direction={this.state.direction}/>
        {this.state.prd.length > 0 ? 
          this.state.prd.map(e => <Predictions route={e.rt} destination={e.des} predictionTime={e.prdctdn}/>)
        : <p>Your Results Here</p>
      }
      </div>
    );
  }
};

export default App;