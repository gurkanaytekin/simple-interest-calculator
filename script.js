function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    if(isAmountNegative(principal)) {
        document.getElementById("principal").focus();
        return alert('You to enter a positive number?');
    }

    var rate = parseFloat(document.getElementById("rate_val").innerText);
    var years = parseFloat(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerText=interest;
}

function isAmountNegative(principal) {
    return principal < 1 || isNaN(principal);
}

function updateRate(val) 
{
    document.getElementById("rate_val").innerText=val;
}
        