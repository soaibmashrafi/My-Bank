document.getElementById("btn-deposit").addEventListener('click', function () {
    // console.log("deposit added");
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(depositValue);

    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert("Please Insert A Number");
        return;
    }

    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // console.log(previousDepositTotal);

    if (newDepositAmount <= 0) {
        alert('Wrong Deposit Amount');
        return;
    }

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    const currentBalanceTotal = newDepositAmount + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;

})