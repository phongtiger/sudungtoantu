let inputWidth;
let inputHeight;
inputWidth = prompt('Nhap chieu rong');
inputHeight = prompt('Nhap chieu dai');
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
let area = width*height;
document.write('Chieu rong ='+ inputWidth);
document.write('<br/>')
document.write('Chieu dai =' + inputHeight);
document.write('<br/>')
document.write("Dien tich la: " + area)