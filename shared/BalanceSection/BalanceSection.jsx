import React from 'react'
import myJSON from "../../src/data/data.min.json"
import Bitok from '../../src/assets/bitok.svg'

const BalanceSection = () => {
  return (
    <section className='flex-col pr-3 pl-4'>
        <div className='text-xs font-bold text-[#546076]'>
          TRADING CAPITAL
        </div>
        <div className='flex justify-between text-white uppercase text-4xl'>
          <div className='flex'>
            <div className='text-white mr-1'>
              {myJSON.trading_capital} 
            </div>
            <div className=''>
              {myJSON.trading_capital_currency}
            </div>
          </div>
          <div className='flex flex-col items-end  text-xs'>
            <div className='flex justify-between mb-1 w-full'>
              <div className='text-[#546076] font-bold pr-2'>
                BALANCE:
              </div>
              <div className='font-bold'>
                {myJSON.balance}
              </div>
              <img src={Bitok} width={15} alt="" className='ml-1'/>
            </div>
            <div className='flex justify-between w-full'>
              <div className='text-[#546076] font-bold pr-2'>
                ON HOLD:
              </div>
              <div className='flex'>
                <div className='font-bold'>
                  {myJSON.on_hold}
                </div>
                <img src={Bitok} width={15} alt="" className='ml-1'/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default BalanceSection