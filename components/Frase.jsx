import Image from 'next/image'
import SignaturePic from '../public/firma.png'


const Frase = () => {

  return (
  <section className="cid-rT0fzaj97x" id="info1-3z">
    <div className="container">
      <div className="row justify-content-center">
        <div className="mbr-black col-md-12 col-lg-6 align-center">
          <h4 className="mbr-section-subtitle mbr-regular mbr-fonts-style display-44">BIENVENIDOS</h4>
          <h3 className="mbr-section-title mbr-bold mbr-black pb-4 mbr-fonts-style display-22">
            El coaching es un arte, y la base está en establecer una relación de confianza y respeto mutuo.
          </h3>
          <Image className="pb-3" src={SignaturePic} alt="Marcela Caputo - Coaching - firma"/>
        </div>
      </div>
    </div>
</section>
  )
}

export default Frase
