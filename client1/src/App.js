import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Users from './Users.js'
import Transaction from './Transaction.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/Users" exact component={Users} />
            <Route path="/Transaction" exact component={Transaction} />
        </Router>

    );
}
const Home = () => (
    <div className="App">
        <div id="hm">
            <Navbar expand="lg">
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
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Users">Users</Nav.Link>
                        <Nav.Link  href="/Transaction">Transactions</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div>
                <img
                    alt=""
                    src="/Note.png"
                    className="note"
                />

            </div>
            <div className="next">
                <img className="arrow1" src="/arrow1.svg" />
                <img className="arrow2" src="/arrow2.svg" />
            </div>
            <div className="headline">

                Secure your money and Easy tranfer through SPARKS


            </div>
            <div class="bn">
                <Button className="btn" variant="outline-secondary"><Link to='/Users'><a href="Users.html">Users</a></Link></Button>
                <Button className="btn" variant="outline-dark"><Link to='/Transaction'><a href="Transaction.html">Transactions</a></Link></Button>

            </div>
            <div>
                <img className="wave" src="/Rectangle 4.png" />
            </div>
        </div>
        <div id="Footer" >

          </div>
    </div>
)
export default App;
