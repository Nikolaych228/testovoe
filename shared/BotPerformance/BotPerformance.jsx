import React from 'react'

const BotPerformance = ({ bot, selectedKey }) => {
    const value = bot[selectedKey];
    const colorClass = value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-gray-500";
  return (
    <div className="flex justify-between">
        <span className={`text-xs ${colorClass}`}>{value !== undefined ? value.toFixed(2) + "%" : "-"}</span>
    </div>
  )
}

export default BotPerformance