import React from "react";
import ReactDom from "react-dom/client";
import Navbar from "./components/Navbar/navbar"
import Table from "./components/Table/table"

const person=[
    {
        id:'002',
        first:'shamil',
        last:'tp',
        handle:'@shamiltp'
    },
    {
        id:'016',
        first:'muhammed',
        last:'fasil',
        handle:'@muhammedfasil'
    },
    {
        id:'073',
        first:'muhammed',
        last:'yaseen',
        handle:'@muhammedyaseen'
    },
]
const Main = ()=>{
    return <>
        <Navbar/>
        {
            person.map((prsn)=>{
                <Table data={prsn}/>
            })
        }
    </>

}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<Main/>);