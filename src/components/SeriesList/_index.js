import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


// const SeriesListItem = ({series}) => (
//     <li><Link to={`/serie/${series.show.id}`}>{series.show.name}</Link></li>
// )
const SeriesListItem = ({series}) => (
    <div className="col-12 col-lg-3 mb-3">
      <Link to={`/serie/${series.show.id}`} title={series.show.name}>
          <div className="card">
            {series.show.image !== null && <img alt="Imagem da série" src={series.show.image.medium}/>}
          </div>
      </Link>
    </div>
)

const SeriesList = props => {
  return (
    <div>
      <div className="row pt-5">
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id}/>
        )
      )}
      </div>
    </div>
  )
}

export default SeriesList;
