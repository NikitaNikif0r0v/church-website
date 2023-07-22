'use client';

import { Container, Dropdown, DropdownButton, Nav, NavDropdown, Navbar } from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar bg='primary' data-bs-theme='dark'>
            <Container>
                <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='#home'>Home</Nav.Link>
                    <Nav.Link href='#features'>Features</Nav.Link>
                    <NavDropdown id='dropdown-basic-button' title='Dropdown button'>
                        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
                        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}
