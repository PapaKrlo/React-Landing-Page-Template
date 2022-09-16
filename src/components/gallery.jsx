import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        

        <div className='col-md-8 col-md-offset-2 section-title'>
          
          <h2>Partners</h2>
          {/* eslint-disable-next-line */}
          <a className='anchor-p' id='part'></a>
          <p>
              Algunas de las compañias con las que estamos asociados para crear una diferencia.
              <br></br>Te interesa asociarte con nosotros?
          </p>
          <button className="btn btn-custom btn-gallery">Asóciate ahora</button>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-4 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
