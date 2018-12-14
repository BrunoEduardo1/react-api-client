import React, { Component } from 'react';

class SingleSeries extends Component {
  state = {
    show: null
  }
  componentDidMount(){
    // this.setState({ seriesName: e.target.value, isFetching: true});
      const { id } = this.props.match.params
      fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({show: json}))
      console.log(this.state);
  }
  render(){
    const { show } = this.state;
    console.log(show)
    return (
      <div>
    
      {
        show !== null
        &&
        <div>
          <p>Nome da Serie - {show.name}</p>
          <p>Nota - {show.rating.average}</p>
          <p>Lançamento - {show.premiered}</p>
          <p>Episodios - {show._embedded.episodes.length}</p>
          <p>
            <img alt="Imagem da série" src={show.image.medium}/>
          </p>

        </div>
      }

      </div>
    )
  }
}

export default SingleSeries;
