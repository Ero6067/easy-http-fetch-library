/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * Fetch with async await  
 * 
 * @version 3.0.0
 * @author Kris Lafrance
 * 
 */

 class EasyHTTP { 
  // Make an HTTP GET Request 
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make a HTTP POST request
  async post(url, data) {

    response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }


  // Make a HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

    // Make a HTTP DELETE request

    async delete(url) {
      const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

      const resData = await 'Resource Deleted...';
      return resData;
    }
 }