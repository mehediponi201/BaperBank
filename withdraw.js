document.getElementById('btn-withdraw').addEventListener('click',function(){
    let withdrawField = document.getElementById('withdraw-field'); 
    let newWithdrawField = withdrawField.value ;

    let withdrawTotalElement = document.getElementById('withdraw-total'); 
    let previousWithdrawTotal = withdrawTotalElement.innerText; 

    let balanceTotalElement = document.getElementById('balance-total');
    let previousBalanceTotal = balanceTotalElement.innerText; 

    if(parseFloat(newWithdrawField ) > parseFloat(previousBalanceTotal)){
        alert('Not sufficient balance yet');
        return; 
    } 

    let currentWithdrawTotal = parseFloat(newWithdrawField) + parseFloat(previousWithdrawTotal); 
    withdrawTotalElement.innerText = currentWithdrawTotal; 
    withdrawField.value = '';


    let currentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawField); 
    balanceTotalElement.innerText = currentBalanceTotal;

})