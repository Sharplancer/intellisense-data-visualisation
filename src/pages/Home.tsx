import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
    </>
  );
}

export default Home