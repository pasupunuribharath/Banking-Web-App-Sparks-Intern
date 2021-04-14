import React, { useEffect, useState } from "react";
import './Users.css';
import './App.css'
import Axios from 'axios';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'

const transferMoney = (id, amount1) => {
    var rid = parseInt(prompt("Enter account number of bank account to whom amount needs to be transferred : "))
    var amount = parseInt(prompt("Enter Amount To Be Transferred : "))

    if (amount <= 0 || amount > amount1 || id === rid) {
        alert("...Check Details...")
        amount = parseInt(prompt("Enter Amount To Be Transferred : "))
    }
    else {
        Axios.put("http://localhost:3008/api/update", {
            id: id,
            amount: amount1 - amount,
            id1: rid,
            amount1: amount
        })
        Axios.post("http://localhost:3008/api/update1", {
            id: id,
            rid: rid,
            amount: amount
        })
    }
    window.location.reload(false);


}
function Users() {
    const [bank, setBank] = useState([])

    useEffect(() => {

        Axios.get("http://localhost:3008/api/get").then((response) => {
            setBank(response.data)
        })
    })
    return (
        <div classname="Users" style={{ background: "#DDFFBC" }}>
            <Navbar expand="lg" className="na">
                <Navbar.Brand href="#home">
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
                    <Nav className="ml-auto" >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Users">Users</Nav.Link>
                        <Nav.Link href="/Transaction">Transactions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="user">Users</div>
            <Table>
                <tr style={{ position: "absolute", fontWeight: 'bold'}}> 
                        <td className="t1">Account Number</td>
                    <td className="t1">Name</td>
                    <td className="t1">Email</td>
                    <td className="t1">Contact Number</td>
                    <td className="t1">Balance</td>
                </tr>
                <div style={{ marginTop:45}}>
                    {bank.map((val) => {
                        return <div className="row" style={{ width:1519.200 ,margin:0}}>
                            <tr>
                                <td className="t1">{val.AccountNumber}</td>
                                <td className="t1">{val.Name}</td>
                                <td className="t1">{val.Email}</td>
                                <td className="t1">{val.ContactNumber}</td>
                                <td className="t1"><div>{val.Balance}</div>
                                    <div><button onClick={() => transferMoney(val.AccountNumber, val.Balance)}>Transfer Money</button></div>
                                </td>
                            </tr>
                        </div>
                })}
                    </div>
            </Table>


        </div>
    );
}
export default Users; 