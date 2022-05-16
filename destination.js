const form = document.querySelector('#searchForm')
const title = document.querySelector('#title');
const details = document.querySelector('#details');
const summary = document.querySelector('#summary');


form.addEventListener('submit', async function(e){
e.preventDefault()

const searchTerm = form.elements.query.value;
// console.log(searchTerm)
const response = await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=${searchTerm}&apikey=5ae2e3f221c38a28845f05b69502bc7c1783fe13c290b5a28883ca42`)
let city = response.data

const city_id = await axios.get(` https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${city?.lon}&lat=${city?.lat}&rate=1&format=json&apikey=5ae2e3f221c38a28845f05b69502bc7c1783fe13c290b5a28883ca42`)
// console.log(city_id)
const placesDetails = await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${city_id?.data[4]?.xid}?apikey=5ae2e3f221c38a28845f05b69502bc7c1783fe13c290b5a28883ca42`)
console.log(placesDetails)
document.querySelector('#places').innerHTML = city_id.data.map(val => `<p>${val.name}</p>`);
const a = document.createElement('a');
console.log(a)
a.style.textAlign = 'center'
a.href = placesDetails.data.image;
details.append(a)
a.innerText = ' To more information'

title.innerHTML = placesDetails.data.name;
summary.innerHTML = placesDetails.data.wikipedia_extracts.text;


})

/////////////////////////////////////////description////////////////////////////////////////////


