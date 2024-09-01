

const InputBox = ({
    // eslint-disable-next-line react/prop-types
    label,onAmountChange, amount, onCurrencyChange, currencyOption = [], selectCurrency="usd", currencyDisabled= false
}) => {
  return (
    <>
      <div className=" bg-white py-12 px-8 w-[770px] rounded-md flex justify-between items-center gap-20">
        <div className=" flex flex-col gap-4">
          <label className=" text-gray-400 text-lg font-medium" htmlFor="">
            {label}
          </label>
          <input
            type="number"
            name=""
            id=""
            value={amount}
            className="px-4 py-2 outline-none bg-gray-500 rounded-md"
            onChange={ (e) =>{
                onAmountChange(Number(e.target.value))
            } }
          />
        </div>
        <div className=" flex flex-col gap-4">
          <label className=" text-gray-400 text-lg font-medium" htmlFor="">
            Currency Type
          </label>
          <select 
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={ (e) => {
            onCurrencyChange(e.target.value)
          }}
           name="" id="" className=" px-4 py-2 bg-gray-600">
            {
                currencyOption.map( currency => <><option key={currency} value={currency}>{currency}</option></>)
            }
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;

