//File System
const fs = require('fs');

// Reading files
// fs.readFile('./docs/blog1.txt', (err, data) =>{
//     if(err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');

// Write Files

// fs.writeFile('./docs/blog1.txt', 'Hello Ninjas', () => {
//     console.log('File was written!');
// });
// fs.writeFile('./docs/blog11.txt', 'Hello World', () => {
//     console.log('File was written!');
// });

// Directories 

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder Created')
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }

// Deleting Files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted')
    })
}