import 'bootstrap/dist/css/bootstrap.min.css'
import './NewPoint.css'
import { useState } from 'react'

import {
  SideMenu,
  MainHeader
} from '../../components';

interface FormData {
  id_user: number;
  id: number;
  uf: string;
  name: string;
  uuid: string;
  city: string;
}


function NewPointPage() {
  const [formData, setFormData] = useState<FormData>({
    id_user: 22,
    id: 6,
    uf: '',
    name: '',
    uuid: '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    alert('oi')

    console.log(formData)
  }


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
                ADICIONE UM NOVO PONTO
              </h1>
              <hr></hr>
            </div>
            <div id="table-area">

              <div className="container">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{ paddingRight: '5px' }}>
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      style={{ textAlign: 'left' }}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="city" className="form-label" style={{ paddingRight: '5px' }}>
                      Cidade
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      style={{ textAlign: 'left' }}
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="uf" className="form-label" style={{ paddingRight: '50px' }}>
                      UF
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="uf"
                      name="uf"
                      style={{ textAlign: 'left' }}
                      value={formData.uf}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="uuid" className="form-label" style={{ paddingRight: '30px' }}>
                      UUID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="uuid"
                      name="uuid"
                      style={{ textAlign: 'left' }}
                      value={formData.uuid}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input type="hidden" name="id_user" value={formData.id_user} />
                  <input type="hidden" name="id" value={formData.id} />
                  <button type="submit" className="btn btn-primary" style={{ marginLeft: '5px' }}>
                    Salvar
                  </button>
                </form>
              </div>



            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default NewPointPage