//Get Method
axios.get('https://reqres.in/api/users?page=2')
    .then((res) => {handlerData(res)})
    .catch((error) => console.log(error));

function handlerData(data) {
    console.log(data);
}

//Post Method
axios.post('https://reqres.in/api/users', {
    name: 'Muhammad Naeem',
    job: 'Developer'
})
.then((res) => { handlerData(res) })
.catch((error) => console.log(error));
