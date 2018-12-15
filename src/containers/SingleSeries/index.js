import React, { Component } from 'react';
import '../../bootstrap.min.css';
//import { Link } from 'react-router-dom';
import EpisodesList from '../../components/EpisodesList/episodes.js';


class SingleSeries extends Component {
  state = {
    show: null,
    episodesListC: false
  }
  componentDidMount(){
    // this.setState({ seriesName: e.target.value, isFetching: true});
      const { id } = this.props.match.params
      fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({show: json}))
  }

  handleClick = () => {
    !this.state.episodesListC && this.setState({episodesListC: true})
     this.state.episodesListC && this.setState({episodesListC: false})
  }

  render(){
    const { show } = this.state;
    {/*show !== null && console.log(show)*/}
    return (
      <div className="container">

      {
        show !== null
        &&
        <div className="row">
          <div className="col my-auto pt-5">
            {
              show.image !== null && <img alt={show.name} src={show.image.medium}/>
              || show.image == null && <img alt={show.name} style={{height: 295}}/>
            }
          </div>
          <div className="col mt-5">
              <div className="text-justify" dangerouslySetInnerHTML={{__html:show.summary}} />
              <table className="table table-sm table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Nota</th>
                    <th scope="col">Lançamento</th>
                    <th scope="col">Episódios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{show.rating.average}</td>
                    <td>{show.premiered}</td>
                    <td>{show._embedded.episodes.length}</td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="col-12 pt-5">
          <button type="button" className="btn btn-secundary" name="button" onClick={this.handleClick} >
            {
                !this.state.episodesListC && 'Listar Episódios' || this.state.episodesListC && 'Ocultar Episódios'
            }
          </button>
          {
            this.state.episodesListC &&
             <EpisodesList episodes={show._embedded.episodes}/>
          }
          </div>
        </div>
      }
      </div>
    )
  }
}

export default SingleSeries;
