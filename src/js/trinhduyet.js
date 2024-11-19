function generateQRCode() {
  var paymentMethod = document.getElementById("cars").value;
  var amount = document.getElementById("amount").value;
  document.getElementById("qrcode").innerHTML = "";
  if (paymentMethod === "volvo" || amount === "") {
    alert("Vui lòng chọn hình thức thanh toán và nhập số tiền.");
    return;
  }

  if (paymentMethod === "opel") {
    alert("Vui lòng quẹt thẻ tín dụng.");
    return;
  }
  var qrData = "Thanh toán " + amount + " VND qua " + paymentMethod;
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: qrData,
    width: 128,
    height: 128,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L,
  });
}
