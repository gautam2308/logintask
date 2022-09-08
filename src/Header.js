import { Navbar,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

function Header()
{
    return(
        <div>
         <Navbar bg="dark" variant="dark">
    
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">

            <Link to='/Add'>Add Product</Link>
            <Link to='/Update'>Update Product</Link>
            <Link to='/Login'>Login Product</Link>
            <Link to='/Registration'>Registration Product</Link>

          </Nav>
        
       
      </Navbar>
        </div>
    )
}
export default Header;