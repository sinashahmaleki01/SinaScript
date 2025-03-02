let input_title = document.getElementById("input_title")
let input_price = document.getElementById("input_price")
const fetchedData = []
//====================|function:transaction|=======================//
document.getElementById("transaction").addEventListener("click", function () {
    /* Meysam:
    *  you need 2 types of error, empty and incorrect input validation
    */

    if (input_title.value == "" || input_price.value == "" || isNaN(input_price.value)) {
        validation(input_title, "Fill in the text")
        validation(input_price, "Enter a valid number")
        return
    }
    validation(input_price) /* Meysam: error function has 2 parameters, where is the "error" argument? */
    validation(input_title) /* Meysam: error function has 2 parameters where is the "error" argument? */
    fetchedData.push({
        title: input_title.value,
        price: input_price.value,
        id: fetchedData.length + 1
    })
    refreshTable()
    price_balance()
    notification('description&title', "New Item Was Added")  /* Meysam: what kind of mode is this? */

})
//====================|function:refreshTable|=======================//
function refreshTable() {
    let data_list = document.getElementById("data_list")
    data_list.innerHTML = ""
    fetchedData.forEach(function (items, index) {
        data_list.innerHTML +=
            "<tr>" +
            "<td>" + items.title + "</td>" +
            "<td>$" + items.price + "</td>" +
            "<td  onclick ='onclick_delete(" + index + ")'><i class='fa-solid fa-trash'></i></td>" +
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
    income.textContent = 'income : +$' + income_total
    expense.textContent = 'expense : -$' + expense_total
    document.getElementById("your_balance").textContent = "$" + (income_total + expense_total)
}
//====================|function_validation|====================// 
/*
* Meysam:
* set a default value for "error" argument if you don't want to be set all the time
* like this: function validation(el, error = '')
*/
function validation(el, error) {
    if (el.value === "" || (el === input_price && isNaN(el.value))) {
        el.closest("label").setAttribute("data-error", error)
    }
    else {
        el.closest("label").removeAttribute("data-error")
    }
}
//====================|function:onclick_delete|====================// 
function onclick_delete(index) {

    modalMaker({
        icon: [
            {
                func: function () {
                    closeModal()
                }
            }
        ],
        content: ["Are you Sure Want To Delete ?"],
        buttons: [
            { title: "ok", func: "onclick_ok_Delete(" + index + ")" },
            { title: "cancel", func: "onclick_cancel" }
        ]
    }, true)
    openModal()

}
//=====================|closeModal|====================// 
/* Meysam:
 * i said move it to shared.js file
 */
function closeModal() {
    overlay.style.display = "none"
    modal.remove()
}

//=====================|openModal|====================// 
/* Meysam:
 * i said move it to shared.js file
 */
function openModal() {
    console.log(modal);
    modal.classList.add("open-modal")
}
//=====================|onclick_ok_Delete|====================// 
/* Meysam:
 * what kind of name is this ? "onclick_ok_Delete" ??!! what is that mean
 */
function onclick_ok_Delete(index) {
    fetchedData.splice(index, 1)
    refreshTable()
    closeModal()
    price_balance()
    notification('description&title', "Item Was Deleted")
}
//=====================|onclick_cancel|====================// 
/* Meysam:
 * i said move it to shared.js file
 */
function onclick_cancel() {
    closeModal()
}



