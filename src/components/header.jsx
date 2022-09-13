export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span> un hogar</span>
                </h1>
                <h2>
                  {props.data ? props.data.subtitle : 'Loading'}
                  <span></span>
                </h2>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#comofun'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Leer Más
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
