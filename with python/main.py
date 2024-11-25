import qrcode
print("Enter the url/text :")
your_qr = input(" ")

qr = qrcode.QRCode(
    version=1,  
    error_correction=qrcode.constants.ERROR_CORRECT_L,  
    box_size=20,  
    border=1, 
)


qr.add_data(your_qr)
qr.make(fit=True)


img = qr.make_image(fill='black', back_color='white')

img.show()
