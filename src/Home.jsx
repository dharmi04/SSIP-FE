import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 

function Home() {

    const data = [
        {
          name: 'Page A',
          v1: 4000,
          v2: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          v1: 3000,
          v2: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          v2: 2000,
          v1: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          v2: 1890,
          v1: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          v2: 2390,
          v1: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          v2: 3490,
          v1: 4300,
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
                <Bar dataKey="v1" fill="#8884d8" />
                <Bar dataKey="v2" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                <Line type="monotone" dataKey="v1" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="v2" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home