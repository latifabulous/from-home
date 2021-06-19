import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Row, Container 
} from 'reactstrap';

import NavbarPage from '../../components/Navbar/NavbarPage'
import FooterPage from '../../components/Footer/FooterPage'  

import './BookCard.css'

class BookCard extends Component {
  state = {
    dataUser: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyA3hCWg9x8EHykTS1KvrbnKe0O7tyyhGds/items')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Ambil data gagal')
      }
    })
    .then(
      data => this.setState({ dataUser: data, loading: false})
    )
    .catch(error => this.setState({ error: error, loading: true}))
  }

  render() {
    const {error, loading, dataUser}=this.state;
    if (error){
    return <p>{Error.message}</p>
    }

    if (loading) {
      return <p>Loading...</p>
    }

    const listUser = dataUser.map( user => {
      return (
        <Container>
        <Row key={user.id}>
        <Card className='col-sm-3'>
          <CardBody className='ml-auto'>
            <CardTitle>{user.volumeInfo.title}</CardTitle>
            <CardSubtitle>{user.volumeInfo.subtitle}</CardSubtitle>
          </CardBody>
          {/* <img width="100%" src="logo.svg" alt="Card image cap" /> */}
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </Row>
      </Container>
      )
    } )

    return (
      <div>
        <NavbarPage />
        {listUser}
        <FooterPage />
      </div>
      )
  }
}

export default BookCard;