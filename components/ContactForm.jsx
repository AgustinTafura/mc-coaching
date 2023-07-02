import emailjs from 'emailjs-com';
import { useState } from 'react';
import { sections } from '../data'
import axios from 'axios';

const ContactForm = ({...props}) => {
  const optionsSelector = []

  const servicesList = sections.find(element => element.name === 'servicios')['list']
  
  // servicesList.forEach(service=>{
  //   service.products ?
  //   service.products.map((product)=>optionsSelector.push(`${product.title} - ${service.name}` ))
  //   : optionsSelector.push(service.name)
  // })
  servicesList.forEach(service=>{optionsSelector.push(service.name)})
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validateKeyPress = (event) => {
    var keyCode = event.keyCode || event.which;
    var keyValue = String.fromCharCode(keyCode);
    // Allow only numbers (keycodes 48-57)
    if (keyCode < 48 || keyCode > 57) {
      event.preventDefault();
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()
    setEmailError(false)
    const formData = {}
    const inputs = e.target

    for (let index = 0; index < inputs.length-1; index++) {
      const element = inputs[index];
      formData[element.name] = element.value
    }
    try {
      await axios.post('/api/subscribe', formData);
      setEmailSent(true)
    } catch (error) {
      const errorMessage = 'looks fake or invalid, please enter a real email address';
      error.response?.data?.response?.detail?.includes(errorMessage) || error.response?.data?.response?.title === "Member Exists" ?
        setEmailError('email') 
      : setEmailError(true)

      //send error tu admin
      const apiError = error.response?.data?.response?.detail?.includes("API")
      if (apiError) {
          emailjs.send(
              process.env.NEXT_APP_EMAILJS_YOUR_SERVICE_ID,
              process.env.NEXT_APP_EMAILJS_YOUR_TEMPLATE_ID_THANKSFORYOURPURCHASE,
              formData,
              process.env.NEXT_APP_EMAILJS_YOUR_USER_ID,
          )
      }

      const section = document.querySelector( '#contact-form' );
      section.scrollIntoView( { behavior: 'smooth', block: 'start' } )
      }
    };
  

  return (
  <section className="form cid-rT0gNghYIy mt-5 border-bottom" id="contact-form">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto mbr-form" data-form-type="formoid">
          <form action="" onSubmit={submitForm} className="mbr-form form-with-styler"
            data-form-title="Form Name">

            <div className="dragArea row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h6 className="mbr-setion-subtitle mbr-fonts-style display-44">TIENES ALGUNA DUDA</h6>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <h5 className="mbr-bold mbr-fonts-style pb-5 display-22 text-white">Contáctame
                </h5>
              </div>

              <div className="row g-0">
                {
                  emailSent &&
                  <div data-form-alert="" className="alert alert alert-primary col-12 rounded-0">
                    Hemos recibido tu mensaje y nos comuninicaremos contigo a la brevedad.
                    <br />
                    ¡Muchas gracias!
                  </div>
                }
                {
                  emailError && (
                    <div data-form-alert-danger="" className="alert alert-danger col-12 rounded-0">
                      Oops...! Tuvimos un problema! <br />
                      {emailError === 'email' ? (
                        <>
                          Revisa los errores indicados
                        </>
                      ) : (
                        <>
                          Inténtalo más tarde o <a href="/contactame" style={{ color: 'var(--bs-secondary)' }}><b>contáctame</b></a> por otro medio.
                        </>
                      )}
                    </div>
                  )
                }
              </div>
              {
                !emailSent &&

                <>
                  <div data-for="FNAME" className="col-lg-3 col-md-12 col-sm-12 form-group mb-3">
                    <input required type="text" name="FNAME" placeholder="Nombre" data-form-field="fname"
                      className="form-control display-77" id="fname-contact-form"></input>
                  </div>
                  <div data-for="LNAME" className="col-lg-3 col-md-12 col-sm-12 form-group mb-3">
                    <input required type="text" name="LNAME" placeholder="Apellido" data-form-field="lname"
                      className="form-control display-77" id="lname-contact-form"></input>
                  </div>
                  <div data-for="EMAIL" className="col-lg-6 col-md-12 col-sm-12 form-group mb-3">
                    <input required type="email" name="EMAIL" placeholder="E-mail" data-form-field="email"
                      className="form-control display-77" id="email-contact-form" ></input>
                      
                      {emailError === 'email' && <small style={{color:"#ffcce5"}}>Intenta con otro email <a href="/contactame" style={{ color: 'inherit',textDecoration: 'underline' }}><b>contáctame</b></a> por otro medio</small>}
                  </div>
                  <div data-for="MOBILE" className="col-lg-6 col-md-12 col-sm-12 form-group mb-3">
                    <input required type="text" name="MOBILE" placeholder="Teléfono" data-form-field="mobile"
                      className="form-control display-77" id="phone-contact-form"  pattern="[0-9]{6,}" minLength="6" title="Ingrese al menos 6 números"  onKeyPress={validateKeyPress}></input>
                  </div>

                  <div data-for="select" className="col-lg-6 col-md-12 col-sm-12 form-group mb-3">
                    <select required name="SERVICE" data-form-field="select"
                      className="form-control display-77 rounded-0" id="select-contact-form">
                      <option value="">Selecciona un SERVICIO</option>
                      {
                        optionsSelector?.map((option,key)=><option key={key} value={option} className="text-uppercase">{option}</option>)
                      }
                    </select>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="MESSAGGE">
                    <textarea name="MESSAGGE" placeholder="Dejame tu mensaje aquí" data-form-field="textarea"
                      className="form-control display-77" id="textarea-contact-form"></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 align-center">
                    <button type="submit" className="btn btn-primary display-44 py-3 px-5">ENVIAR</button>
                  </div>
                </>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactForm
