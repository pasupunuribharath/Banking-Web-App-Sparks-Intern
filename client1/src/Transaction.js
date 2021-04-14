import React, { useEffect, useState } from "react";
import './Transaction.css';
import Axios from 'axios';
import './App.css'
import Table from "react-bootstrap/Table"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'


function Transaction() {
    const [transaction, setTransaction] = useState([])
    useEffect(() => {

        Axios.get("http://localhost:3008/api/transaction").then((response) => {
            setTransaction(response.data)
        })
    })
    return (
        <div classname="Transaction" style={{ background:"#DDFFBC"}}>
            <Navbar expand="lg" className="na">
                <Navbar.Brand href="#hm">
                    <img
                        id="logo1"
                        alt=""
                        src="/logo.svg"
                        width="50"
                        height="50"

                    />{' '}
                    <img
                        id="logo2"
                        alt=""
                        src="/logo.svg"
                        width="50"
                        height="50"
                    />{' '}
                   SPARKS BANK
               </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Users">Users</Nav.Link>
                        <Nav.Link href="/Transaction">Transactions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="trans">Transactions</div>

            <Table>
                <tr style={{ position: "absolute", fontWeight: 'bold' }}>
                    <td className="t1">Transaction Id</td>
                    <td className="t1">Sender</td>
                    <td className="t1">Receiver</td>
                    <td className="t1">Date and Time</td>
                    <td className="t1">Transacted amount</td>
                </tr>
                <div style={{ marginTop: 45 }}>
                    {transaction.map((val) => {
                        return <div className="row" style={{ width: 1519.200, margin: 0 }}>
                            <tr>
                                <td className="t1">{val.id}</td>
                                <td className="t1">{val.fromemail}</td>
                                <td className="t1">{val.toemail}</td>
                                <td className="t1">{val.date}</td>
                                <td className="t1">{val.transactionamount}</td>
                            </tr>
                        </div>
                    })}
                </div>
            </Table>
               <div style={{ background: "#DDFFBC", height:700 }}>
                </div            >
        </div>
    );

}
export default Transaction;