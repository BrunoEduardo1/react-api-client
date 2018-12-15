import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import './index.css';

// import Loader from '../../components/Loader';



class Series  extends Component{
  //State(component Feature)
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }
  //set up a timer
  // componentDidMount() {
  //   fetch('http://api.tvmaze.com/search/shows?q=flash')
  //   .then(response => response.json())
  //   .then(json => this.setState({series: json}))
  //
  // }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true});
      fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({series: json, isFetching: false}))
    //console.log(e);
    //console.log(e.target.value);
    //Tamanho do array {this.state.series.length}
  }

  render () {
    const { series, seriesName, isFetching} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mt-5 mx-auto">
            <input className="form-control search" value={seriesName} type="text" onChange={this.onSeriesInputChange} />
          </div>
        </div>
      {/*Condições*/}
      {
        !isFetching && series.length === 0 && seriesName.trim() === ''
        && <p><small>Por favor Insira o nome da série</small></p>
      }
      {
        !isFetching && series.length === 0 && seriesName.trim() !== ''
        && <p><small>Série não encontrada!</small></p>
      }
      {
        isFetching && <p><small>Carregando...</small></p> //<Loader/>
      }
      {
        !isFetching && <SeriesList list={this.state.series}/>
      }
      </div>
    );
  }
}

export default Series;
