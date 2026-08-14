/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.kpdf";
//write your code here

if (
    fileName.startsWith('#')||
    fileName.endsWith('.pdf') ||
    fileName.endsWith('.doxs')
)
console.log('Store')
else{
    console.log('Delete')
}