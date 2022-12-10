import React from 'react'
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer>
        <div className={styles.footerWrapper}>
          <button className={styles.top} >Voltar para o topo</button>
          <div className={styles.footer}>
            <div >
              <div className={styles.contenedor}>
                <div className='hola'>
                  
                  <img src="./images/DH.png" alt='DH-logo' className={styles.DHlogo} />
                  </div>
                        <div className={styles.iconos}>
                        <img src="./images/ico-facebook.png" alt='facebook-logo' className={styles.icono}/>
                        <img src='./images/ico-instagram.png' alt='instagram-logo' className={styles.icono}/>
                        <img src='./images/ico-tiktok.png' alt='tiktok-logo' className={styles.icono}/>
                        <img src='./images/ico-whatsapp.png' alt='whatsapp-logo' className={styles.icono}/>
                        </div>
              </div>
            </div>
          </div>
        </div>

        
        
    </footer>
  )
}

export default Footer
