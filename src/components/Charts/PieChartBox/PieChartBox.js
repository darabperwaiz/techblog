import React from 'react'
import "./PieChartBox.css"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    {name: "Android", value: 400, color: "#0088FE"},
    {name: "Iphone", value: 300, color: "#9100FF"},
    {name: "Other", value: 200, color: "#FFBB28"}
    
]

const COLORS = ["#0088FE", "#9100FF", "#FFBB28"]

const PieChartBox = () => {
  return (
    <div>
    <div>
    <ResponsiveContainer width="99%" height={400} >
        <PieChart >
            <Tooltip 
            contentStyle={{borderRadius: "5px"}}
            />
        <Pie
          data={data}
          innerRadius={"50%"}
          outerRadius={"80%"}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        </PieChart>
    </ResponsiveContainer>
    </div>
          <div className="options">
            {data.map((item)=> (
                <div className="option" key={item.name}>
                    <div className="option_title" style={{backgroundColor: item.color}}>
                        {/* <div className="dot" style={{backgroundColor: item.color}}/> */}
                        <span>{item.name}</span>
                    </div>
                    {/* <span>{item.value}</span> */}
                </div>
            ))}
          </div>
    </div>
  )
}

export default PieChartBox
