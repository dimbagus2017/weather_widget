import React from 'react'

export default (props) => {
  const { title, icon, degrees, wind, location, unitsType, speed } = props;
  return (
    <div>
        <div className="row">
            <div className="col-lg-12">{title}</div>
        </div>

        <div className="row">
            <div className="col-lg-6">
                <img src={'http://openweathermap.org/img/w/' + icon + '.png'}></img>
            </div>
            <div className="col-lg-6">
                {location}
                <div className='degrees'>{degrees}&deg;</div>
                {wind && <div>Wind{' '}<span className='wind'>{speed}</span> {unitsType === 'metric' ? <span>km/h</span> : <span>mph</span>}</div>}
            </div>
        </div>
    </div>
)
}
