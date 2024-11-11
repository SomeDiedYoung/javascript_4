// 3. დავწეროთ ფუნქცია, რომელიც პარამეტრად გადაცემულ ტექსტს
// გამოიტანს ასევე პარამეტრად გადაცემული ზომის შრიფტით.

function someFunc(text,size){
    let div = document.createElement("div")
    div.textContent = text;
    div.style.fontSize=size +"px"
    document.body.append(div)
}

someFunc("asfsaf",50)