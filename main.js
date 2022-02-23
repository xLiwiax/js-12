let str1 = "Uwielbiam JavaScript";
let str2 = "Jestem świetnym programistą";
function fun (a ,b){
    let dla = a.length;
    let dlb = b.length;
    if (dla > dlb) {
        return a;
    } else{
        return b;
    }
}
fun(str1, str2)