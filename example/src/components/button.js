import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border-radius: 10px;
  color: white;
`

export default function button() {
    return (
        <div>
            <Button> Comprar </Button>
        </div>
    )
}
