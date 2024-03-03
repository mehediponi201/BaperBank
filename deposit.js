document.getElementById('btn-deposit').addEventListener('click',function(){
    let depositField = document.getElementById('deposit-field');
    let newDepositAmount = depositField.value ;
    // Deposite
    let depositTotalElement = document.getElementById('deposit-total');
    let previousDepositTotal = depositTotalElement.innerText; 
    let currentDepositTotal = parseFloat(newDepositAmount)+ parseFloat(previousDepositTotal);
    depositTotalElement.innerText = currentDepositTotal;  
    depositField.value = '';
    //Balance
    let balanceTotalElement = document.getElementById('balance-total');
    let previousBalanceTotal = balanceTotalElement.innerText; 
    let currentBalanceTotal = parseFloat(newDepositAmount) + parseFloat(previousBalanceTotal);
    balanceTotalElement.innerText = currentBalanceTotal;
})