const reqURL = 'https://jsonplaceholder.typicode.com/users'
const xhr = new XMLHttpRequest()

function sendReq(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  }).then(response => response.ok ? response.json() : response.json().then(err => console.error('Что то пошло не так')))
}
sendReq('POST', reqURL, {
  something: 'something',
  12: true
})
  .then(data => console.log(data))
  .catch(err => console.error(err))