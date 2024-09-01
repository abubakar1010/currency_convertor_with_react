
import './App.css'

import img from './assets/background.jpg'
import useCurrency from './hooks/useCurrencyInfo/useCurrency'

function App() {

  const currency = useCurrency('bdt')
  console.log(currency);
  


  return (
    <>
    
    <div
    style={{
      backgroundImage: `url(${img})`,
    }}
      className=" w-screen h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center relative ">
        
        <div className=' bg-[#908d8dae] px-12 py-6 text-white shadow-xl rounded-sm space-y-4 '>
          <div className=' bg-white py-12 px-8 w-[770px] rounded-md flex justify-between items-center gap-20'>
            <div className=' flex flex-col gap-4'>
              <label className=' text-gray-400 text-lg font-medium' htmlFor="">From</label>
              <input type="text" name="" id="" className=' px-4 py-2 outline-none bg-gray-500 rounded-md' />
            </div>
            <div className=' flex flex-col gap-4'>
              <label className=' text-gray-400 text-lg font-medium' htmlFor="">Currency Type</label>
              <select name="" id="" className=' px-4 py-2 bg-gray-600'>
                <option  value="USD">USD</option>
                <option value="BDT">BDT</option>
              </select>
            </div>
          </div>
          <div className=' bg-white py-12 px-8 w-[770px] rounded-md flex justify-between items-center gap-20'>
            <div className=' flex flex-col gap-4'>
              <label className=' text-gray-400 text-lg font-medium' htmlFor="">To</label>
              <input type="text" name="" id="" className=' px-4 py-2 outline-none bg-gray-500 rounded-md' />
            </div>
            <div className=' flex flex-col gap-4'>
              <label className=' text-gray-400 text-lg font-medium' htmlFor="">Currency Type</label>
              <select name="" id="" className=' px-4 py-2 bg-gray-600'>
                <option  value="USD">USD</option>
                <option value="BDT">BDT</option>
              </select>
            </div>
          </div>
          <button className=" w-full bg-[#744895] text-white py-5 rounded-md text-xl uppercase" >Convert BDT To USD</button>
        </div>
        <div>
          <button className=" absolute top-[40%] right-[46%] bg-[#744895] text-white px-9 py-3 rounded-md text-xl uppercase" >Swap</button>
        </div>

    </div>

    </>
  )
}

export default App
