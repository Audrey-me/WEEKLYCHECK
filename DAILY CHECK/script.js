// selecting items
const submit = document.getElementById('btn-submit');
const userinput = document.getElementById('task');
const dataField = document.querySelector(".individualTask");


// displaying the input field
// declaring storedSelectedOptions because i will use it again
let storedSelectedOption;
document.getElementById("select").addEventListener('change', function(e){
  dataField.style.display = "block";
  
  storedSelectedOption = e.target.value;
});

// storing the select options in an array
function display()
{
  if(userinput.value.length !== 0) 
  {
  //using regEx(another way)
  const dayDivs = [...document.querySelectorAll(".day")];
  const correctDivs = dayDivs.find((div) =>{
    //this means start with storedSelectedOption followed by any other character.
    // i there makes it notcase sensitive
 const regExp = new RegExp('^' + storedSelectedOption +'.*','i')
   //return the particular day that matches selected value
  return  div.innerText.match(regExp);
   });
   
   //appending list items
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(userinput.value));
      
    //creating a class for the buttons
       let btns = document.createElement("div");
        btns.classList.add("allBtns");

        // for delete button
        var btn1 = document.createElement("label");
        btn1.innerHTML= '<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZkMGEwYSI+PHBhdGggZD0iTTcxLjY2NjY3LDE0LjMzMzMzbC03LjE2NjY3LDcuMTY2NjdoLTM1LjgzMzMzdjE0LjMzMzMzaDcuMTY2Njd2MTA3LjVjMCwzLjc0MjU5IDEuMzcxMTksNy41NTgwNCA0LjA3MzI0LDEwLjI2MDA5YzIuNzAyMDUsMi43MDIwNSA2LjUxNzUsNC4wNzMyNCAxMC4yNjAwOSw0LjA3MzI0aDcxLjY2NjY3YzMuNzQyNTksMCA3LjU1ODA0LC0xLjM3MTE5IDEwLjI2MDA5LC00LjA3MzI0YzIuNzAyMDUsLTIuNzAyMDYgNC4wNzMyNCwtNi41MTc1IDQuMDczMjQsLTEwLjI2MDA5di0xMDcuNWg3LjE2NjY3di0xNC4zMzMzM2gtMzUuODMzMzNsLTcuMTY2NjcsLTcuMTY2Njd6TTUwLjE2NjY3LDM1LjgzMzMzaDcxLjY2NjY3djEwNy41aC03MS42NjY2N3pNNjQuNSw1MC4xNjY2N3Y3OC44MzMzM2gxNC4zMzMzM3YtNzguODMzMzN6TTkzLjE2NjY3LDUwLjE2NjY3djc4LjgzMzMzaDE0LjMzMzMzdi03OC44MzMzM3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>'
        btns.appendChild(btn1);
        
        // for checkbutton
        var btn2 = document.createElement("button");
        var checkbox = document.createElement("input");
        checkbox.setAttribute('type','checkbox');
       checkbox.style.cssText += 'background-color:red';
        btn2.appendChild(checkbox);
        btn2.style.cssText += 'background-color:red';
        
        
        btns.appendChild(btn2);
        // using javascript to add multiple files
        btns.style.cssText +=  'display: flex; justify-content: flex-end; align-items: flex-end;margin-top:-35px';
        btn1.style.cssText += 'margin-left:5px;'
        li.style.cssText += 'margin-top:8px; margin-left:5px; font-size:17px';
        li.appendChild(btns);

      // adds the list to the parent
      correctDivs.appendChild(li);
      userinput.value ="";

     // removes element
     btn1.addEventListener('click', function(){
     li.parentNode.removeChild(li);
    });

}
}

  
    //another approach
    // making sure a list only come out on inputted task
    //if(userinput.value.length !== 0) {
      // the ... is called the spread operator which helps to iterate over the element of the array
      //const dayDivs = [...document.querySelectorAll(".day")];
      //const correctDivs = dayDivs.find((div) =>{
      // we have a working code
      //return  div.innerText.toLowerCase().includes(storedSelectedOption.toLowerCase());
      // the.includes might introduce a bug later as a result of string matching
        
submit.addEventListener("click", display);

