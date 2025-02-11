import React from 'react'
import Leftbar from '../../src/assets/bar.svg'
import Refresh from '../../src/assets/refresh.svg'

const Header = () => {
  return (
    <header className='px-3 pt-6 pb-5 flex justify-between'>
        <img src={Leftbar} alt="" />
        <div className='text-[#546076] text-[17px] font-bold'>
            Dashboard
        </div>
        <img src={Refresh} alt="" />
    </header>
  )
}

export default Header