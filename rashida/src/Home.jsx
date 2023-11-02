
import React from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

function Home() {
    const data = [
        {
          name: 'Product 1',
          2022: 4000,
          2023: 2400,
          amt: 2400,
        },
        {
          name: 'Product 2',
          2022: 3000,
          2023: 1398,
          amt: 2210,
        },
        {
          name: 'Product 3',
          2023: 2000,
          2022: 9800,
          amt: 2290,
        },
        {
          name: 'Product 4',
          2023: 1890,
          2022: 4800,
          amt: 2181,
        },
        {
          name: 'Product 5',
          2023: 2390,
          2022: 3800,
          amt: 2500,
        },
        {
          name: 'Product 6',
          2023: 3490,
          2022: 4300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>TOTAL SALES</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>120</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>13</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>NOTIFICATIONS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>18</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="2022" fill="#8884d8" />
                <Bar dataKey="2023" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>


        <ResponsiveContainer width='100%' height={400}>
          <PieChart>
            <Pie
              data={data}
              dataKey="2022" // Use "2022" as dataKey
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
