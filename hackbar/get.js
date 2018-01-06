const get = () => {// `← airbnb standard end the space →( string )
  let value = prompt( `Value get, exemple: name=jonh&age=15`, `` ) // Get values
  
  let final = document.URL.charAt( document.URL.length - 1 )// Get values url [ 0 => w, 1 => w, 2 => w, 3 => ., 4 => e, 6 => x, 7 => e, 8 => m, 9 => p, 10 => l, 11 => e, 12 => ., 13 => c, 14 => o, 15 => m]
  let url = ( final === `/` ) ? `` : `/` // if final = string "/" then null
  window.location = `${document.URL}&${value}` // redirect ( ͡° ͜ʖ ͡°)
}
