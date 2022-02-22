let str1 = "Uwielbiam JavaScript";
let str2 = "Jestem świetnym programistą";
function fun (a ,b){
    let dl1 = str1.length;
    let dl2 = str2.length;
    if (dl1 > dl2) {
        return dl1;
    } else{
        return dl2;
    }
}
fun(str1, str2)