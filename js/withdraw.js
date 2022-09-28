document.getElementById("btn-withdraw").addEventListener("click", function () {
    // console.log("withdraw clicked");
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert("Please Insert A Number");
        return;
    }
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal);

    if (newWithdrawAmount <= 0) {
        alert('Wrong Withdraw Amount');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Insufficient Balance');
        return;
    }

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})