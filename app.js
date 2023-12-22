// Timer 
    let timeleft = 5;
    let timer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(timer);
            document.querySelector(".time").textContent = "0";
            alert("Шалгалтын хугацаа дууссан байна!!! Шинээр эхлэх уу?");
            //Page huudsiig automataar refresh hiine
            location.reload();
        }else{
            document.querySelector(".time").textContent = timeleft;
        }
        timeleft -= 1;
    },20000)
//Questions EventListener

let options = document.querySelector(".option-box");
options.addEventListener('click', function(event){

    let elements =  document.querySelectorAll(".checker");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.display = "block";
    }
    
});
// Next Button EventListener
let pageCount = 2;
let nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener('click', function(event){
    //Icons uudig Дараагын товч дархад түр алга болгоно
    let elements =  document.querySelectorAll(".checker");
    for(let i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
    //Page huudasuud
    if(pageCount  == 2){
        document.querySelector(".pages").textContent = '2';
        document.querySelector(".title").textContent = 'Бүх жин гэж юу вэ?';
        document.querySelector(".answer-1").textContent = '1.Тээврийн хэрэгслийн тухайн үеийн жин';
        document.querySelector("#icons-1").classList.remove('fa-check');
        document.querySelector("#icons-1").classList.add('fa-times');
        document.querySelector(".answer-2").textContent = '2.Тээврийн хэрэгслийн техникийн тодорхойлолтоор тогтоосон жин';
        document.querySelector("#icons-2").classList.remove('fa-times');
        document.querySelector("#icons-2").classList.add('fa-check');
        document.querySelector(".answer-3").textContent = '3.Тээврийн хэрэгслийн өөрийн жин';
        document.querySelector(".answer-4").textContent = '4.Тээврийг хэрэгслийн даацын хэмжээ';
    }
    else if(pageCount == 3){
        document.querySelector(".pages").textContent = '3';
        document.querySelector(".title").textContent = 'Бодит жин гэж ву вэ?';
        document.querySelector(".answer-1").textContent = '1.Тээврийн хэрэгслийн өөрийн жин';
        document.querySelector(".answer-2").textContent = '2.Тээврийн хэрэгслийн техникийн тодорхойлолтоор тогтоосон жин';
        document.querySelector("#icons-2").classList.remove('fa-check');
        document.querySelector("#icons-2").classList.add('fa-times');
        document.querySelector(".answer-3").textContent = '3.Тээврийн хэрэгслийн тухайн үеийн жин';
        document.querySelector("#icons-3").classList.remove('fa-times');
        document.querySelector("#icons-3").classList.add('fa-check');
        document.querySelector(".answer-4").textContent = '4.Тээврийг хэрэгслийн даацын хэмжээ';
    }
    else if(pageCount == 4){
        document.querySelector(".pages").textContent = '4';
        document.querySelector(".title").textContent = 'Байр эзлэх гэж юу вэ?';
        document.querySelector(".answer-1").textContent = '1.Тээврийн хэрэгслийг зогсоолд байрлуулах үйлдэл';
        document.querySelector(".answer-2").textContent = '2.Яавж байгаа чигтээ энгээ байраа солих үйлдэл';
        document.querySelector("#icons-2").classList.remove('fa-times');
        document.querySelector("#icons-2").classList.add('fa-check');
        document.querySelector(".answer-3").textContent = '3.Замаас гарах буюу замд нийлэх үйлдэл';
        document.querySelector("#icons-3").classList.remove('fa-check');
        document.querySelector("#icons-3").classList.add('fa-times');
        document.querySelector(".answer-4").textContent = '4.Урдаа яаваа тээврийн хэрэгслийн урд гарах';
    }
    else if(pageCount == 5){
        document.querySelector(".pages").textContent = '5';
        document.querySelector(".title").textContent = 'Хэнийг "Жолооч"-д хамааруулж ойлгох вэ?';
        document.querySelector(".answer-1").textContent = '1.Жолоодлогын дадлага хийж яваа багш';
        document.querySelector(".answer-2").textContent = '2.Ердийн хөсөг хөтөлж замаар яваа хүн';
        document.querySelector("#icons-2").classList.remove('fa-check');
        document.querySelector("#icons-2").classList.add('fa-times');
        document.querySelector(".answer-3").textContent = '3.Унадаг дугуй унаж яваа хүн';
        document.querySelector(".answer-4").textContent = '4.Дээрх бүгдийг хамааруулж ойлгоно';
        document.querySelector("#icons-4").classList.remove('fa-times');
        document.querySelector("#icons-4").classList.add('fa-check');
        
    }
    else{
          //Asuult duusah uy
        alert("Асуулт дууслаа!! Баярлалаа.");
        //Page huudsiig automataar refresh hiine
        location.reload();
    }
    //page huudsiin tooluur
    pageCount += 1;
});
