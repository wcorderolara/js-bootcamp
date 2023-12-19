/* eslint-disable react/prop-types */
function Details({departamento}) {
  return (
    <section className="mt-4">
      <div className="border-bottom">
        <h3>Detalle del Departamento</h3>
      </div>
      <section className="row g-3 py-4">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <p>{departamento.ciudad}</p>
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  <b>No. Departamento</b> {departamento.id}
                </li>
                <li className="list-group-item">
                  <b>A&ntilde;o Censo</b> {departamento.fechaPrimerCenso}
                </li>
                <li className="list-group-item">
                  <b>Poblaci&oacute;n </b>
                  {departamento.poblacionPrimerCenso.toLocaleString("es-GT")}
                </li>
                <li className="list-group-item">
                  <b>A&ntilde;o Censo</b> {departamento.fechaUltimoCenso}
                </li>
                <li className="list-group-item">
                  <b>Poblaci&oacute;n</b>{" "}
                  {departamento.poblacionUltimoCenso.toLocaleString("es-GT")}
                </li>
                <li className="list-group-item">
                  <b>Incremento Poblaci&oacute;n (%): </b>
                  {parseFloat(
                    ((departamento.poblacionUltimoCenso -
                      departamento.poblacionPrimerCenso) /
                      departamento.poblacionPrimerCenso) *
                      100
                  ).toFixed(2)}
                  %
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="text-center">
            <img src={departamento.srcImg} className="img-thumbnail" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Details;
