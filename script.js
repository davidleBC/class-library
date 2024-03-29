const btn = document.querySelector("button");
const container = document.querySelector(".container");

const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  // the constructor...
};

function addBookToLibrary(event) {
    event.preventDefault();
    
    const formAuthor = document.querySelector("input#author");
    const formTitle = document.querySelector("input#title");
    const formPages = document.querySelector("input#pages");
    const formRead = document.querySelector("input#read:checked");
    let readStatus = "";
    if (formRead === null) {
      readStatus = "Not Read";
    }
    else {
      readStatus = "Read";
    }
      
    myLibrary.push(new Book(formAuthor.value,formTitle.value,formPages.value,readStatus));
    
    container.innerHTML ="";
    let index = 0;
    myLibrary.forEach(function(element) {
         
    const extraDiv = document.createElement('div');
    const newDiv = document.createElement('div');
    const newBtn = document.createElement('button');
    const newReadBtn = document.createElement('button');
    const newAuthor = document.createElement('p');
    const newTitle = document.createElement('p');
    const newPages = document.createElement('p');  
    const newRead = document.createElement('p');  
      
    newAuthor.textContent = "Author: " + element.author;   
    newTitle.textContent = "Title: " + element.title;
    newPages.textContent = "Pages: " + element.pages;
      
    newDiv.setAttribute("class",'card');
    newDiv.setAttribute("data-index",index)  
    container.appendChild(newDiv);
    newDiv.appendChild(extraDiv);
    
    extraDiv.appendChild(newAuthor);
    extraDiv.appendChild(newTitle); 
    extraDiv.appendChild(newPages);   

    newReadBtn.setAttribute("class",'readToggle');
    newReadBtn.innerText = element.read;
    newDiv.appendChild(newReadBtn);  
      
    newBtn.setAttribute("class",'delete');
    newBtn.innerText = "Delete";
    newDiv.appendChild(newBtn);
    

      
    index += 1;
    });  
// do stuff here

};

btn.addEventListener("click", addBookToLibrary);

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) { myLibrary.splice(event.target.parentElement.getAttribute("data-index"),1);

                                                 event.target.parentElement.remove();                           

let tempIndex = 0;                                                  
                                                  
const resetIndex = document.querySelectorAll('.card');
resetIndex.forEach(function(element) {
  element.setAttribute("data-index",tempIndex)
  tempIndex += 1;
});
                                          
  }
});

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("readToggle")) { 
    if (event.target.innerText === "Read") {
      event.target.innerText = "Not Read";
      let changeIndex = event.target.parentElement.getAttribute("data-index");
      myLibrary[changeIndex].read = "Not Read";
    }
    else {
      event.target.innerText = "Read";
      let changeIndex = event.target.parentElement.getAttribute("data-index");
      myLibrary[changeIndex].read = "Read";
    }
    
  }
});


