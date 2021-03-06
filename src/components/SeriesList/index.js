import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


// const SeriesListItem = ({series}) => (
//     <li><Link to={`/serie/${series.show.id}`}>{series.show.name}</Link></li>
// )
const SeriesListItem = ({series}) => (
    <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-3 mx-auto">
      <Link to={`/serie/${series.show.id}`} title={series.show.name}>
          <div className="card">
            {
              series.show.image !== null && <img alt={series.show.name} src={series.show.image.medium}/>
              || series.show.image == null && <img alt={series.show.name} style={{height: 295}}/>
            }
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
