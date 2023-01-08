import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleXmark } from '@fortawesome/free-solid-svg-icons'



const ImgModal = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" style={{height: 'auto'}}>
          <div className="modal-content border-0" style={{backgroundColor:'transparent'}}>
            <div className="modal-header border-0">
              <FontAwesomeIcon 
                  icon={faCircleXmark} size="3x" color='var(--bs-primary)' style={{right: 0, position: 'absolute',top: '-20px'}}
                  data-bs-dismiss="modal" aria-label="Close" type='button'
              />
          </div>
          <picture>
              <img src="/img/certificado.jpeg" width={'100%'} alt="coaching emprendedores" />
          </picture>
          </div>

      </div>
  </div>
  )
}

export default ImgModal
