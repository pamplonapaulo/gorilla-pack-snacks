import styled from 'styled-components'

const Button = () => (
  <>
    <Btn>{'Button'}</Btn>
  </>
)

const Btn = styled.button`
  background: #2da650;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  padding: 0.7em 1em;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.2s;
  color: rgba(0, 0, 0, 0.9);
  text-align: center;
  width: 140px;
`

export default Button
