import React from "react";
import { Input, Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addChemical } from "../Redux/chemicalSlice";

import { useState, useEffect } from "react";
export default function ChemicalAdd() {

  const [newChem, setNewChem] = useState({
    name: null,
    formula: null,
  });

  const dispatch = useDispatch();

  let [newName, setName] = useState("");
  let [formu, setFormu] = useState("");

  const addNewChemical = () => {

    // setNewChem((newChem.name = newName));
    // setNewChem((newChem.formula = formu));
    // console.log("newChem: ", newChem);

    dispatch(addChemical({ newName, formu }));
    setFormu("");
    setName("");
  };

  return (
    <div className="mb-5">
      <Row>
        <Col className="col-lg-6">
          <h5>Chemical Name Input</h5>
          <Input
            value={newName}
            type="text"
            placeholder="Input Chemic Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Col className="col-lg-6 mb-3">
          <h5>Chemical Formula Input</h5>
          <Input
            type="text"
            value={formu}
            placeholder="Input Chemic Formula"
            onChange={(e) => setFormu(e.target.value)}
          />
        </Col>
        <Col className="col-lg-2">
          <Button
            className="btn btn-success"
            onClick={() => {
              addNewChemical();
            }}
          >
            Add New Chemical
          </Button>
        </Col>
      </Row>
    </div>
  );
}
