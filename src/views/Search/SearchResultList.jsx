import React from 'react';
import { Container, Row } from 'reactstrap';
import SearchResult from './SearchResult';


const SearchResultList = (props) => {
  return(
    <div className="section section-typo">
    <img
       alt="..."
       className="path"
       src={require("../../assets/img/path4.png")}
     />
    {/* <img
      alt="..."
      className="path path1"
      src={require("../../assets/img/path3.png")}
    /> */}
      <Container>
        <Row> 
          {
            props.books.map((book, i) => {
              return <SearchResult
              key={i}
              cover={((book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : 'https://www.actbus.net/fleetwiki/images/8/84/Noimage.jpg')}
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              author={book.volumeInfo.authors}
              id={book.id}
              publishedDate={book.volumeInfo.publishedDate}
              rating={book.volumeInfo.averageRating}
              description={book.volumeInfo.description ? book.volumeInfo.description : ""}
              />
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default SearchResultList;