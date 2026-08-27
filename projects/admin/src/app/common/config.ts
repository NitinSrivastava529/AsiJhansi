export const CONFIG={
    API_URL:window.location.origin.includes('localhost') ? 'http://localhost:5180/' :'http://api.asijhansicircle.com/',
    ROOT_URL:window.location.origin.includes('localhost') ? 'http://localhost:4201/' : window.location.origin+'/',
} 

export const Active=(localStorage.hasOwnProperty('LoginInfo'))?JSON.parse(localStorage.getItem('LoginInfo')||''):'';