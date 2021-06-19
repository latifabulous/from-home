// let options = {
//   headers: {
//       'Authorization': 'Bearer '
//   }  
// }

let baseUrl = 'https://www.googleapis.com/books/v1';

export function searchBooks(searchTerm, startIndex) {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    let url = `${baseUrl}/volumes?q=${encodedSearchTerm}&startIndex=${startIndex}&projection=lite`;

    const error = new Error();
    return fetch(url)
        .then((response) => {
            if (response.ok) { 
                return response.json(); 
            }
            else {
                error.message = `Error searching for books with term: ${searchTerm}`;
                throw error;
            }
        })
        .then((response) => {
            return response.items || [];
        });
}

export function getRecommendedBooks() {
  let url = `${baseUrl}/volumes/recommended`;

  const error = new Error();
  return fetch(url)
      .then((response) => {
          if (response.ok) { 
              return response.json(); 
          }
          else { 
              error.message = `Error`;
              throw error;
          }
      })
      .then((response) => { 
          console.log(response)
          console.log("haah")
        console.log("hahaha")

          return response || {}; 
      })
}

export function getBook(bookId) {
  let url = `${baseUrl}/volumes/${bookId}`;

  const error = new Error();
  return fetch(url)
      .then((response) => {
          if (response.ok) { 
              return response.json(); 
          }
          else {
              error.message = `Error getting a book with id: ${bookId}`;
              throw error;
          }
      })
      .then((response) => { 
        console.log(response)
          return response || {}; 
      });
}

// export function setAccessToken(accessToken) {
//   options.headers.Authorization = `Bearer ${accessToken}`;
// }