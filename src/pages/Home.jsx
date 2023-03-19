import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div>
            <video id="background-video" autoPlay loop muted>
                <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
