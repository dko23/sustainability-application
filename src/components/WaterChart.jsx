import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useSelector } from 'react-redux';
import Bills from './Bills'
function WaterChart() {
    const posts = useSelector((state) => state.post); // Read and subscribe to the state value from the store

  return (
    <div className='chart'>
    <BarChart
      width={500}
      height={300}
      data={posts}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend/>
      <Bar dataKey="electricity" fill="#8884d8" />
      <Bar dataKey="water" fill="#82ca9d" />
      </BarChart>
      <Bills/>
  </div>
  )
}

export default WaterChart


