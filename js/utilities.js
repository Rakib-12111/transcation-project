function getInputFaildValueById(id){
const value = document.getElementById(id).value;

const valueNumber = parseFloat(value);
return valueNumber;

};

function getTextFaildValueById(id){
   const textValue = document.getElementById(id).innerText;
   const textValueNumber = parseFloat(textValue);
   return textValueNumber;   
};

function showSectionById(id){
      // hide the all section
     document.getElementById('add-money-form').classList.add('hidden');
     document.getElementById('cash-out-form').classList.add('hidden');
     document.getElementById('transcaton-container').classList.add('hidden');
    // remove the all section 

   document.getElementById(id).classList.remove('hidden') 
}