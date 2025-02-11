import { CartesianGrid, XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import './App.css'
import React, { useEffect, useState } from "react";
import Leftbar from './assets/bar.svg'
import Refresh from './assets/refresh.svg'
import Bitok from './assets/bitok.svg'
import Dashboard from './assets/dashboard.svg'
import Megabot from './assets/megabot.svg'
import Botmarket from './assets/bot_market.svg'
import Coin from './assets/coin_pricec.svg'
import Profile from './assets/profiles.svg' 
import myJSON from "./data/data.min.json"
import { botsImg, botsName, bottomRange } from '../shared/botInfo/botInfo';
import { botDate, formatDate } from '../shared/botData/botDate';
import BotPerformance from '../shared/BotPerformance/BotPerformance';

function App() {  
  const [selectedKey, setSelectedKey] = useState("24h"); 
  const [selectedBot, setSelectedBot] = useState("yellow_bot")
  const [highlightedBot, setHighlightedBot] = useState("yellow_bot");
  const [chartData, setChartData] = useState([]);

  const performanceKeys = ["24h", "7d", "30d", "all_time"];
  
  useEffect(() => {
    setChartData(botDate[selectedBot][selectedKey]); 
    if (selectedBot && highlightedBot !== selectedBot) {
      setChartData(botDate[selectedBot][selectedKey]); 
    }
  }, [selectedBot, selectedKey, highlightedBot]);
  
  
  return (
    <div className='overflow-hidden'>
      <header className='px-3 pt-6 pb-5 flex justify-between'>
        <img src={Leftbar} alt="" />
        <div className='text-[#546076] text-[17px] font-bold'>
          Dashboard
        </div>
        <img src={Refresh} alt="" />
      </header>
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
      <section className='flex flex-col mt-3 w-full'>
        <ResponsiveContainer width='100%' height='' className='flex h-[calc(48vh-118px)]'>
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2076D0" stopOpacity={0.6}/>
                <stop offset="85%" stopColor="#2076D0" stopOpacity={0.03}/>
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#203A5B" strokeDasharray="1 1" />
            <XAxis minTickGap={28} stroke='#203A5B' dataKey="name"
              tickFormatter={(dateString) =>
                selectedKey === "24h" ? formatDate(dateString) : dateString.split("T")[0]
            }/>
            <Tooltip/>
            <Area type="monotone" dataKey="uv" stroke="#2076D0" fillOpacity={1} fill="url(#colorUv)"/>
          </AreaChart>
        </ResponsiveContainer>
        <div className='flex p-3 flex-col h-[calc(45vh-20px)]'>
          <div className='grid grid-rows-2 h-full grid-cols-3'>
            {
              myJSON.bots.map((bot, index) => 
                <div key={index} className={`flex flex-col items-center justify-around py-3  rounded cursor-pointer transition-all duration-300 ${
                  highlightedBot === bot.name
                    ? "bg-radial from-[#252D40] from-50% to-[#2F405C]"
                    : "bg-[#252D40] m-[0.5px]"
                }`}
                onClick={() => {
                  if (highlightedBot !== bot.name) {
                    setSelectedBot(bot.name);
                    setHighlightedBot(bot.name);
                  }
                }}
              >
                  <img src={botsImg[bot.name]} className='w-[calc(8vh)]' alt="" />
                  <div className='flex flex-col items-center'>
                    <div className='text-white font-bold text-xs'>
                      {botsName[bot.name]}
                    </div>
                    
                    <BotPerformance key={index} bot={bot} selectedKey={selectedKey} />
                  </div>
                </div >
              )
            }
          </div >
          <div className='flex flex-row justify-between mt-2'>
            <div className='mr-1 text-[#546076] text-nowrap'>
              Time Range:
            </div>
            <div className= 'flex justify-end'>
            {performanceKeys.map((key) => (
              <button key={key} onClick={() => setSelectedKey(key)} className={`w-[calc(15vw)] text-xs ml-2 rounded-2xl ${selectedKey === key ? "text-white border bg-[#232C3E]" : "border border-[#273246] text-[#546076]"}`}>
                {bottomRange[key]}
              </button>
            ))}
            </div>
          </div>    
        </div>
      </section>
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
    </div>
      
      
     

  )
}

export default App
