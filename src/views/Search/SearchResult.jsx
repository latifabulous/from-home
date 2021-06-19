import React from 'react';
import { Link } from 'react-router-dom'
import "./SearchResult.css"
import Rating from 'react-rating'
import {
  Col,
  Card,
  CardBody,
  Button,
} from "reactstrap";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pills: 1
    };
  } 

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    let rate = this.props.rating;
    let star = rate;
 
    if (star === 1 || star === 1.5) 
      star = `satu judul`
    else if (star === 2 || star === 2.5)
      star = `dua judul`
    else if (star === 3 || star === 3.5)
      star = `tiga judul`
    else if (star === 4 || star === 4.5)
      star = `empat judul`
    else if (star === 5)
      star =`lima judul`
    else
      star = `judul`

    let title = this.props.title;
    let judul = title;
    if (judul.length <= 35) {
      judul = judul
    } else {
      judul = judul.slice(0, 35) + " ..."
    }

    let desc = this.props.description;
    let descs = desc;
    if (descs.length <= 200) {
      descs = descs
    } else {
      descs = descs.slice(0, 200) + " ..."
    }

    let author = this.props.author && this.props.author[0].slice(0, 60) ? "Oleh " + this.props.author[0].slice(0, 60) : " "

    let month = this.props.publishedDate && this.props.publishedDate.slice(5, 7)
    let year = this.props.publishedDate && this.props.publishedDate.slice(0, 4) === "0000" ? "" : this.props.publishedDate.slice(0, 4)
    let day = this.props.publishedDate && this.props.publishedDate.slice(8, 10)

    if (month === '01') 
      month = "Jan"
    else if (month === '02') 
      month = "Feb"
    else if (month === '03') 
      month = "Mar"
    else if (month === '04') 
      month = "Apr"
    else if (month === '05') 
      month = "Mei"
    else if (month === '06') 
      month = "Jun"
    else if (month === '07') 
      month = "Jul"
    else if (month === '08') 
      month = "Agu"
    else if (month === '09') 
      month = "Sep"
    else if (month === '10') 
      month = "Okt"
    else if (month === '11') 
      month = "Nov"
    else if (month === '12') 
      month = "Des"

    return (
      <>
      <Col lg="3" className="mb-5 area">
        <div className="text-center img-edit rounded">
          <img className="card-img-top img-fluid rounded shadow-lg" src={this.props.cover} alt=""/>
          <div className="img-btn">
          <Link to={`/book/${this.props.id}`}>
            <Button>
              Lihat detail
            </Button>
            </Link>
          </div>
        </div>        
      </Col>
      <Col lg="3">
      <Card className="">
        <CardBody >
            <Link to={`/book/${this.props.id}`}>
              <h3 className="judul">{judul}</h3>
            </Link>
            <p>{author}</p>
            <Rating
              emptySymbol="fa fa-star-o"
              fullSymbol="fa fa-star"
              fractions={2}
              initialRating={rate}
              readonly
              className={star}
              />
            <p>{day} {month} {year}</p>
            <p>{descs}</p>
          </CardBody>
        </Card>
      </Col>
      </>
     );
  }
}

export default SearchResult;
