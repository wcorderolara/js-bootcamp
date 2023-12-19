/* eslint-disable react/prop-types */
import { useState } from "react";
import { departamentos } from "../../data/data";
import Alert from "./components/Alert";
import TableData from "./components/TableData";
import Details from "./components/Details";

function Censo({ children }) {
  const [departamento, setDepartamento] = useState("");

  const onSelectDepartamento = (index) => {
    setDepartamento(departamentos[index])
  }

  return (
    <>
      {children}
      <TableData departamentos={departamentos} onSelectDepartamento={onSelectDepartamento}/>

      {departamento ? (
        <Details departamento={departamento}  />
      ) : (
        <Alert />
      )}
    </>
  );
}

export default Censo;
