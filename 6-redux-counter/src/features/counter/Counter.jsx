/* eslint-disable no-unused-vars */
import { increment, decrement, incrementByAmount, selectCounterValue, incrementIfOdd, incrementAsync } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./counter.css";

function Counter() {
  const dispatch = useDispatch();
  const countValue = useSelector(selectCounterValue);
  const [incrementAmount, setIncrementAmount] = useState("5");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <div className="row">
        <button className="button" onClick={() => dispatch(increment())}>
          Incrementar
        </button>
        <span className="value">{countValue}</span>
        <button className="button" onClick={() => dispatch(decrement())}>
          Decrementar Valor
        </button>
      </div>

      <div className="row">
        <input
          type="text"
          className="textbox"
          onChange={(e) => setIncrementAmount(e.target.value)}
          value={incrementAmount}
        />
        <button className="button" onClick={() => dispatch(incrementByAmount(incrementValue))}>
            Agregar Valor Incremento
        </button>

        <button className="button" onClick={ () => dispatch(incrementIfOdd(incrementValue)) }>
            Incremento Impar
        </button>

        <button className="asyncButton button" onClick={ () => dispatch(incrementAsync(incrementValue))}>
            Incrementar Async
        </button>
      </div>
    </>
  );
}

export default Counter;
