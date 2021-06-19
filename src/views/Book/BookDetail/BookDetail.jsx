import React from 'react';
import { getBook } from '../../../utils/bookAPI'
import Rating from 'react-rating'
import './BookDetail.css'

import {
  Col,
  Card,
  CardBody,
  Row,
  Container,
  Button
} from "reactstrap";

import NavbarPage from '../../../components/Navbar/NavbarPage';

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: {},
      bookCountry: {},
      show: false,
      text: ' Lebih banyak',
      id: this.props.match.params.id
    };
    this.toggleDiv = this.toggleDiv.bind(this)
  } 

  toggleDiv = () => {
    const { show } = this.state;
    // const { text } = this.state;
    this.setState({
      show : !show,
      text: ' Lebih sedikit'
    })
  }
  componentDidMount() {
    let id = this.state.id
    getBook(id)
    .then((bookInfo) => {
        this.setState({ bookInfo: bookInfo.volumeInfo, bookId: bookInfo.id, bookCountry: bookInfo.accessInfo, isLoaded: true });
    });
  }

  render() {
    const { bookInfo } = this.state;
    const { bookCountry } = this.state;
    
          
    let descs = bookInfo.description ? bookInfo.description.replace(/&quot;/g, '"').replace(/(<[^>]+>)/g, '') : "Tidak ada deskripsi "
    let desc = descs
    if (desc.length <= 600) {
      desc = desc
    } else {
      desc = desc.slice(0, 600) + " "
    }

    let desc2 = descs.slice(601, descs.length)  + " "

    
    let rate2 = bookInfo.averageRating;
    let btn = rate2;
 
    if (btn === 1 || btn === 1.5) 
      btn = `btn btn-danger`
    else if (btn === 2 || btn === 2.5)
      btn = `btn btn-warning`
    else if (btn === 3 || btn === 3.5)
      btn = `btn btn-info`
    else if (btn === 4 || btn === 4.5)
      btn = `btn btn-success`;
    else if (btn === 5)
      btn =`btn btn-primary`
    
    const Books = () => {
      let google = window.google;
      if(typeof google != 'undefined' && google && google.books.load) {
        google.books.load()
        google.books.setOnLoadCallback(function initialize() {
          let viewer = new google.books.DefaultViewer(
          document.getElementById("viewer")
          );
          const first = bookInfo.industryIdentifiers && bookInfo.industryIdentifiers[0].identifier
          console.log(first)

          viewer.load("ISBN:"+first);
        })
      }
      else {
          setTimeout(Books, 30);
      }
      return (
          <div id="viewer" style={{ height: "600px" }}>          
      </div>
      );
    };

    const authors = getAuthorList(bookInfo);
    
    function getAuthorList(bookInfo) {
      let authorList = bookInfo.authors;
      if (!authorList) {
          return <span>Tidak ada penulis</span>;
      }
      return authorList.map((author, index) => {
          return <span key={index}>Oleh {author}{index + 1 !== authorList.length ? ', ' : ''}</span>;
      });
    }

    const categories = bookInfo.categories && bookInfo.categories.map((category, index) => {
        console.log(category)
        return <Button key={index} className={btn}>{category}</Button>;
    });

    // const strippedDescription = bookInfo && bookInfo.description && bookInfo.description.replace(/&quot;/g, '"').replace(/(<[^>]+>)/g, '')

    function getSmallImage(bookInfo) {
      let bookImageUrl = bookInfo.imageLinks && (bookInfo.imageLinks.small || bookInfo.imageLinks.thumbnail);
      return bookImageUrl ? bookImageUrl.replace(/^http:\/\//i, 'https://') : 'https://www.actbus.net/fleetwiki/images/8/84/Noimage.jpg';
    } 
    
    let rate = bookInfo.averageRating;
    let star = rate;
 
    if (star === 1 || star === 1.5) 
      star = `satu`
    else if (star === 2 || star === 2.5)
      star = `dua`
    else if (star === 3 || star === 3.5)
      star = `tiga`
    else if (star === 4 || star === 4.5)
      star = `empat`;
    else if (star === 5)
      star =`lima`

    let conv = rate;
    
    if(conv === 1 || conv === 2 || conv === 3 || conv === 4 || conv === 5)
      conv = conv + ".0"
    else
      conv = conv

    let pub = bookInfo && bookInfo.publishedDate ? bookInfo.publishedDate : "Tidak ada tanggal terbit"
    let month = pub && pub.slice(5, 7)
    let year = pub && pub.slice(0, 4) === "0000" ? "" : pub.slice(0, 4)
    let day = pub && pub.slice(8, 10)
    console.log(day)
    console.log(month)
    console.log(year)

    if (month === '01') 
      month = "Januari"
    else if (month === '02') 
      month = "Februari"
    else if (month === '03') 
      month = "Maret"
    else if (month === '04') 
      month = "April"
    else if (month === '05') 
      month = "Mei"
    else if (month === '06') 
      month = "Juni"
    else if (month === '07') 
      month = "Juli"
    else if (month === '08') 
      month = "Agustus"
    else if (month === '09') 
      month = "September"
    else if (month === '10') 
      month = "Oktober"
    else if (month === '11') 
      month = "November"
    else if (month === '12') 
      month = "Desember"
    
    let country = bookCountry.country
    let bahasa = country
    if (bahasa === 'ID')
      bahasa = 'Indonesia'
    else if (bahasa === 'EN') 
      bahasa = 'English'
    else
      bahasa = bahasa

    return (
      <div className="section section-javascript">
      <NavbarPage/>
      <img
      alt="..."
      className="path"
      src={require("../../../assets/img/path3.png")}
    />
    {/* <img
      alt="..."
      className="path path1"
      src={require("../../../assets/img/path3.png")}
    /> */}
      <Container>
      <Row>
        <Col lg="6" className="text-center">
            <img className="ml-auto img-fluid rounded shadow-lg img-ed" src={getSmallImage(bookInfo)} alt={bookInfo.title} />
        </Col>
        <Col lg="6" className="">
          <Card>
            <CardBody className="p-4">
              <span>
              <Rating
                emptySymbol="fa fa-star-o"
                fullSymbol="fa fa-star"
                fractions={2}
                initialRating={rate}
                readonly
                className={star}
              />
              <p className="rating">
                {console.log(conv)}
                ({conv})
              </p>

              </span>
              <h1 style={{margin: `10px 0px 20px 0px`}}>{bookInfo.title} {bookInfo.subtitle}</h1>
              <p>{authors}</p> 
              <p>{bookInfo.publishYear}</p>
              <div>
                {categories ? categories : 'Tidak ada kategori'}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg="6">
          <Card>
            <CardBody>
              <Row>
                <Col lg="12">
                <h3 className={star}>Detail</h3>
                </Col>
              </Row>
              <Row>
                <Col lg="6">
                <p className="">Halaman</p>
                  <h4>{bookInfo.pageCount}</h4>
                </Col>
                <Col lg="6">
                  <p className="">Penerbit</p>
                  <h4>{bookInfo.publisher}</h4>
                </Col>    
              </Row>
              <Row>
                <Col lg="6">
                <p className="">Tanggal Terbit</p>
                  <h4>{day} {month} {year}</h4>
                </Col>
                <Col lg="6">
                  <p className="">Bahasa</p>
                <h4>{bahasa}</h4>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          {/* <p>{strippedDescription}</p> */}
          <p className="desc">{desc}</p>
          <p className="desc">{this.state.show && desc2}</p>
          <a href="#" onClick={this.toggleDiv}>{this.state.text}</a>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg="12">
          <Books isbn={bookInfo.industryIdentifiers}/>
        </Col>
      </Row>
      </Container>
      </div>
     );
  }
}

export default BookDetail;
