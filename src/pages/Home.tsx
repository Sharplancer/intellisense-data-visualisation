import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LineGraphChart from "../components/LineGraphChart";
import LineGraphD3 from "../components/LineGraphD3";
import Table from "../components/Table";
import { getReferencia } from "../store/slices/referenciaSlice";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReferencia());
  })

  return (
    <>
      <Table title="Table"></Table>
      <LineGraphD3 title="LineGraph with D3.js"></LineGraphD3>
      <LineGraphChart title="LineGraph with Chart.js"></LineGraphChart>
    </>
  );
}

export default Home