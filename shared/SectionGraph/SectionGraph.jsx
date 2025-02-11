import React, { useEffect, useState } from 'react'
import { CartesianGrid, XAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { botDate, formatDate } from '../botData/botDate';
import myJSON from "../../src/data/data.min.json"
import { botsName, botsImg, bottomRange } from '../botInfo/botInfo';
import BotPerformance from '../BotPerformance/BotPerformance';

const SectionGraph = () => {
    const [selectedKey, setSelectedKey] = useState(() => {
        return localStorage.getItem("selectedKey") || "24h"; 
      });
    
      const [selectedBot, setSelectedBot] = useState(() => {
        return localStorage.getItem("selectedBot") || "yellow_bot"; 
      });
    
      const [highlightedBot, setHighlightedBot] = useState(() => {
        return localStorage.getItem("selectedBot") || "yellow_bot"; 
      });
    const [chartData, setChartData] = useState([]);
    
      const performanceKeys = ["24h", "7d", "30d", "all_time"];
      
useEffect(() => {
    localStorage.setItem("selectedKey", selectedKey); 
    localStorage.setItem("selectedBot", selectedBot);
    setChartData(botDate[selectedBot][selectedKey]); 
        if (selectedBot && highlightedBot !== selectedBot) {
            setChartData(botDate[selectedBot][selectedKey]); 
        }
    }, [selectedBot, selectedKey, highlightedBot]);

  return (
    <section className='flex flex-col mt-3 w-full'>
        <ResponsiveContainer width='100%' height="" className='flex h-[calc(48vh-118px)]'>
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
            <XAxis minTickGap={30} stroke='#203A5B' className='text-xs'
                dataKey="date"
                tickFormatter={(dateString) => formatDate(dateString, selectedKey)}
                
            />
            <Tooltip />
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
  )
}

export default SectionGraph