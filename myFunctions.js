function calculateTotal() {

    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var bank = document.getElementById("bank").value;

    // 🔐 تحقق من إدخال الحساب
    if (bank === "") {
        alert("يرجى إدخال رقم الحساب المصرفي");
        return false;
    }

    // 🔥 تحقق أنه أرقام فقط + 10 أو 12 رقم
    var bankDigits = bank.replace(/\D/g, "");

    if (bankDigits.length !== 10 && bankDigits.length !== 12) {
        alert("رقم الحساب يجب أن يكون 10 أو 12 رقم فقط");
        return false;
    }

    // تحقق من اختيار وجبة
    if (checkboxes.length === 0) {
        alert("يرجى اختيار وجبة واحدة على الأقل");
        return false;
    }

    var total = 0;

    checkboxes.forEach(function(item) {
        total += parseInt(item.value);
    });

    var tax = total * 0.10;
    var finalTotal = total + tax;

    document.getElementById("result").innerHTML =
        "تم الطلب بنجاح ✅<br>" +
        "الإجمالي: " + finalTotal;

    return false;
}
function toggleDetails(id) {
    var el = document.getElementById(id);

    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}