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
  }, [])

  return (
    <div className="flex flex-wrap mt-4 p-4 w-full">
      <Table title="Table"></Table>
      <div className="flex w-full">
        <LineGraphD3 title="LineGraph with D3.js"></LineGraphD3>
        <LineGraphChart title="LineGraph with Chart.js"></LineGraphChart>
      </div>
    </div>
  );
}

export default Home