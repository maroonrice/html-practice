document.querySelector('#load').addEventListener('click', async (event) => {
  const jsonname = document.querySelector('#loadjson').value
  console.log(jsonname)
  const response = await fetch(jsonname)
  const json = await response.json()
  console.log(json)
  document.querySelector('#name').innerHTML = json.name
  document.querySelector('#age').innerHTML = json.age
})
