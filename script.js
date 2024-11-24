function generateQRCode() {
  // Get the URL from the input field
  const url = document.getElementById("urlInput").value;

  // Check if the input is empty
  if (url === "") {
    alert("Please enter a URL!");
    return;
  }

  // Clear any existing QR code
  document.getElementById("qrcode").innerHTML = "";

  // Create a new canvas element for the QR code
  const canvas = document.createElement("canvas");

  // Generate the QR code using the qrcode.js library and the canvas element
  QRCode.toCanvas(canvas, url, function (error) {
    if (error) {
      console.error(error);
      alert("There was an error generating the QR code.");
    } else {
      console.log("QR code generated!");
      
      // Append the generated canvas to the "qrcode" div
      document.getElementById("qrcode").appendChild(canvas);
    }
  });
}
