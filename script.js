Start = document.getElementsByClassName('Start')[0]
startmenuIcon = document.getElementsByClassName('startmenuIcon')[0]

Start.addEventListener('click', ()=>{
   if (startmenuIcon.style.bottom == '50px') {
      startmenuIcon.style.bottom = '-490px'
   }
   else{
      startmenuIcon.style.bottom = '50px'
   }
})

Search = document.getElementsByClassName('Search')[0]
SearchMenuIcon = document.getElementsByClassName('SearchMenuIcon')[0]

Search.addEventListener('click', ()=>{
   if (SearchMenuIcon.style.bottom == '50px') {
      SearchMenuIcon.style.bottom = '-490px'
   }
   else{
      SearchMenuIcon.style.bottom = '50px'
   }
})

Chrome = document.getElementsByClassName('chrome')[0]
ChromeWeb = document.getElementsByClassName('ChromeWeb')[0]

Chrome.addEventListener('click', ()=>{
   if (ChromeWeb.style.display == 'block') {
      ChromeWeb.style.display = 'none'
   }
   else{
      ChromeWeb.style.display = 'block'
   }
})

Chrome = document.getElementsByClassName('chrome')[0]
ChromeWeb = document.getElementsByClassName('ChromeWeb')[0]

ChromeWeb.addEventListener('click', ()=>{
   if (ChromeWeb.style.display == 'none') {
      ChromeWeb.style.display = 'block'
   }
   else{
      ChromeWeb.style.display = 'none'
   }
})

edge = document.getElementsByClassName('edge')[0]
edgeweb = document.getElementsByClassName('edgeweb')[0]

edge.addEventListener('click', ()=>{
   if (edgeweb.style.display == 'block') {
      edgeweb.style.display = 'none'
   }
   else{
      edgeweb.style.display = 'block'
   }
})

edgeweb = document.getElementsByClassName('edgeweb')[0]

edgeweb.addEventListener('click', () => {
   if (edgeweb.style.display == 'none') {
      edgeweb.style.display = 'block'
   }
   else {
      edgeweb.style.display = 'none'
   }
})
