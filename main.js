let inp = document.getElementById('inp')

function innht(inn) {
  inp.value+=inn
  name='0'
}

function hisp() {
  inp.value=eval(inp.value)

}

function diilt() {
inp.value=''

}



let se = document.getElementById('se')

function cloak() {
  let itm = new Date()
  let hers = itm.getHours()
  let ment = itm.getMinutes()
  let sec = itm.getSeconds()

  if (sec < 10){ 
    
    sec ="0" + sec
    
  }

  se.innerHTML=`${hers} : ${ment} : ${sec}`
  setTimeout(function() {
  cloak()
  },1000)
  
}
cloak()

