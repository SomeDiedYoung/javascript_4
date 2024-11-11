// დავწეროთ ფუნქცია, რომელიც პარამეტრად გადაცემულ ტექსტს
// დახრის, ქვეშ ხაზს გაუსვამს და გაამუქებს.


// function daxraTextis(text){
//     document.write("<u><i><b>"+text+"</b></i></u>");
// }

// daxraTextis("I`m Dying")


// დავწეროთ ფუნქცია, რომელიც გამოიტანს 2х2-ზე ცხრილს, ასევე
// გადაცემული პარამეტრების მიხედვით შეცვლის ცხრილის სიგანეს და
// სიმაღლეს.

// function siganedasimagle(height,width){
//     const table = document.createElement("table");
//     table.style.borderCollapse = "collapse";

//     table.style.width = `${width}px`;
//     table.style.height  = `${height}px`;
//     table.style.border = "1px solid black"

//     for(let i=0;i<2;i++){
//         const row = document.createElement("tr")
//         for(let j=0;j<2;j++){
//             const cell  = document.createElement("td")
//             cell.style.width = `${width}px`;
//             cell.style.height  = `${height}px`;
//             cell.style.border = "1px solid black"
//             cell.innerHTML =`Row ${i+1} , Column ${j+1} `
//             row.appendChild(cell);
//        }
//        table.appendChild(row);
//     }
//     document.body.appendChild(table)
// }

// siganedasimagle(500,500);


// 12. დავწეროთ ფუნქცია, რომელიც გამოიტანს 1-დან n-მდე ნატურალურ
// რიცხვებს ცალ-ცალკე ხაზზე, n პარამეტრია.


// function gamotana(n){
//     for(let i = 0;i<n;i++){
//         document.write(i + "<br>")
//     }
// }
// gamotana(8);


// დავწეროთ ფუნქცია, რომელიც გადაცემული პარამეტრების მიხედვით
// გამოიტანს შესაბამისი რაოდენობის სტრიქონებისა და სვეტების
// ცხრილს, თითოეულ უჯრაში ჩაწერს, თუ რომელ სტრიქონში და სვეტში
// მდებარეობს ეს უჯრა.


// function tablisGamotana(rows,collums){
//     const table = document.getElementsByTagName("table")[0];
//     table.style.borderCollapse="collapse"
//     table.style.border = "1px solid black";
//     for(let i=0;i<rows;i++){
//         const row = document.createElement("tr")
        
//         for(let j=0;j<collums;j++){
//             const col = document.createElement("td")
//             col.style.border = "1px solid black"
//             col.innerHTML= `Collumn ${j+1} , Row ${i+1}`
//             row.appendChild(col)
//         }
//         table.appendChild(row)
//     }

// }

// tablisGamotana(5,5)

// დავწეროთ ფუნქცია, რომელიც გამოიტანს 20 ფოტოდან შემთვევით
// რომელიმე 4 ფოტოს.


// function fourFrom(){
//     const container = document.getElementById("container")

    const photos = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];

// for(let k=0;k<4;k++){
//     var photosIndex = Math.floor(Math.random() * photos.length);
//     console.log(photosIndex)
    
//     var photo = photos[photosIndex];
    
//     var img = document.createElement("img")
//     img.style.width = "200px";
//     img.src = photo;      
//     container.appendChild(img)
//     }
// }
// fourFrom();


// 15. დავწეროთ ფუნქცია, რომელიც გამოიტანს კვირის რომელიმე
// შემთხვევით დღეს ხუთი ფოტოდან რაიმე შემთხვევითად აღებულ
// ფოტოსთან ერთად.



// const weekDay = ["შაბათი", "კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი"];

// function dayAndPhoto(){
//     let randomIndex = Math.floor(Math.random()*7);
//     document.write(weekDay[randomIndex])
//     var photoebi = photos[randomIndex];
//     let image = `<img src="${photoebi}">`
//     document.write(image)

// }

// dayAndPhoto()


// დავწეროთ ფუნქცია, რომელიც გამოიტანს 3x4 ცხრილს, რომლის
// თითოეულ უჯრაში ჩასმული იქნება შემთხვევითად აღებული ფოტო 20
// ფოტოდან.


