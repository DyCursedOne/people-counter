let count = 0;
let countEl = document.getElementById('count-el');
let btnIncrement = document.getElementById('increment-btn');
let saveEl = document.getElementById('save-el');
let firstUse = true;

function increment () {
  count = parseInt(count) + 1;
  countEl.textContent = count;
}

function save () {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let savedEntry = " - " + count;   
    
    if (firstUse) {
       savedEntry = count;
       firstUse = false;
    } 
     
    // 3. Render the variable in the saveEl using innerText       
    // NB: Make sure to not delete the existing content of the paragraph
       saveEl.textContent += savedEntry;
  countEl.textContent = 0;
  count = 0;
    console.log(count)
}