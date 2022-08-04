import React from 'react'
import { CardBody, Card } from 'reactstrap'

export default function CartHeader() {
  return (
    <div>
        <Card className='my-2 bg-success'> 
            <CardBody>
            <h1 className='text-center my-3'>Restaurant Cart</h1>
            </CardBody>
        </Card>
       
    </div>

  )
}
