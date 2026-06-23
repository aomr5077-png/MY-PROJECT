let selectedparts = [];
let totalCost = 0;
function addPart(partName,partPrice ) {
const emptyMsg  = document.getElementById('empty-msg');
if (emptymsg) {
emptyMsg.style.display ='none';
}
selectedparts.push({ name: partName,price: partPrice});
totalcost+= partPrice;
const receiptBox = document.getElementById('receipt');
const newItem = document.createElement('div');
newItem.className = 'receipt-Item';
newItem.innerHTML = `<span>⚡ ${partName}</span> <span>${partPrice}$</span>`;
receiptBox.appendChild(newItem);
document.getElementById(total-cost).innerText - totalCost;
}
function clearSetup() {
selectedParts = [];
totalCost = 0;
document.getElementById('receipt').innerHTML = `<p id="empty-msg" style="text-align:center; color:#777; margin:10px 0;">Your cart is emptyMsg. clickbuttons above to build your system!</p>;
document.getElementById(total-cost).innerText = totalCost;
}


