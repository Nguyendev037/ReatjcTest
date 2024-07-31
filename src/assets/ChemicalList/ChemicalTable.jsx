import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { deleteChemical } from "../Redux/chemicalSlice";
export default function ChemicalTable() {
  const ChemicalList = useSelector((state) => state.chemicals.chemicals);
  console.log("ChemicalList: ", ChemicalList);

  const dispatch = useDispatch();
  const deleteChemicalID = (id) => {
    dispatch(deleteChemical(id));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Chemical Name</th>
          <th>Formular</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {ChemicalList && ChemicalList.map((chemic, index) => {
          return (
            <tr key={index}>
              <th scope="row">{chemic.id}</th>
              <td>{chemic.name}</td>
              <td>{chemic.formula}</td>
              <td>
                <Button className="mx-3 btn btn-success">Update</Button>
                <Button onClick={()=>{deleteChemicalID(chemic.id)}} className="btn btn-warning">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
