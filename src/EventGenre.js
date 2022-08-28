import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => getData());
  },
    [events]
  );

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#6A0DAD"];

  const getData = () => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(" ").includes(genre)).length;
      return { name: genre, value };
    });
    return data;
  };

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={100} height={100}>
        <Pie
          data={data}
          cx={400}
          cy={150}
          labelLine={false}
          outerRadius={80}
          fill='#fff'
          dataKey="value"
          nameKey={'genre'}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default EventGenre;