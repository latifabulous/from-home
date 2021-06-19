import React, { Component } from 'react';
import { getRecommendedBooks } from '../../utils/bookAPI';
// import JumbotronPage from './JumbotronPage';

class Recommended extends Component {

    constructor() {
        super();

        this.state = {
            recommendedBooks: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        getRecommendedBooks().then((recommendedBooks) => {
            this.setState({ recommendedBooks: recommendedBooks.items, isLoaded: true });
        });
    }

    render() {
        const { isLoaded, recommendedBooks } = this.state;
        if (!isLoaded) {
            return (<div className="">
                        aaaa
                    </div>);
        } else {
            return (
                <div>
                    <header>
                        <h3>Recommended books</h3>
                    </header>
                    console.log({recommendedBooks})

                    {/* <JumbotronPage books={recommendedBooks} /> */}
                </div>
            );
        }

    }
}

export default Recommended;
