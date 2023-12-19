// eslint-disable-next-line react/prop-types
function TableData({departamentos, onSelectDepartamento}) {
  return (
    <section className="row g-4 py-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ciudad</th>
              <th scope="col">A&ntilde;o Censo</th>
              <th scope="col">Poblaci&oacute;n 2002</th>
              <th scope="col">A&ntilde;o Censo</th>
              <th scope="col">Poblaci&oacute;n 2018</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              // eslint-disable-next-line react/prop-types
              departamentos.map((depto, index) => (
                <tr key={depto.id}>
                  <td>{depto.id}</td>
                  <td>{depto.ciudad}</td>
                  <td>{depto.fechaPrimerCenso}</td>
                  <td>
                    {depto.poblacionPrimerCenso.toLocaleString("es-GT")} habs.
                  </td>
                  <td>{depto.fechaUltimoCenso}</td>
                  <td>
                    {depto.poblacionUltimoCenso.toLocaleString("es-GT")} habs.
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={ () => onSelectDepartamento(index) }>
                      Ver Detalle
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
  )
}

export default TableData