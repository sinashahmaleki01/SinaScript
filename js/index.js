let input_title = document.getElementById("input_title")
let input_price = document.getElementById("input_price")
const fetchedData = []
//====================|function:transaction|=======================//
document.getElementById("transaction").addEventListener("click", function () {
    fetchedData.push({
        title: input_title.value,
        price: input_price.value,
        id: fetchedData.length + 1
    })
    refreshTable()
    price_balance()
})
//====================|function:refreshTable|=======================//
function refreshTable() {
    let data_list = document.getElementById("data_list")
    data_list.innerHTML = ""
    fetchedData.forEach(function (items, index) {
        data_list.innerHTML +=
            "<tr id='data_item'>" +
            "<td>" + items.title + "</td>" +
            "<td>" + items.price + "</td>" +
            "</tr>"
        clear_input()
    })
   
}
//====================|function:clear_input|=======================//

function clear_input() {
    input_title.value = ""
    input_price.value = ""
}
//====================|function:price_balance|=======================//
function price_balance() {
    let price_balance = document.getElementById("price_balance")
    let income = document.createElement("li")
    let expense = document.createElement("li")
    income.setAttribute("id", "income_section")
    expense.setAttribute("id", "outcome_section")


    price_balance.appendChild(income)
    price_balance.appendChild(expense)

   
    let income_total = 0
    let expense_total = 0

    for (let i = 0; i < fetchedData.length; i++) {
        const price = Number(fetchedData[i].price);
        if (!isNaN(price)) {
            if (price > 0) {
                income_total = income_total + price
            } else {
                expense_total = expense_total + price
            }
        }
    }
    console.log(expense_total);
    income.textContent = `income: ${income_total}`;
    expense.textContent = `expense: ${expense_total}`;
}
