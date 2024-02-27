import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import UserActions from '../actions/UserActions'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import UserStore from '../stores/UserStore'
import UserApi from '../data/UserApi'
import './StylesCss.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ""
    }
  }

  componentDidMount() {
    //const currentUser = UserStore.getCurrentUser()
    const userId = UserStore.getCurrentUser()
    UserApi.getUserById(userId, (user)=>{
            this.setState({ user })
    })
  }

  render() {
    const currentUser = UserStore.getCurrentUser()
    return(
      <div class="navnavbar">
          <Navbar expand="lg" variant="dark">
            <img src="./logo.png" style={{width:"13px"}}/>
              <Navbar.Brand href="/">&nbsp; iPlanet</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  
                <br></br><Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/viewProducts">View Inventory</Nav.Link>
                <Nav.Link href="/topview">Rated Mobiles</Nav.Link>
                <Nav.Link href="/addNewProduct">Add New Mobile</Nav.Link>
              
                </Nav>
                {currentUser ? <Navbar.Text><i>Welcome,</i>&nbsp; 
                  <a >{this.state.user.firstName}&nbsp;</a></Navbar.Text> : null}
              </Navbar.Collapse>
              {currentUser ? <Button className="btn btn-danger" onClick={()=>{
                UserActions.signoutUser()
                this.props.history.push('/')
                }}>Sign Out
              </Button> : null}
              {!currentUser ? <Button  className="btn btn-warning"onClick={()=>{
                //UserActions.signoutUser()
                this.props.history.push('/signIn')
                }}>Sign In 
              </Button> : null}
              <div>
                &nbsp; &nbsp; 
              </div>
              <Button variant="btn btn-info" href="/register"> Register</Button>

          </Navbar>
      </div>
  )
  }
}

export default withRouter(Header)