//  function  davigale(){



//     table.style.borderCollapse="collapse"
//     table.style.border = "1px solid black"
    
//     for(let r=0;r<3;r++){
//         const trow = document.createElement("tr");
//         for(let p =0 ; p<4;p++){

//             const photosRandomIndex = Math.floor(Math.random() * 7);
//             var image  = `<img src="${photos[photosRandomIndex]}" style="width:100px">` ;
//             // console.log(image)
            
//             const tcol =  document.createElement("td");

//             tcol.style.border="1px solid black"
//             tcol.innerHTML = image; 
            
//             trow.appendChild(tcol)
//         }
//         table.appendChild(trow);
//     }
//     document.body.appendChild(table)

//  }

//  davigale()



// 19. შექმენით ფორმა, რომელიც საშუალებას მოგვცემს ავირჩიოთ
// ცხრილისთვის სასურველი რაოდენობის სვეტები და სტრიქონები, ასევე

// ავირჩიოთ სასურველი რაოდენობის ფოტოები, ღილაკზე დაკლიკებისას
// გამოვიტანოთ არჩეული რაოდენობის სვეტებისა და სტრიქონების
// ცხრილი, რომელშიდაც იქნება ჩასმული არჩეული რაოდენობის
// ფოტოები.

//     var count =0;
// function UniqueFunctionDoingEveryThing(){
//     if(count%2==0){
//         const table = document.createElement("table");
//         table.style.borderCollapse="collapse"
//         table.style.border = "1px solid black";
    
//         const rowsQuatity = document.getElementById("numRow")
//         const rowsValue = rowsQuatity.value
        
//         const colsQuatity = document.getElementById("numCol")
//         const colsValue = colsQuatity.value
        
//         const photosQuantity = document.getElementById("inputPhotos")
//         const photosValue = photosQuantity.value

//         var photosCount = 0;
    
        
//         for(let z=0;z<rowsValue;z++){
            
//             const rowInTable = document.createElement("tr")
//             for(let b=0; b<colsValue;b++){
//                 const cellInTable = document.createElement("td")
//                 cellInTable.style.border = "1px solid black"
//                 cellInTable.style.width = "50px";
//                 cellInTable.style.height = "50px";
//                 photosCount++;
//                 if(photosCount<=photosValue){
//                     const photosRandomIndex = Math.floor(Math.random() * 7);
//                     const image = document.createElement("img");
//                     image.src = photos[photosRandomIndex]
//                     image.style.width="100px"
    
//                     cellInTable.appendChild(image) 
//                 }
    
//                 rowInTable.appendChild(cellInTable)
//             }
//             table.appendChild(rowInTable)
//         }
//         document.body.appendChild(table)
//     }
//     else{
//         document.write("Wadi sheni .....")
//     }
//     count++;
// }





// დაწერეთ ფუნქცია, რომელიც დაითვლის სტრიქონში სიმბოლო a-ის
// რაოდენობას.


// function datvla(){
//     let string = "grwgq3,voq4bom4qmpbi4rbkotbqnk eф nogo bbgo    brgboregborbфaovqa urbgerq bpgbqr gbar a gquregbqrbiqi3ur augi4u3ytuyt apo    ywetwaa    oavmvxz,."
//     let k = string.split("a").length-1
//     console.log(string.length)
//     console.log(k)
// }


// datvla()







// 5. დაწერეთ ფუნქცია, რომელიც დააგენერირებს 40 შემთხვევითი
// სიმბოლოსაგან შემდგარ სიტყვას.


// function randomWord(){
//     let word = ""
//     for(let i =0;i<40;i++){
//         let rand = Math.floor(Math.random()*(525-132)+132);
//         word += String.fromCharCode(rand)
//         console.log(word)

//     }
//     console.log(word.length)
//     document.write(word)
// }
// randomWord()









// დავწეროთ ფუნქცია, რომელიც დაბეჭდავს შემთხვევით რიცხვს
// პარამეტრებად გადაცემული [a, b] შუალედიდან.



// function randRicxvisBechvda(a,b){
//     let num = Math.floor(Math.random() * (a-b)+b);
//     console.log(num)
// }

