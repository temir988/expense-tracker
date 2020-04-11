import React, { useContext } from "react";
import { GlobalContext } from "../contex/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  let cls = transaction.amount > 0 ? "plus" : "minus";
  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <li className={cls}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
