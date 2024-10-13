document.getElementById('cash-out-button')
.addEventListener('click', function(event){
      event.preventDefault();
      console.log('cash out button click');
      const cashOut = getInputFaildValueById('input-cash-out');
      console.log(cashOut);
      const cashOutPin = getInputFaildValueById('cash-out-pin');
      console.log(cashOutPin);
      if(cashOutPin === 1234){
            console.log('cash out');
         const balance = getTextFaildValueById('account-balance');
         console.log(balance);
         const newBalances = balance - cashOut;
         document.getElementById('account-balance').innerText = newBalances;
            
      }
      else{
            alert('Faitl to cash out Please try agian')
      }
      
      
      
})