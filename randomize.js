const chronos = document.getElementById('chronos');
const cyber = document.getElementById('cyber');
const inno =  document.getElementById('inno');
const senti = document.getElementById('senti');
const video = document.getElementById("vid");
const remaining = 78;
const button = document.getElementById('pickHouse');
console.log(remaining);


document.addEventListener("click",function(){
    video.muted = false;
   
})

let numbers = []
async function initialize(){
    try{
        const storedNumbers = localStorage.getItem('generatedNumbers');
        if(storedNumbers !== null){
            numbers=JSON.parse(storedNumbers);
        }
    }
    catch (error) {
        console.error('Error occurred:', error);
    }
}
initialize()



const random_char = () => {
    const possible = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" +
          "0123456789" +
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
          "abcdefghijklmnopqrstuvwxyz";
    return possible.charAt(Math.floor(Math.random() * possible.length));
  };

  const mask = (chars, progress) => {
    const masked = [];

    for (let i = 0; i < chars.length; i++) {
      const position = (i + 1) / chars.length;
      if (position > progress) {
        masked.push(random_char());
      } else {
        masked.push(chars[i]);
      }
    }

    return masked.join('');
  };

  const shuffle = el => {
    const chars = el.textContent.split('');

    const params = {
      progress: 0
    };

    const a = anime({
      targets: params,
      progress: 1,
      delay: 0,
      duration: 6500,
      easing: 'easeInQuad',
      update: () => {
        el.textContent = mask(chars, params.progress);
      },
      complete: () => {
        el.classList.add('completed');
      }
    });
   
  };
function randomize(){
   
    let number;
    for (const el of document.querySelectorAll('.shuffle')){
        el.style.display = "none";
    }
    do{
        button.disabled=true;
        number = Math.floor(Math.random() * remaining)+1;
        let count = 0
        if(!numbers.includes(number)){
            video.muted = false;
            video.loop = false;
            video.src = "vids/shuffle_house_5_secs_intense.mp4";
            numbers.push(number);
            console.log(numbers); 
            localStorage.setItem('generatedNumbers', JSON.stringify(numbers));  
            if (number <= 32){
                       
                chronos.style.display = "block"
                chronos.classList.remove('completed');
                shuffle(chronos);
               
                
            }
            else if (number <= 47){
             
                cyber.style.display = "block"
                cyber.classList.remove('completed');
                shuffle(cyber);
               
               
            }
            else if (number <= 73){
                inno.style.display = "block";   
                inno.classList.remove('completed');
                shuffle(inno);
               
               
            }
            else if (number <= 78){
                senti.style.display = "block";
                senti.classList.remove('completed');
                shuffle(senti);
               
               
                
            }
            video.onended = function(){
                if(count != 1){
                    if (number <= 32){
                       
                      
                        video.src = "vids/chronos.mp4";
                        
                    }
                    else if (number <= 47){
                     
                    
                        video.src = "vids/cybernetics.mp4";
                       
                    }
                    else if (number <= 73){
                       
                        video.src = "vids/innovators.mp4";

                       
                    }
                    else if (number <= 78){
        
                        video.src = "vids/sentinels.mp4";
                       
                        
                    }
                    count +=1;

                }
                else{
                    button.disabled=false;
                    return
                }
            }
            break;
        }
       
    } while(numbers.includes(number));
   
}

button.addEventListener('click',randomize);