import React from 'react'
import artwork from '../imgs/Untitled_Artwork.png'

const Home = () => {
    return (
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
           {/* <img src={require('../imgs/Untitled_Artwork.png')}  alt="peachy"/> */}
           <img src={artwork}  alt="peachy"/>
        </div>
    )
}

export default Home
