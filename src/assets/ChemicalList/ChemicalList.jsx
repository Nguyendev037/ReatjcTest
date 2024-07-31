import React from 'react'
import {Container} from "reactstrap"
import ChemicalTable from './ChemicalTable'
import ChemicalAdd from './ChemicalAdd'
import "./ChemicalCSS/ChemicalList.css"

export default function ChemicalList() {

  return (
    <div className="chemicalList mx-auto d-flex align-items-center justify-contain-center">
        <Container>
          <h2 className='dp-felex text-center mb-3'>
            Chemical Information
          </h2>
            <ChemicalAdd />
            <ChemicalTable/>
        </Container>
    </div>
  )
}
