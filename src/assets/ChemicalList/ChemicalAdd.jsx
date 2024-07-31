import React from "react";
import { Input, Row, Col, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addChemical } from "../Redux/chemicalSlice";

import { useState, useEffect } from "react";
export default function ChemicalAdd(prop) {
  const [text, setText] = useState("");

  const [newChem, setNewChem] = useState({
    name: "",
    formula: "",
  });

  const addNewChemical = () => {
    dispatchEvent(addChemical(newChem));
   
  };

  return (
    <div className="mb-3">
      <Row>
        <Col className="col-lg-5">
          <Input
            type="text"
            placeholder="Input Chemic Name"
            onChange={(e) =>
              setNewChem((state) => (state.name = e.target.value))
            }
          />
        </Col>
        <Col className="col-lg-5">
          <Input
            type="text"
            placeholder="Input Chemic Formula"
            onChange={(e) =>
              setNewChem((state) => (state.formula = e.target.value))
            }
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
