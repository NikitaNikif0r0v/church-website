import styles from './styles.module.css'
//import styles from '../globals.css'

export default function Header() {
    return (
      <div className= {styles.wrapper}>
        <div className= {`${styles.logo} ${styles.logo2}`}>
            <a href="#">
                <h1>rijecbozija</h1>
            </a>
        </div>
        <span id="burger" className= {styles.burger}>
            <span className= {styles.burger_line}></span>
            <span className= {styles.burger_line}></span>
            <span className= {styles.burger_line}></span>
        </span>
                <nav id="b_menu" className= {styles.menu}> 
                    <ul id="menu" className= {styles.menu_ul}>
                        <li >
                            <p>Naslovna</p>
                        </li>
                        <li ><a href="#" className= {styles.hover}>O Nama</a></li>
                        <li ><a href="#help" className= {styles.hover}>Istorija</a></li>
                        <li ><a href="#footer" className= {styles.hover}>Naša Uvijerenja</a></li>
                    </ul>
                </nav>
      </div>
    )
  }