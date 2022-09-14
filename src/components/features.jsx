import "../my-styles.css"
export const Features = (props) => {
  return (
    <div id='features' className='text-center pt-60 pb-40'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title p-40'>
          <h2 className="h2-como-funciona">¿Cómo funciona?</h2>
          {/* eslint-disable-next-line */}
          <a className='anchor-cf' id='comofun'></a>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-xs-6 col-md-3 min-height-260 margin-mobile-cf'>
                  {' '}
                  <div className="div-como-funciona">
                  <img className="iconos" src={d.icon} alt=""></img>
                  </div>
                  <h3 className="">{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
