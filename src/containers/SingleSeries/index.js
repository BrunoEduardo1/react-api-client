import React, { Component } from 'react';
import '../../bootstrap.min.css';


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
  }
  render(){
    const { show } = this.state;
    {show !== null && console.log(show)}
    return (
      <div className="container">

      {
        show !== null
        &&
        <div className="row">
          <div className="col my-auto">
            <img alt="Imagem da série" src={show.image.medium}/>
          </div>
          <div className="col mt-5">
              <div className="text-justify" dangerouslySetInnerHTML={{__html:show.summary}} />
              <ul className="list-unstyled">
                <li>{show.name}</li>
                <li>Nota - {show.rating.average}</li>
                <li>Lançamento - {show.premiered}</li>
                <li>Episodios - {show._embedded.episodes.length}</li>
              </ul>
          </div>
        </div>
      }
      </div>
    )
  }
}

export default SingleSeries;
