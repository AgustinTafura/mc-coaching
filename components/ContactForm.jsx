import emailjs from 'emailjs-com';
import { useState } from 'react';

const ContactForm = () => {

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const submitForm = (e) => {
    e.preventDefault()
    const formData = {}
    console.log(e.target)
    const inputs = e.target
    console.log(e)
    for (let index = 0; index < inputs.length-1; index++) {
      const element = inputs[index];
      formData[element.name] = element.value
    }
    console.log(formData)
    if (!emailSent) {
        emailjs.send(
            process.env.NEXT_APP_EMAILJS_YOUR_SERVICE_ID,
            process.env.NEXT_APP_EMAILJS_YOUR_TEMPLATE_ID_THANKSFORYOURPURCHASE,
            formData,
            process.env.NEXT_APP_EMAILJS_YOUR_USER_ID,
        ).then(() => {
            setEmailSent(true)
        }).catch((err)=>{
            setEmailError(true)
        });            
    }

  }

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
                    <input required type="number" name="phone" placeholder="Telefono" data-form-field="url"
                      className="form-control display-77" id="phone-form1-4x" ></input>
                  </div>

                  <div data-for="select" className="col-lg-6 col-md-12 col-sm-12 form-group mb-3">
                    <select required name="select" data-form-field="select"
                      className="form-control display-77 rounded-0" id="select-form1-4x">
                      <option value="">Selecciona un servicio</option>
                      <option value="Group">Group</option>
                      <option value="Individual">Individual</option>
                    </select>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group mb-3" data-for="textarea">
                    <textarea name="textarea" placeholder="Message" data-form-field="textarea"
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
