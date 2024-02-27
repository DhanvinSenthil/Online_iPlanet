import React from 'react'
import Products from '../components/Products'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProductApi from '../data/ProductApi'
import UserStore from '../stores/UserStore'
import Accordion from 'react-bootstrap/Accordion'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import './StylesCss.css'

export default class CardsView extends React.Component {

  state = {
    query: '',
    checkedProducts: {},
    columns: {
      productName: true,
      manufacturer: true,
      price: true,
      quantity: true,
      checkToSelect: true
    }
  }

  onChangeHandler = e => {
    const query = e.target.value
        this.setState({query})
  }

  handleCheck = (productId, checked) => {
    this.setState(
      prevState => {
        const checkedProducts = prevState.checkedProducts
        checkedProducts[productId] = checked
        return {checkedProducts}
      }
    )
  }

  onDelete = () => {
    console.log(this.state.checkedProducts)
    const checkedArray = Object.keys(this.state.checkedProducts).filter(id => this.state.checkedProducts[id] === true)
    console.log(checkedArray)
    ProductApi.deleteProducts(checkedArray)
    window.location.reload()
  }
  
  render() {
    const currentUser = UserStore.getCurrentUser()
    const products = this.props.products
    const query = this.state.query
    const filteredProducts = products.filter(product => {
      return product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
    return (
      
      <div class="navnavbar" width="100%">
      <Container style={{backgroundColor:" black",width:'100'}} >
        <Row>
          <Card style={{}}>
            <Card.Body  style={{backgroundColor:"black"}}>
              <Col>
                <Table style={{backgroundColor:"black" , padding:"10px"} }>
                  <tbody>
                      <tr>
                        <th>
                          <Form>
                            <Form.Row>
                              <Form.Group as={Col} controlId="formGridEmail" >
                                <Form.Control type="text" placeholder="Search...." onChange={this.onChangeHandler} />
                              </Form.Group>
                            </Form.Row>
                          </Form>
                        </th>
                        <th></th>
                      </tr>
                    </tbody>
                    
                    <div className='navnavbar'style={{display:"flex"}}>
                    {filteredProducts.map(product =>
                    <div class="card" backgroundColor='black' color='black' style={{padding:"2px" }}  >
                    <img src="https://d28i4xct2kl5lp.cloudfront.net/product_images/78877_cbe0138e-899f-457b-b3a9-423b8fac2599.jpg" width="300px" height="300px"class="card-img-top" alt="Image cannot be retrieved"/>
                    <center>
                      <Products
                      productId={product.id}
                      productName={product.productName}
                      productDescription={product.productDescription}
                      manufacturer={product.manufacturer}
                      price={product.price} 
                      quantity={product.quantity} 
                      onCheck={this.handleCheck}
                      columns={this.state.columns}/>
                      </center>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      </div>
                    )}
                    </div>

                </Table>
              </Col>
              <Container>
                <Row>
                  <Col></Col>
                  <Col xs={6}>
                  {
                    currentUser ? 
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Delete Product</Tooltip>}>
                      <span className="d-inline-block">
                        <Button variant="outline-danger" onClick={this.onDelete}>
                          Delete
                        </Button>
                      </span>
                    </OverlayTrigger> : 
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Sign In to perform this action!</Tooltip>}>
                      <span className="d-inline-block">
                        <Button variant="outline-danger"disabled style={{ pointerEvents: 'none' }}>
                          Delete
                        </Button>
                      </span>
                    </OverlayTrigger>
                  }
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
          <Col>
          <Accordion>
  <Card>
    
    <Card.Header>
    
    </Card.Header>
   
   
    <div className='filter'>
      <h5>Filters</h5>
      <Card.Body>
        Product Name: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, productName: checked}}
              }
            )
          }} />
        
        Price: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {console.log(prevState)
                return {columns: {...prevState.columns, price: checked}}
              }
            )
          }} />
        Quantity: <Form.Check
          defaultChecked={true}  
          onChange={(evt) => {
            const checked = evt.target.checked
            this.setState(
              prevState => {
                console.log(prevState)
                return {columns: {...prevState.columns, quantity: checked}}
              }
            )
          }} />
        
      </Card.Body>
      </div>
    
  </Card>
  </Accordion>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}