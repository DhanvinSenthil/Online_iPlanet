import React from 'react';
import Header from '../includes/header'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddProductForm from '../includes/productForm'
import ProductActions from '../actions/ProductActions'
import '../includes/StylesCss.css'



class AddNewProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.saveProduct = this.saveProduct.bind(this);
    }
  
    saveProduct(product) {
          ProductActions.addProduct(product);
          this.props.history.push('/viewProducts');
          alert("Product Added Successfully!")
    }
    
    render() {
        return (
            <div class="navnavbar1">
                <Header />
                <Container>
                    <Row>
                        <Col></Col>
                        <Col xs={5}>
                            <Card className="text-center mt-5" >
                                <Card.Body>
                                  <Card.Title>Add New Mobile</Card.Title>
                                  <Card.Text>
                                        <AddProductForm onSave={this.saveProduct} /> 
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                            <Col></Col>
                    </Row>
                    <div className='footer'>
    <footer className="flex-col flex-center" color='white'>
      <h5>Made with Hands by Dhanvin S</h5>
      <p>Copyright @ Dhanvin | 2022</p>
    </footer>
    </div>
                </Container>
     
        
                     
             
            </div>
        )
    }
}

export default AddNewProductPage