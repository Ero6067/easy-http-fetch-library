/**
 *  EasyHTTP Library
 *  Library for making HTTP requests
 * 
 * @version 2.0.0
 * @author Kris Lafrance
 * 
 */

 class EasyHTTP { 
  // Make an HTTP GET Request 
  get(url) {
    /*Promise accepts 2 vars, resolve and reject
      Resolve is for when the want to send a response
      Reject is for sending an error
    */
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make a HTTP POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    });
  }

    // Make a HTTP PUT request
    put(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
      });
    }
 }