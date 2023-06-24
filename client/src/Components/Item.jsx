import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../public/data/positions.json'
import logo from '../assets/diamond.png'

function Item() {
    const { id } = useParams()
    const nav = useNavigate()
    const [job, setJob] = useState([]);

    useEffect(() => {
        let job = data.find((item) => item.id == id);
        setJob(job)
    }, [])

    return (
        <>
            <div className='item'>
                <div className='logo'>
                    <img src={logo} alt="" />
                    <h1></h1>
                </div>
                <div className='itemStyles'>
                    <h2>{job.title}</h2>
                    <p>{job.subtitle}</p>
                    <h3>Who are you ?</h3>
                    <p>{job.WhoAreYou}</p>
                    <h3>Who are we ?</h3>
                    <p>{job.WhoAreWe}</p>
                    <ul>
                        <h3>What will you do:</h3>
                        {job?.WhatWillYouDo?.map((item,i) =>
                            <li key={i}>
                                {item}
                            </li>
                        )}
                    </ul>
                    <ul>
                        <h3>Requirements:</h3>
                        {job?.Requirements?.map((item,i) =>
                            <li key={i}>
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
                <button className='apply-now' onClick={()=>nav(`/carrer/job/apply/${id}`,{id:id})} >APPLY NOW</button>
            </div>
        </>
    )
}

export default Item