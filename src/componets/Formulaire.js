import React from 'react'
import Form from 'react-bootstrap/Form';


function Formulaire() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      
    <div style={{width:"50%", marginTop:"50px"}}>
<Form.Group className="mb-3">
        <Form.Label>Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
      </div>
      </div>
  )
}

export default Formulaire