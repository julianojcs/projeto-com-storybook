import styled from 'styled-components'
import Button from '../src/components/Button'

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  width: 400px;
  margin: 0 auto;
  background-color: #eef7fa;
  padding: 20px 30px 20px 15px;
  border: 1px solid #00000010;
  border-radius: 5px;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;
  color: #333333;
  align-items: flex-start;

  &:hover,
  &:focus {
    border-color: #1ea7fd50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }
`

export default function HomePage() {
  return (
    <>
      <Wrapper>Welcome to Next.js!</Wrapper>
      <Button label='Click me' color='#333' bgColor='#eee' />
    </>
  )
}
