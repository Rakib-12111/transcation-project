document.getElementById('add-money-button')
.addEventListener('click', function(event){
      event.preventDefault();
      console.log('button click');
      const addMoney = getInputFaildValueById('input-add-money');
      console.log(addMoney);
      const pinNumber = getInputFaildValueById('input-pin-number');
      console.log(pinNumber);
      if(pinNumber === 1234){
          console.log('adding money');

        const balance = getTextFaildValueById('account-balance');
        console.log(balance);
        const newBalance = addMoney + balance;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;
        
          
            
      }
      else{
            alert('Faild to add money ! Please try again')
      }
      
      
})
