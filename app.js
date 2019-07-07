const http = new EasyHTTP;

// Get users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

  //User Data 
  const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jd@gmail.com'
  }

  //Create Post
  http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));