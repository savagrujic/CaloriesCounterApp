
let breakfestdiv = document.querySelector('.dodajdorucak')
let luchdiv = document.querySelector('.dodajrucak')
let dinnerdiv = document.querySelector('.dodajveceru')
let snackdiv = document.querySelector('.dodajuzinu')
let workoutdiv = document.querySelector('.dodajworkout')

let biraj = document.querySelector('select')
let dugme = document.querySelector('.dodajpodatke')
let caloriebudget = document.querySelector('.caloriebudget')
let caloriecounter = 0;
adding_workout= false
let fullcalories = document.querySelector('.finalcalories')
let calorieburned = document.querySelector('.calorieburned')
cannaddcalories = true
let caloriesbe  = 0
let b = 0
function DodajCalorie(div) {
    cannaddcalories = false



    let title = document.createElement('h4')
   
    let input1 = document.createElement('input')
    let caloriesdescription = document.createElement('h4')
    
    if (adding_workout) {
        title.textContent = 'Enter name of the workout:'
        caloriesdescription.textContent = 'Enter Calories you burned:'
    
     } else {
         title.textContent = 'Enter name of the food'
         caloriesdescription.textContent = 'Enter Calories:'
     }
    let input2 = document.createElement('input')
    let button = document.createElement('button')
    let cancle = document.createElement('button')
    button.textContent = 'Dodaj'
    cancle.textContent = 'Otkazi'
    let tempdiv = document.createElement('div')
    tempdiv.appendChild(title)
    tempdiv.appendChild(input1)
    tempdiv.appendChild(caloriesdescription)
    tempdiv.appendChild(input2)
    tempdiv.appendChild(button)
    tempdiv.appendChild(cancle)
    div.appendChild(tempdiv)

    cancle.addEventListener('click', function (){
        adding_workout = false
        div.removeChild(tempdiv)
        cannaddcalories = true
        dugme.disabled = false
    })






    button.addEventListener('click', function() {
        let burnedcalories = 0
        

        let curretbudget = Math.floor(caloriebudget.value)
        caloriecounter+= Math.floor(input2.value)
        if ((curretbudget > caloriecounter) ||  (curretbudget=== caloriecounter) ){ 
            caloriesbe = curretbudget - caloriecounter  
            fullcalories.textContent = caloriesbe + ' Left'
            fullcalories.style.color = 'green'
            console.log(caloriesbe)
            console.log(caloriecounter)
           }
        if (curretbudget < caloriecounter) {
            caloriesbe= caloriecounter  - curretbudget 
            fullcalories.textContent = caloriesbe + ' Surplus'
             fullcalories.style.color = 'red'     }
        
        
        
        
        if(input1.value != '' && input2.value != '' && !isNaN(input2.value) && isNaN(input1.value)) {
       dugme.disabled = false
        console.log('klik')
        let a = input1.value
        let b = input2.value
        
        title.textContent = a
        caloriesdescription.textContent = '|           ' +  b  +  ' Calories'
        caloriesdescription.style.marginLeft = '20px'
        tempdiv.removeChild(input1)
        tempdiv.removeChild(input2)
        tempdiv.removeChild(button)
        tempdiv.removeChild(cancle)
        tempdiv.style.display = 'flex'
        tempdiv.style.marginBottom = '20px'
        tempdiv.classList.add('tekstzuti')
        
        cannaddcalories = true
        //div.appendChild(b)
        }
        else if (isNaN(input2.value)) {
            alert('Calorie mogu biti samo broj!')
        }
        else   {
            alert('ne mozes uneti prazno polje')
        }
    })
   
}




function Izaberi() {
    
if(biraj.options.selectedIndex === 0 ) {
    console.log('test')
    DodajCalorie(breakfestdiv)

}
else if(biraj.options.selectedIndex === 1 ) {
    DodajCalorie(luchdiv)
}
else if(biraj.options.selectedIndex === 2 ) {
    DodajCalorie(dinnerdiv)
}
else if(biraj.options.selectedIndex === 3 ) {
    DodajCalorie(snackdiv)
}
}

dugme.addEventListener('click', function() {
    
    if(
        caloriebudget.value === '') {alert('Unesi Dnevni Iznos kalorija!')

    }
    else {
        Izaberi()
        dugme.disabled = true}
  
    
})
