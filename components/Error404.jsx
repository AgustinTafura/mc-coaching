import Link from "next/link"
import styles from './Error404.module.css'

const Error404 = () => {

  return (
      <div id={styles.notfound}>
        <div className={styles.notfound}>
            <div className={styles.notfoundBg}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <h1>oops!</h1>
            <h2>Error 404: <br/> Página No Encontrada</h2>
            <Link href="/">
                <a className="btn btn-md btn-primary display-44" >volver al Inicio</a>
            </Link>
            {/* <div className={styles.notfoundSocial}>
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-pinterest"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a>
            </div> */}
        </div>
      </div>
  )
}

export default Error404
