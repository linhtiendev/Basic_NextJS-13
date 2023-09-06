"use client";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

const AppHeader = () => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
            <Link href={"/"} className="navbar-brand">
                LiTi
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/blogs"} className="nav-link">Blogs</Link>
            <Link href={"/facebook"} className="nav-link">Facebook</Link>
            <Link href={"/youtube"} className="nav-link">Youtube</Link>
            <Link href={"/tiktok"} className="nav-link">Tiktok</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default AppHeader;