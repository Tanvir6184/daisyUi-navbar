import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer,XAxis,YAxis, Tooltip } from 'recharts';
import { Audio } from 'react-loader-spinner';


const Phones = () => {

    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( ()=> {

        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data
            const phonesWithFakeData = phoneData.map(phone =>{
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData);
            setLoading(false);
        })

    }, [])


    return (

        <div>
            { loading && 
                <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"/>
                }

            <h2>Phones: {phones.length}</h2>
        <BarChart width={800} height={400} data={phones}>
            <XAxis></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
        </div>
    );
};

export default Phones

