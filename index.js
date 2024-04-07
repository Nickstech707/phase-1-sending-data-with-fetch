// Add your code here
function submitData( name, email ) {
    // Make a POST request to the url with the provided name and email as JSON data
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      // Parse the response as JSON
      .then( function ( response ) {
        return response.json()
      } )
      // Update the document body with the id from the response object
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      // If there is an error, update the document body with the error message
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }