function generateQRCode() {
  
  const url = document.getElementById("urlInput").value;

  
  if (url === "") {
    alert("Please enter a URL!");
    return;
  }

  
  document.getElementById("qrcode").innerHTML = "";

  
  const canvas = document.createElement("canvas");

 
  QRCode.toCanvas(canvas, url, function (error) {
    if (error) {
      console.error(error);
      alert("There was an error generating the QR code.");
    } else {
      console.log("QR code generated!");
      
      
      document.getElementById("qrcode").appendChild(canvas);
    }
  });
}
