export const config={
    API_URL:window.location.origin.includes('localhost') ? 'http://localhost:5018/' :'http://api.bkurashtriyatawadi.in/',
    ROOT_URL:window.location.origin.includes('localhost') ? 'http://localhost:4200/' : window.location.origin+'/',
} 

export const Active=(localStorage.hasOwnProperty('MemberLoginInfo'))?JSON.parse(localStorage.getItem('MemberLoginInfo')||''):'';