// randRicxvisBechvda(1,10);









// 9. დაწერეთ ფუნქცია რომელიც დაადგენს სტრიქონში მოიძებნება თუ არა
// სტრიქონების მასივში ჩაწერილი სიტყვები.

// function striqonshiDzebna(){
//     const randomYleobaSityva ="Gsgr GAY gsgr  gr gay dead gay efEGFwE Grhaeonio wohiw NBNDIKB NYA nya skksks g54wn qbub rwo the at ver are acasv  coming AAAAAAAAAAaf dsga "

// const SityvebisMasivi= ["gay","gyatt","aquaNigga","feeaf","galileo","monkSoso","dedamiwa","merxeva","rwo"]

// for(let i=0;i<SityvebisMasivi.length;i++){
//     if(randomYleobaSityva.includes(SityvebisMasivi[i])){
//         console.log("includes : "+SityvebisMasivi[i])
//         }
//     }

// }
// striqonshiDzebna();














// დაწერეთ ფუნქცია, რომელიც სტრიქონში დატოვებს მხოლოდ
// განსხვავებულ სიმბოლოებს, ხოლო დანარჩენებს წაშლის, დაადგენს
// თითოეული სიმბოლო რა სიხშირით შეგხვდა სტრიქონში.



// function onlyDiffChars(){
//     const randomYleobaSityva ="Gsgr GAY gsgr  gr ^@*$gay dea4d gay efEG845WFwE Grhaeonio wohiw NBNDIKB NYA nya skksk3#@!%^Aaf dsga "
    
//     let chars={}
//     for(let i =0; i<randomYleobaSityva.length;i++){
//         const char = randomYleobaSityva[i];
//         if()
//     }


// }

// onlyDiffChars()



// 13. დაწერეთ ფუნქცია, რომელიც დაგვიბრუნებს სტრიქონში ქვესტრიქონის
// რაოდენობას.

// function qvestriqonebi(inputedString){
//     let wordsCount = inputedString.split(" ").length-1;
//     console.log(wordsCount)
// }
//     const randomYleobaSityva ="Gsgr GAY gsgr  gr ^@*$gay dea4d gay efEG845WFwE Grhaeonio wohiw NBNDIKB NYA nya skksk3#@!%^Aaf dsga "

// qvestriqonebi(randomYleobaSityva);







// 10. დაწერეთ ფუნქცია, რომელიც სტრიქონში მოძებნის სტრიქონების მასივში
// ჩაწერილ სიტყვებს და თუ მოიძებნა რომელიმე სიტყვა, სტრიქონში ამ
// სიტყვის შემადგენელ სიმბოლოებს შეცვლის შესაბამისი რაოდენობის „ * “
// სიმბოლოთი, ე.წ. ტექსტების ფილტრაცია, უცენზურო სიტყვების დაფარვა.

// function checkForBanWords() {
//     const string = "Some Long Word with bad words like : Damn , Shit , Gay , Bi";
//     const banWords = ["Damn", "Shit", "gay"];

//     let words = string.split(" ");

//     for (let i = 0; i < words.length; i++) {
//         let cleanedWord = words[i].trim().replace(",", "");
//         const lowerCaseWord = cleanedWord.toLowerCase();
        
//         if (banWords.map(word => word.toLowerCase()).includes(lowerCaseWord)) {
//             const stars = "*".repeat(cleanedWord.length);
//             words[i] = stars; 
//         }
//     }
    
//     const clearString = words.join(" ");
//     return clearString;
// }

// console.log(checkForBanWords());







// ააგეთ ქვემოთ მოცემული ფორმა, რიცხვზე დაჭერის შედეგად ტექსტურ
// ველში გამოიტანეთ კვირის შესაბამისი დღე


// const weekDay = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი","შაბათი", "კვირა"];

// const input = document.getElementById("inputDay");

// function valueToOutput(i){
//     /*for(let l=0; l < 7 ; l++){
//     const button = document.getElementsByClassName("btn")[l];   <<--- //Ar mchirdeba sul
//     }
//     */
//     input.value = weekDay[i-1];

// }







// დაწერეთ ფუნქცია, რომელიც ღილაკზე დაჭერის შედეგად div თაგში
// გამოიტანს 30 შემთხვევით რიცხვ [0, 30] შუალედიდან.

// function appendInDiv() {
//     let div = document.getElementById("containerForNums");
//     div.innerHTML = ""; // очищаем контейнер перед добавлением новых чисел
//     for (let i = 0; i < 30; i++) {
//         let randomItem = Math.floor(Math.random() * 31); // случайное число от 0 до 30
//         div.innerHTML += randomItem + " "; // добавляем пробел между числами
//     }
// }









// დაწერეთ ფუნქცია, რომელიც ღილაკზე დაჭერის შედეგად div თაგში
// გამოიტანს 30 შემთხვევით რიცხვ [a, b] შუალედიდან, a-ს და b-ს შეტანა
// მოახდინეთ ფორმიდან.


// function rangedDiv(){
//     const divRanged = document.getElementById("containerForRangedItems");
//     const inputFromA = document.getElementById("a").value
//     const inputFromB = document.getElementById("b").value
//     divRanged.textContent=""

//     if (inputFromB > inputFromA) {
//         for (let o = 0; o < 30; o++) {
            
//             let randNum = Math.floor(Math.random() * (inputFromB - inputFromA + 1) + inputFromA);
//             console.log(randNum);
//             divRanged.textContent += randNum + " "; 
//         }
//     } else {
//         divRanged.textContent = "Invalid input"; 
//     }


// }



// 7. შექმენით ფორმა, რომელიც საშუალებითაც შესაძლებელია ცხრილის
// სასურველი რაოდენობის სვეტები და სტრიქონების არჩევა, ასევე
// სასურველი რაოდენობის ფოტოების არჩევა, ღილაკზე დაჭერისას div
// თაგში გამოიტანეთ არჩეული რაოდენობის სვეტებისა და სტრიქონების

// ცხრილი, რომელშიდაც იქნება ჩასმული არჩეული რაოდენობის ფოტოები
// (10 ფოტოდან) მონაცემების შეტანის სისწორე შეამოწმეთ პროგრამულად.

// function yvelaferi(){
//     const mainTable = document.getElementsByClassName("table")[0];
//     console.log(mainTable)
//     mainTable.style.borderCollapse = "collapse"
//     mainTable.style.border ="1px solid black"
// const valueOfColsInput = document.getElementById("sveti").value
// const valueOfrowsInput = document.getElementById("striqoni").value
// const valueOphotoInput = document.getElementById("foto").value
// console.log(valueOphotoInput)
// let photoCount = 0;
// for(let i=0;i<valueOfrowsInput;i++){
//     const striqoni = document.createElement("tr")

//     for(let j=0;j<valueOfColsInput;j++){
//         const sveti = document.createElement("td")
//         sveti.style.width="100px"
//         sveti.style.height="100px"
//         sveti.style.border="1px solid black"

//         if(photoCount<valueOphotoInput){
//                 let randomPosition = Math.floor(Math.random()*photos.length);
//                 const img = document.createElement("img");
//                 img.style.width="100px"
//                 img.style.height="100px"
//                 img.src=photos[randomPosition];
//                 sveti.appendChild(img)
            
//             photoCount++;
//         }

//         striqoni.appendChild(sveti)
//     }
//     mainTable.appendChild(striqoni)
//     }
// }





// 1. დიალოგური ფანჯარა alert

// function dialogBoxAlert(){
//     const divi = document.getElementById("container")
//     alert("hello ,i`m dialog box")
//     divi.textContent="Ketili iyos tqveni mobrdzaneba da zogadad tqveni ketili m..."
// }

// dialogBoxAlert()



// 2. დიალოგური ფანჯარა confirm.

// function dialogBoxConfirm(){
//         const rrrr = document.getElementById('container');
//         const userConfirmation =confirm("Gsurt Analuri Jojoxeti iafad?")
//         if(userConfirmation){
//             rrrr.innerHTML=" tqveni ketilebi"
//         }else{     rrrr.innerHTML=" She chuchkiano piderasto "
//         }
// }
// dialogBoxConfirm()

// function advancedConfirm(){
//         const divForLis = document.getElementById("ragaca")
//         const userConfirmation =confirm("Gsurt Analuri Jojoxeti iafad?")
//                 if(userConfirmation){
//             divForLis.style.display = "block"
//         }else{    
//             divForLis.style.display ="block"

//             divForLis.innerHTML=" She chuchkiano piderasto "
//         }
// }advancedConfirm()







// 3. დიალოგური ფანჯარა prompt.

// function promptAndDay(){

// const weekDay = ["ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი","შაბათი", "კვირა"];
//       const divForLis = document.getElementById("ragaca")

//     const promptInfo = prompt("SheiyvaneT 52 gay aktivisti")

//     if (promptInfo >= 1 && promptInfo <= 7) {
//         divForLis.innerHTML = weekDay[promptInfo - 1];
//     } else {
//         divForLis.innerHTML = "Invalid input";
//     }
// }


// promptAndDay()



// 4

// function displayCurrentDateTime() {
//     const now = new Date();

//     const year = now.getFullYear();
//     const month = now.getMonth() + 1; // Months are 0-based, so add 1
//     const date = now.getDate();
//     const day = now.getDay(); // Day of the week (0 = Sunday, 6 = Saturday)
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     const milliseconds = now.getMilliseconds();

//     const daysOfWeek = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
    
//     console.log(`წელი: ${year}`);
//     console.log(`თვე: ${month}`);
//     console.log(`რიცხვი: ${date}`);
//     console.log(`კვირის დღე: ${daysOfWeek[day]}`);
//     console.log(`საათი: ${hours}`);
//     console.log(`წუთი: ${minutes}`);
//     console.log(`წამი: ${seconds}`);
//     console.log(`მილიწამი: ${milliseconds}`);
// }

// displayCurrentDateTime();


// // 5 elektrosaati
// function displayCurrentTime() {
//     const pTag = document.createElement("p");
//     document.body.appendChild(pTag);

//     setInterval(() => {
//         const nowDate = new Date();
//         const nowHours = String(nowDate.getHours()).padStart(2, '0');
//         const nowMinutes = String(nowDate.getMinutes()).padStart(2, '0');
//         const nowSeconds = String(nowDate.getSeconds()).padStart(2, '0');

//         pTag.innerHTML = nowHours + " : " + nowMinutes + " : " + nowSeconds;
//     }, 1000); // Update every second
// }

// displayCurrentTime();

//6
// function timeSince2016() {
//     // Define the start date (January 1, 2016)
//     const startDate = new Date('2016-01-01T00:00:00');
//     // Get the current date and time
//     const now = new Date();

//     // Calculate the difference in milliseconds
//     const diffInMs = now - startDate;

//     // Convert milliseconds to seconds
//     const totalSeconds = Math.floor(diffInMs / 1000);
    
//     // Calculate days, hours, minutes, and seconds
//     const days = Math.floor(totalSeconds / (3600 * 24));
//     const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     // Display the result
//     console.log(`From January 1, 2016, until now: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`);
// }

// // Call the function
// timeSince2016();









// დავალება №1 (4 ქულა)
// დაწერეთ ფუნქცია, რომელიც დაბეჭდავს 30 შემთხვევით ლუწ რიცხვს და თითოეული რიცხვისთვის შეამოწმებს
// მისი რომელიმე ციფრი ხომ არ არის ნულის ტოლი.

// function bechvda() {
//     let count = 0;
//     const outputDiv = document.createElement("div");
//     document.body.appendChild(outputDiv);

//     while (count < 30) {
//         const randNumber = Math.floor(Math.random() * (100 - 50 + 1) + 50);

//         if (randNumber % 2 === 0) {
//             outputDiv.innerHTML += randNumber + " "; 
//             count++;
//             console.log(randNumber)

//             if (String(randNumber).includes('0')) {
//                 outputDiv.innerHTML += `${randNumber} შეიცავს 0<br>`;
//                 console.log(randNumber)

//             }
//         }
//     }
// }

// bechvda();

