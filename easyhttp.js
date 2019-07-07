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
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make a HTTP POST request
 }