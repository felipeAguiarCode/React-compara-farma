interface TableRowProps {
  number: number;
  point: string;
  uf: string;
  city: string;
  onClick: () => void;
}

function TableRow(props: TableRowProps) {


  return (
    <tr>
      <th scope="row">{props.number}</th>
      <td className="table-active">{props.point}</td>
      <td>{props.uf}</td>
      <td>{props.city}</td>
      <td>
        <button onClick={props.onClick}>
          <i className="bi bi-download"></i>
        </button>
      </td>
    </tr>
  )
}

export default TableRow