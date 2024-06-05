import React from 'react'
import styled from 'styled-components'

const Buttons = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 800px) {
    height: 100%;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 0!important;
  }

  & > button {
    border: none;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    background: #3ae121;
    transition: background .2s ease;
    &:hover {
      background: white;
    }
    color: black;
    cursor: pointer;
  }
`

const Welcome = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-image: url('banner.png'); 
  background-size: cover;
  background-position: center; 

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 0;
    & > div {
      padding: 40px;
    }
  }
`

export function WelcomeBanner() {
  return (
    <Welcome>
      <div>
        <h1></h1>
        <p>
          
        </p>
      </div>
      <Buttons>
        <button onClick={() => window.open('https://x.com/pepescasinosol?t=x-bQgAeoFsIHJYWSTh8BGw&s=09')}>
          🚀 X
       </button>
        <button onClick={() => window.open('http://pepescasino.fun/')}>
          👨‍💻 Website
        </button>
        <button onClick={() => window.open('https://t.me/+P_d-c8BmcMdkZDZk')}>
          💬 Telegram
        </button>
      </Buttons>
    </Welcome>
  )
}
