import image from "../images/100percent-prestamo.png"
import "../my-styles.css"
export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container '>
        <div className='section-title'>
          <img 
          className="wide-image"
          src={image}
          alt="Imagen prestamo"
          />
      
        </div>
        <div className='row p-40'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 min-height-260'>
                  {' '}
                  <img className="iconos" src={d.icon} alt=""/>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
