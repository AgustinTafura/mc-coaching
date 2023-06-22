import emailjs from 'emailjs-com';
import { useState } from 'react';
import { sections } from '../data'
import axios from 'axios';

const ContactForm = ({...props}) => {
  const optionsSelector = []

  const servicesList = sections.find(element => element.name === 'servicios')['list']
  
  servicesList.forEach(service=>{
    service.products ?
    service.products.map((product)=>optionsSelector.push(`${product.title} - ${service.name}` ))
    : optionsSelector.push(service.name)
  })

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault()
    const formData = {}
    const inputs = e.target

    // for (let index = 0; index < inputs.length-1; index++) {
    //   const element = inputs[index];
    //   formData[element.name] = element.value
    // }

    // if (!emailSent) {
    //     emailjs.send(
    //         process.env.NEXT_APP_EMAILJS_YOUR_SERVICE_ID,
    //         process.env.NEXT_APP_EMAILJS_YOUR_TEMPLATE_ID_THANKSFORYOURPURCHASE,
    //         formData,
    //         process.env.NEXT_APP_EMAILJS_YOUR_USER_ID,
    //     ).then(() => {
    //         setEmailSent(true)
    //     }).catch((err)=>{
    //         setEmailError(true)
    //     });            
    // }
        // Agrega aquí cualquier otro campo que necesites para tu lista de Mailchimp
      // }
        const data = {
          "email_address": "agustin@test.com",
          "status": "subscribed",
          "merge_fields": {
            "FNAME": "test nombre",
            "LNAME": "test apellido"
          }   
      }
      
        axios.post(`https://us2.api.mailchimp.com/3.0/lists/6493dd146b/members`, data, {
          headers: {
            'Authorization': `Bearer 2da119ab5fb6fa49a2bcb326ece6d84f`,
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(11,response);
          // Aquí puedes mostrar un mensaje de confirmación al usuario o redirigirlo a una página de agradecimiento
        })
        .catch(error => {
          console.log(22,error);
          // Aquí puedes mostrar un mensaje de error al usuario o hacer algo para manejar el error
        });
    
      }
    // };
  

  return (
  <section className="form cid-rT0gNghYIy mt-5 border-bottom" id="form1-4x">
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
                  emailError &&
                  <div data-form-alert-danger="" className="alert alert-danger col-12 rounded-0">Oops...! Tuvimos
                    un problema! 
                    <br />
                    Intentalo más tarde o <a href='/contactame' style={{color: 'var(--bs-secondary)'}}><b>contactame</b></a> por otro medio.</div>
                }
              </div>
              {
                !emailSent &&

                <>
                  <div data-for="name" className="col-lg-6 col-md-12 col-sm-12 form-group mb-3">
                    <input required type="text" name="name" placeholder="Nombre" data-form-field="name"
                      className="form-control display-77" id="name-form1-4x"></input>
                  </div>
                  <div data-for="email" className="col-lg-6 col-md-12 col-sm-12 form-group mb-3">
                    <input required type="email" name="email" placeholder="E-mail" data-form-field="email"
                      className="form-control display-77" id="email-form1-4x" ></input>
                  </div>
                  <div data-for="phone" className="col-lg-6 col-md-12 col-sm-12 form-group mb-3">
                    <input required type="number" name="phone" placeholder="Teléfono" data-form-field="url"
                      className="form-control display-77" id="phone-form1-4x" ></input>
                  </div>

                  <div data-for="select" className="col-lg-6 col-md-12 col-sm-12 form-group mb-3">
                    <select required name="select" data-form-field="select"
                      className="form-control display-77 rounded-0" id="select-form1-4x">
                      <option value="">Selecciona un SERVICIO</option>
                      {
                        optionsSelector?.map((option,key)=><option key={key} value={option} className="text-uppercase">{option}</option>)
                      }
                    </select>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="textarea">
                    <textarea name="textarea" placeholder="Dejame tu mensaje aquí" data-form-field="textarea"
                      className="form-control display-77" id="textarea-form1-4x"></textarea>
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
