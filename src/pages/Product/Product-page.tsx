import 'bootstrap/dist/css/bootstrap.min.css'
import './Product-page.css'

import {
  SideMenu,
  UnitTable,
  MainHeader
} from '../../components';


function ProductPage() {
  return (
    <>
      <div>
        <MainHeader />

        <div id="content-area">

          <div id="menu-area">
            <SideMenu />
          </div>

          <div id="content-right-area">
            <div>
              <button type="button" className="btn btn-success">Cadastrar Novo Ponto</button>
            </div>
            <div id="table-area">
              <UnitTable />
            </div>
          </div>


        </div>
      </div>

    </>
  );
}

export default ProductPage;