import React from 'react';

const Episode = ({episodes}) => {
  const { id,number,season,name,summary } = episodes;
  return (
    <tr>
      <td key={id}>S{season}E{number}</td>
      <td>{name}</td>
      <td><p className="text-justify" dangerouslySetInnerHTML={{__html:summary}} /></td>
    </tr>
  )
}

const EpisodesList = props => {
  //console.log(props.episodes);
  return (
      <div>
        Episódios
        <table className="table table-sm table-bordered table-responsive">
          <thead>
            <tr>
              <th>#</th>
              <th>Título</th>
              <th>Sumário</th>
            </tr>
          </thead>
          <tbody>
            {props.episodes.map(episodes => (
              <Episode episodes={episodes} key={episodes.id}/>
              )
            )}
         </tbody>
      </table>
      </div>
  )
}

export default EpisodesList;
