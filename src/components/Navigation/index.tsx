'use client';
import { Container, Dropdown, DropdownButton, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import styles from './styles.module.scss';
import bgImage from 'src/assets/images/jcrb-title.png';
import logoImage from '../../assets/images/photo_2023-07-26_11-49-50.jpg'
//import Router from 'next/dist/server/router';
//import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import History from '../History';

export default function Navigation() {
    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage.src})` }}>
            <Navbar bg='transparent' data-bs-theme="bg='transparent'" className={styles.navbar}>
            <Container className={styles.container}>
                <Navbar.Brand href='#home' className={`${styles.logo} ${styles.logo2}`}
                style={{ backgroundImage: `url(${logoImage.src})` }}></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link href='#home' className={styles.menu_nav}>Naslovna</Nav.Link>
                    <NavDropdown id='dropdown-basic-button' title='O Nama' className={styles.menu_nav}>
                        <Dropdown.Item href='/history'>Istorija</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>Naša Uvijerenja</Dropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='#features' className={styles.menu_nav}>Dešavanja</Nav.Link>
                    <NavDropdown id='dropdown-basic-button' title='Druge Službe' className={styles.menu_nav}>
                        <Dropdown.Item href='#/action-1'>Kids Club</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>Tinejdžer</Dropdown.Item>
                        <Dropdown.Item href='#/action-3'>Božićni Program</Dropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            {/* ReactDOM.render( */}
  {/* <Router> */}
    {/* <Switch> */}
      {/* <Route path="/" element={<Navigation />} /> */}
      {/* <Route path="/history" element={<History />} /> */}
      {/* Other components and routes */}
    {/* </Switch> */}
  {/* </Router>, */}
{/* //   document.getElementById(root) */}
{/* ); */}
            
        </div>
    );
}
