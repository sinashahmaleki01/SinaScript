let input_title = document.getElementById("input_title")
let input_price = document.getElementById("input_price")
const fetchedData = []
//====================|function:transaction|=======================//
document.getElementById("transaction").addEventListener("click", function () {
    if (input_title.value == "" || input_price.value == "" ||  isNaN(input_price.value)) {
        validation(input_title, "Fill in the text")
        validation(input_price, "Fill in the Amount")
        return;
    }
    validation(input_title)
    validation(input_price)
    fetchedData.push({
        title: input_title.value,
        price: input_price.value,
        id: fetchedData.length + 1
    })
    refreshTable()
    price_balance()
    notification('description&title', "New Item Was Added")

})
//====================|function:refreshTable|=======================//
function refreshTable() {
    let data_list = document.getElementById("data_list")
    data_list.innerHTML = ""
    fetchedData.forEach(function (items, index) {
        data_list.innerHTML +=
            "<tr id='data_item'>" +
            "<td>" + items.title + "</td>" +
            "<td>$" + items.price + "</td>" +
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
    let income = document.getElementById("income_section")
    let expense = document.getElementById("expense_section")

    if (!income) {
        income = document.createElement("li")
        income.setAttribute("id", "income_section")
        price_balance.appendChild(income)
    }

    if (!expense) {
        expense = document.createElement("li");
        expense.setAttribute("id", "expense_section")
        price_balance.appendChild(expense)
    }
   
    let income_total = 0
    let expense_total = 0

    for (let i = 0; i < fetchedData.length; i++) {
        const price = Number(fetchedData[i].price)
        if (!isNaN(price)) {
            if (price > 0) {
                income_total = income_total + price
            } else {
                expense_total = expense_total + price
            }
        }
    }
    console.log(expense_total);
    income.textContent = 'income : +$'+income_total
    expense.textContent = 'expense : -$'+expense_total
    document.getElementById("your_balance").textContent = "$" + ( income_total + expense_total)
}
//====================|function_validation|====================// 
function validation(el, error) {
    if (el.value === "") {
        el.closest("label").setAttribute("data-error", error)
    }
    else {
        el.closest("label").removeAttribute("data-error")
    }
}
