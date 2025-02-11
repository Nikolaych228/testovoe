import React from 'react'
import Dashboard from '../../src/assets/dashboard.svg'
import Megabot from '../../src/assets/megabot.svg'
import Botmarket from '../../src/assets/bot_market.svg'
import Coin from '../../src/assets/coin_pricec.svg'
import Profile from '../../src/assets/profiles.svg'

const Footer = () => {
  return (
    <footer className='flex flex-row bg-[#232C3E] justify-between px-3 pt-1 h-[calc(7vh)]'>
        <div className='flex flex-col items-center justify-center'>
            <img src={Dashboard} className='flex h-[calc(3vh)]' alt="" />
            <div className='flex text-white mt-1 text-[10px]'>
                Dashboard
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={Megabot} className='flex h-[calc(3vh)]' alt="" />
            <div className='flex text-[#546076] mt-1 text-[10px]'>
                Megabot
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={Botmarket} className='flex h-[calc(3vh)]' alt="" />
            <div className='flex text-[#546076] mt-1 text-[10px]'>
                Bot market
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={Coin} className='flex h-[calc(3vh)]' alt="" />
            <div className='flex text-[#546076] mt-1 text-[10px]'>
                Coin pricec
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <img src={Profile} className='flex h-[calc(3vh)]' alt="" />
            <div className='flex text-[#546076] mt-1 text-[10px]'>
                Profiles
            </div>
        </div>
    </footer>
  )
}

export default Footer