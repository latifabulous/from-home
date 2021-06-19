
// import React, { Component } from 'react';
// import SearchResultList from '../Search/SearchResultList';

// import { getRecommendedBooks } from './../../utils/bookAPI';

// class Recommended extends Component {

//     constructor() {
//         super();

//         this.state = {
//             recommendedBooks: [],
//         }
//     }

//     componentDidMount() {
//         getRecommendedBooks().then((recommendedBooks) => {
//             this.setState({ recommendedBooks: recommendedBooks.items, isLoaded: true });
//         });
//     }

//     render() {
//         const { recommendedBooks } = this.state;
//         console.log("masok")
//             return (
//                 <div>
//                     <header>
//                         <h3>Recommended books</h3>
//                     </header>
//                     <SearchResultList book={recommendedBooks} />
//                 </div>
//             );
        

//     }
// }

// export default Recommended;


