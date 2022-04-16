const fetchPotholes = (id) => {
   let fetchCall = id ? fetch(`https://pot-spot.herokuapp.com/api/v1/potholes/${id}`) : fetch('https://pot-spot.herokuapp.com/api/v1/potholes') 
    .then(response => {
        if (response.status === 404) {
            throw new Error("404: Not Found")
        } else if (response.status === 500) {
            throw new Error("500: Server is having issues")
        }
        return response.json()
    })
    return fetchCall
}

const fetchPictures = () => {
    const fetchCall = fetch('https://pot-spot.herokuapp.com/api/v1/pictures')
     .then(response => {
         if (response.status === 404) {
             throw new Error("404: Not Found")
         } else if (response.status === 500) {
             throw new Error("500: Server is having issues")
         }
         return response.json()
     })
     return fetchCall
 }


 const addPothole = (newPothole) => {
    return fetch('https://pot-spot.herokuapp.com/api/v1/potholes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPothole)
    })
      .then(response => {
        console.log(response)
  
        if (!response.ok) {
          throw new Error("Please make sure that all fields are filled out")
  
        } else {
  
          return response.json()
        }
      })
  
  }

export { fetchPotholes, fetchPictures, addPothole }