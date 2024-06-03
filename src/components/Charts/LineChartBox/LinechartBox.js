import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LinechartBox = (props) => {
    // console.log(props)
  return (
    <>
      <ResponsiveContainer width="100%" height="100%" maxHeight={"200px"}  >
      <LineChart data={props.chartData}>
        <Tooltip 
            labelStyle={{display: "none"}}
        />
        <Line type="monotone" dataKey={props.dataKey} stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
    </>
  )
}

export default LinechartBox
