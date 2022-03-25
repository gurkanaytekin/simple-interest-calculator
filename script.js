function compute()
{
    const principal = parseFloat(document.getElementById("principal").value);
    if(isAmountNegative(principal)) {
        document.getElementById("principal").focus();
        return alert('You to enter a positive number?');
    }

    const rate = parseFloat(document.getElementById("rate_val").innerText);
    const years = parseFloat(document.getElementById("years").value);
    const interest = principal * years * rate /100;
    const year = new Date().getFullYear()+parseInt(years, 10);
    document.getElementById("result").innerHTML="If you deposit <mark>"+ interest +"</mark>, <br />" +
    "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
    "You will receive an amount of <mark>" + principal + "</mark>,<br>" +
    "in the year <mark>" + year + "</mark><br>";
}

function isAmountNegative(principal) {
    return principal < 1 || isNaN(principal);
}

function updateRate(val) 
{
    document.getElementById("rate_val").innerText=val;
}
        