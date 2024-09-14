import { refs } from "./helpers/refs.js";
 import {addDataToLocalSrtorag} from "./helpers/localStorage-ip.js";

refs.checkbox.addEventListener("click", onClick);

function onClick(event) {
    console.log(event.target.checked);
    if (event.target.checked){
        refs.body.classList.replace("light", "dark");
        
    }
    else {
        refs.body.classList.replace("dark", "light");
          }
    
          
        

}