// დავალება №2 (4 ქულა)
// დაწერეთ ფუნქცია, რომელიც დააგენერირებს შემთხვევით პაროლს, რომელიც აუცილებლად შეიცავს 4 დიდი
// ინგლისურის სიმბოლოს, 4 პატარა ინგლისურ სიმბოლოს, 2 ციფრს და 2 სპეცისიალურ სიმბოლოს (სპეციალური
// სიმბოლოებია #, $, !, @, %, ^, &amp;, *). პაროლში სიმბოლოების თანმიდევრობა არის შემთხვევითია.
// const capital = ['A', 'B', 'C', 'D', 'H', 'Q', 'Y', 'Z', 'I', 'J', 'N', 'V', 'W', 'R', 'T', 'S', 'D', 'F', 'G'];
// const lower = ['a', 'b', 'd', 'x', 'z', 'r', 'y', 'w', 'j', 'g', 'v', 'c', 'u', 'y', 'i', 'o', 'k', 'm', 'n', 'q'];
// const symbol = ["!", "@", "#", '$', '%', "^", '&', '*', '<', ">"];
// const digit = "0123456789";

// function randPassword() {
//     let password = ""; 

//     for (let i = 0; i < 4; i++) {
//         password += capital[Math.floor(Math.random() * capital.length)];
//         password += lower[Math.floor(Math.random() * lower.length)];
//     }

//     for (let i = 0; i < 2; i++) {
//         password += symbol[Math.floor(Math.random() * symbol.length)];
//         password += digit.charAt(Math.floor(Math.random() * digit.length));
//     }

//     password = password.split('').sort(() => Math.random() - 0.5).join('');
//     return password;
// }

// console.log(randPassword());



// დავალება №3 (4 ქულა)
// დაწეროთ ფუნქცია, რომელიც გამოიტანს NxM-ზე რაოდენობის div თაგს N სტრიქონში და M სვეტში (N და M
// აუცილებლად აკმაყოფილებს შემდეგ პირობებს , N და M მნიშვნელობები შეიტანეთ დიალოგური ფანჯრიდან).
// გამოტანილი დივებიდან შემთხვევითად შეარჩიეთ რომელიმე 5 დივი და ჩასვით ასევე შემთხვევითი 200x200 ზე
// ფოტო წინასწარ აღებული 7 ფოტოდან.






// function Davaleba3(){
//     const Container = document.getElementById("container");
//     Container.style.display= "flex";

// const N = parseInt(prompt("SheiyvaneT Striqonebis raodenoba"))
// const M = parseInt(prompt("SheiyvaneT Svetebis raodenoba"))

// if(N == null || N=="" || M == null || M =="" ){
//     document.write("Invalid Input")
//     return 0;
// }

//     for(let i=0;i<N;i++){
//         const Striqonebi = document.createElement("div")
//         for(let j=0;j<M;j++){
//             const Svetebi = document.createElement("div")
//             Svetebi.style.width="100px";

//             Striqonebi.appendChild(Svetebi);
//         }
//         Container.appendChild().Striqonebi
//     }

// }







function generateCalendar() {
    const year = parseInt(document.getElementById("year").value);
    const month = parseInt(document.getElementById("month").value) - 1; // JavaScript months start at 0
    const calendarDiv = document.getElementById("calendar");
    
    // Create the date for the month
    const date = new Date(year, month);
    
    // Use 'let' instead of 'const'
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Determine the first day of the month
    const firstDay = date.getDay();

    // Build the calendar HTML
    let calendarHTML = "<table>";
    calendarHTML += "<tr><th>კვ</th><th>ორშ.</th><th>სამშ.</th><th>ოთხ.</th><th>ხუთ.</th><th>პარ.</th><th>შაბ.</th></tr><tr>";

    // Add empty cells for days before the first day
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += "<td></td>";
    }

    // Add the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        calendarHTML += `<td>${day}</td>`;
        if ((day + firstDay) % 7 === 0) {
            calendarHTML += "</tr><tr>";
        }
    }

    // Close any remaining cells in the last row
    while ((daysInMonth + firstDay) % 7 !== 0) {
        calendarHTML += "<td></td>";
        daysInMonth++; // This line is now valid
    }

    calendarHTML += "</tr></table>";

    // Update the calendar div
    calendarDiv.innerHTML = calendarHTML;
}


