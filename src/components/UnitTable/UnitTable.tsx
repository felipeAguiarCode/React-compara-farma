import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import { downloadExcel } from '../../services/downloadExcel'
import UnitTableRow from './UnitTableRow'

interface Data {
  city: string;
  id: number;
  id_user: number;
  name: string;
  uf: string;
  uuid: string;
}

export function UnitTable() {
  const [dataPoints, setDataPoints] = useState<Data[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://n8n.ninjadaautomacao.com/webhook/ifood/points?userid=22"
        );

        const json = await response.json()
        setDataPoints(json.points)
        setIsLoading(true)

      } catch (error) {
        console.error("Erro ao obter dados da API:", error)
      }
    }

    fetchData()
  }, [])

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

          {!isLoading &&
            <p>carregando...</p>
          }

          {isLoading &&
            dataPoints.map((item: Data, index: number) => {

              return <UnitTableRow
                key={index}
                city={item.city}
                uf={item.uf}
                number={item.id}
                point={item.name}
                onClick={
                  () => downloadExcel(item.uuid)
                }
              />
            })
          }

        </tbody>
      </table>
    </div>
  );
}

export default UnitTable
