document.getElementById('add-money-button')
.addEventListener('click', function(event){
      event.preventDefault();
      const addMoney = getInputFaildValueById('input-add-money');
      const pinNumber = getInputFaildValueById('input-pin-number');
      if(isNaN(addMoney)){
            alert('Invalid Number! Please vaild number Provide')
            return;
      }
      if(pinNumber === 1234){
        const balance = getTextFaildValueById('account-balance');
        const newBalance = addMoney + balance;
        document.getElementById('account-balance').innerText = newBalance;
        const p = document.createElement('p');

        p.style.padding = '2'
        p.innerText = `
        Added: ${addMoney} Tk. New Balance: ${newBalance}
        
        
        `
        document.getElementById('transcaton-container').appendChild(p)
          
            
      }
      else{
            alert('Faild to add money ! Please try again')
      }
      
      
})
