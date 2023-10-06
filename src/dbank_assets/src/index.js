import { UpdateCallRejectedError } from "@dfinity/agent";
import {dbank} from "../../declarations/dbank"

window.addEventListener("load",async ()=>{
  Update();
})

document.querySelector("form").addEventListener("submit",async (event)=>{
  event.preventDefault();
  // console.log("submitted");
    const button=event.target.querySelector("#submit-btn");

    const inputamount=parseFloat(document.getElementById("input-amount").value);
    const outputamount=parseFloat(document.getElementById("withdrawal-amount").value);

    button.setAttribute("disabled",true);

    if(document.getElementById("input-amount").value)
    await dbank.TopUp(inputamount);

    if(document.getElementById("withdrawal-amount").value)
    await dbank.Withdrawl(outputamount);

    await dbank.compound();

    Update();

    document.getElementById("input-amount").value="";
    document.getElementById("withdrawal-amount").value="";

    button.removeAttribute("disabled");

    
})

async function Update()
{
  const currentamount= await dbank.checkBal();
    document.getElementById("value").innerText=Math.round(currentamount*100)/100;
}