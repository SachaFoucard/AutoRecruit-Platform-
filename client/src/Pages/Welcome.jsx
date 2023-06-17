import React from 'react'
import { useState, useEffect } from 'react'
import data from '../../public/data/positions.json'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/diamond.png'
export default function Welcome() {

    const nav = useNavigate()
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        setPositions(data)
    }, [])

    return (
        <>
            <div className='logo'>
                <img src={logo} alt="" width={100} />
            </div>
            <div className='header-Welcome'>
                <h2>Open positions</h2>
            </div>
            <div className='positions'>
                {positions.map((job, id) => <button className='block' key={job.id} onClick={() => nav(`/carrer/job/${job.id}`, { id: job.id })}>
                    <h3>{job.title}</h3>
                    <p className='apply'>APPLY NOW</p></button>)}
            </div>
        </>
    )
}
