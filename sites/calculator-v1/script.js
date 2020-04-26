var result_box = document.getElementById("result");
var exp = result_box.getAttribute("value");
function insert(new_value){
    exp = exp + new_value;
    result_box.setAttribute("value", exp);
}
function del(){
    exp = ""
    result_box.setAttribute("value", exp);
}
function calc_result(){
    exp = eval(exp);
    result_box.setAttribute("value", exp);
}
