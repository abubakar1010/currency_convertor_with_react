
import { useState } from 'react';
import './App.css'

import img from './assets/background.jpg'
import useCurrency from './hooks/useCurrencyInfo/useCurrency'
import InputBox from './InputBox';

function App() {


  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("bdt")
  const [to, setTo] = useState("usd")
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currency = useCurrency(from)
  // console.log(currency);

  const options = Object.keys(currency)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount( amount * currency[to])
  }


  return (
    <>
    
    <div
    style={{
      backgroundImage: `url(${img})`,
    }}
      className=" w-screen h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center relative ">
        
        <form onSubmit={ (e) => {
          e.preventDefault()
          convert()
        }} action="">
        <div className=' bg-[#908d8dae] px-12 py-6 text-white shadow-xl rounded-sm space-y-4 '>
          <InputBox label={"from"} amount={amount} currencyOption={options} onCurrencyChange={ (currency) => setFrom(currency)} onAmountChange={ (amount) => setAmount(amount)} selectCurrency={from} />
          <InputBox label={"to"} amount={convertedAmount} currencyOption={options} onCurrencyChange={ (currency) => setTo(currency)} selectCurrency={to} />
          <button type='submit' className=" w-full bg-[#744895] text-white py-5 rounded-md text-xl uppercase" >Convert BDT To USD</button>
        </div>
        </form>
        <div>
          <button onClick={swap} className=" absolute top-[40%] right-[46%] bg-[#744895] text-white px-9 py-3 rounded-md text-xl uppercase" >Swap</button>
        </div>

    </div>

    </>
  )
}

export default App
