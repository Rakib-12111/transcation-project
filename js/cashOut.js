document.getElementById('cash-out-button')
.addEventListener('click', function(event){
      event.preventDefault();
      
      const cashOut = getInputFaildValueById('input-cash-out');
      const cashOutPin = getInputFaildValueById('cash-out-pin');
      if(isNaN(cashOut)){
            alert('Invalid Number! Please valid number provide')
      }
      if(cashOutPin === 1234){
         const balance = getTextFaildValueById('account-balance');
         if(cashOut > balance){
            alert('you do not have enough money to cash out')
            return;
         }
         const newBalances = balance - cashOut;
         document.getElementById('account-balance').innerText = newBalances;
         const div = document.createElement('div');
         div.classList.add('bg-yellow-300');
         div.innerHTML = `
         <h class = "text-2xl font-bold text-red-500"> Cash Out </h>
         <p>Widrow: ${cashOut} Tk. New Balance:${newBalances}
         
         
         `   
         document.getElementById('transcaton-container').appendChild(div)
      }
      else{
            alert('Faitl to cash out Please try agian')
      }
      
      
      
})

