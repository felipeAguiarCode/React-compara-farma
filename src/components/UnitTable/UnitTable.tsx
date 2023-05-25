import 'bootstrap/dist/css/bootstrap.min.css'

import TableRow from './UnitTableRow'
import { downloadExcel } from '../../services/downloadExcel'
import { useEffect, useState } from 'react'
import { fetchDataById } from '../../services/pointsService'


function UnitTable() {

  const [dataPointss, setDataPointss] = useState([]);

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const response = await fetchDataById(22)
        setDataPointss(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    };

    fetchPoints();
  }, [])

  console.log(dataPointss)
  const dataPoints = [
    {
      number: 2,
      point: 'Farma Conde',
      uf: 'SP',
      city: 'São Paulo',
      uuid: '122'
    },
    {
      number: 3,
      point: 'Farma Norte',
      uf: 'SP',
      city: 'São Paulo',
      uuid: '455'
    },
  ]

  const handleDownload = (uuid: string) => {
    downloadExcel(uuid)
  }


  return (
    <div className="">
      <table
        className="
          table 
          table-bordered
          table-success
          table-hover
        ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ponto</th>
            <th scope="col">UF</th>
            <th scope="col">Cidade</th>
            <th scope="col">CSV</th>
          </tr>
        </thead>
        <tbody>

          {dataPoints.map((item, index) => (
            <TableRow
              key={index}
              number={item.number}
              point={item.point}
              uf={item.uf}
              city={item.city}
              onClick={() => handleDownload(item.uuid)}
            />
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default UnitTable