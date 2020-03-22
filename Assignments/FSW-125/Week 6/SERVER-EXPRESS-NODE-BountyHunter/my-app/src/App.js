import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import AddBounty from './components/AddBounty.js'

export default function App(){
    const [bounties, setBounties] = useState([])
    
    function getBounties() {
        axios.get("/bounties")
        .then(res => setBounties(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
        .then(res => {
            setBounties(prevBounties => [...prevBounties, res.data])
        })
        .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    function editBounty(bountyId, updates) {
        axios.put(`/bounties/${bountyId}`, updates)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        <div>
            <div className="bounty-container">
                <AddBounty 
                submit={addBounty}
                btnText="Add Bounty"
                />
                { 
                    bounties.map(bounty => 
                    <Bounty 
                    {...bounty} 
                    key={bounty.Name} 
                    deleteBounty={deleteBounty}
                    editBounty={editBounty}/>) 
                }
            </div>  
        </div>
        
    )
}