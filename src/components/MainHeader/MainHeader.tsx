import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap-icons/font/bootstrap-icons.css'

function MainHeader() {
  return (
    <>
      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <i className='bi bi-capsule'></i>
            {' '}
            Compara farma
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default MainHeader;