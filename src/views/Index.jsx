import React from 'react';

import request from 'superagent';

import NavbarPage from '../components/Navbar/NavbarPage.jsx'
// import HeaderPage from '../components/Header/HeaderPage.jsx'
import FooterPage from '../components/Footer/FooterPage.jsx'
// import JumbotronPage from './Home/JumbotronPage.jsx'
import SearchResultList from './Search/SearchResultList.jsx';
// import Tabs from './Home/Tabs.jsx';
import SearchInput from './Search/SearchInput.jsx';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: '',
      sort: '',
      max : 40
    };
  } 
  
  searchBook = (e) => {
    e.preventDefault();
    request
      .get('https://www.googleapis.com/books/v1/volumes')
      .query({q: this.state.searchField})
      .query({maxResults: this.state.max})
      .then((data) => {
        console.log(data);
        const cleanData = this.cleanData(data)
        this.setState({
          books: cleanData
        })
      })
  }

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState ({
      searchField: e.target.value
    })
  }

  handleRemove = () => {
    this.setState({ 
      searchField : ' '
    })
  }

  handleSort = (e) => {
    console.log(e.target.value)
    this.setState({ 
      sort : e.target.value
    })
  }

  cleanData = (data) => {
    const cleanData = data.body.items.map((book) => {
      if(book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.volumeInfo['publishedDate'] = '0000'
      }

      return book;
    })

    return cleanData;
  }

  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  
  render() {
    const sortedBook = this.state.books.sort((a, b) => {
      if(this.state.sort === 'Newest'){
        console.log(b.volumeInfo.publishedDate.substring(0, 4))
        return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      } else if (this.state.sort === 'Oldest') {
        return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      }
    })

    return (
      <div>
        <NavbarPage />
        <div className="wrapper">
            <SearchInput searchBook = {this.searchBook} handleSearch = {this.handleSearch} handleRemove = {this.handleRemove} handleSort = {this.handleSort} hasil = {this.state.searchField}/>
          <div className="main">
            <SearchResultList books = {sortedBook}/>
          </div>
        </div>
        <FooterPage/>
      </div>
    )
  }
}

export default Index;
