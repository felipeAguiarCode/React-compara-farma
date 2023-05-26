import 'bootstrap/dist/css/bootstrap.min.css'
import './Product-page.css'
import { useState } from 'react'

import {
  SideMenu,
  UnitTable,
  MainHeader
} from '../../components';
import { PointAdd } from '../../components/PointAdd/PointAdd';


function ProductPage() {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(!showModal)
  };

  const handleCloseModal = () => {
    setShowModal(false)
  };

  // const handleAdd = () => {
  //   console.log('Dados cadastrados:');
  // }

  return (
    <>
      <div>

        <div id="main-header">
          <MainHeader />
        </div>

        <div id="content-area">

          <div id="menu-area">
            <SideMenu />
          </div>

          <div id="content-right-area">
            <div>
              <h1>
                PONTOS DE NEGÓCIO
              </h1>
            </div>
            <div id="table-area">
              <UnitTable />
            </div>
          </div>


        </div>
      </div>

      {showModal &&
        <PointAdd
          onAdd={handleOpenModal}
          onClose={handleCloseModal}
        />
      }

    </>
  )
}

export default ProductPage