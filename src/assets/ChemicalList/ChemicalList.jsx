import React from 'react'
import {Container} from "reactstrap"
import ChemicalTable from './ChemicalTable'
import ChemicalAdd from './ChemicalAdd'
import { addChemical } from '../Redux/chemicalSlice'
import "./ChemicalCSS/ChemicalList.css"
import { useSelector, useDispatch } from 'react-redux'
export default function ChemicalList() {




  return (
    <div className="chemicalList mx-auto d-flex align-items-center justify-contain-center">
        <Container>
            <ChemicalAdd addChemical={addChemical}/>
            <ChemicalTable/>
        </Container>
    </div>
  )
}
