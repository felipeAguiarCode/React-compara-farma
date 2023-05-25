import './SideMenu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


function SideMenu() {
  return (
    <div id="box" className='container-fluid'>
      <div className='row'>
        <div className='bg-dark'>
          <ul className="nav nav-pills flex-column">

            <li className="nav-item text-white fs-4">
              <a
                className="nav-link text-white fs-5" aria-current="page"
                href="#"
              >
                <i className='bi bi-house'></i>
                <span className='ms-2'>Pontos</span>
              </a>
            </li>


            {/* <li className="nav-item text-white fs-4">
              <a
                className="nav-link text-white fs-5" aria-current="page"
                href="#"
              >
                <i className='bi bi-people'></i>
                <span className='ms-2'>Users</span>
              </a>
            </li> */}

          </ul>

        </div>
      </div>
    </div>
  );
}

export default SideMenu;