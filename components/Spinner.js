
import Image from 'next/image'
import logo from '../public/logoB.png'

export const Spinner = () => {

    return (
        <div className='loadingComponent m-0 row justify-content-center aligne-items-center'>
            <div>
                <Image  className='' src={logo} alt=""  width={522} height={118} />
                <div className='col-12'>
                    <div className="spinner-grow bounce1" role="status">
                        <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow bounce2" role="status">
                        <span className="sr-only"></span>
                    </div>
                    <div className="spinner-grow bounce3" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>    
            
        </div>
        )
}