let input_title = document.getElementById("input_title")
let  input_price = document.getElementById("input_cost")
const fetchedData = []
//====================|function:transaction|=======================//
document.getElementById("transaction").addEventListener("click",function () {
    fetchedData.push({
        title: input_title.value,
        cost : input_price.value,
        id: fetchedData.length + 1
    })
    refreshTable()
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

function clear_input () {
    input_title.value = ""
    input_price.value = ""
}
