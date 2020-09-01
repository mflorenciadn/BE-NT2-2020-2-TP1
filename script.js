const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_CROSSED: 'todo-crossed',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');


function addTodo() {
  let nombreTarea = prompt("Ingrese el nombre de la tarea:");

  if (nombreTarea == "") {
    alert("¡Debe ingresar un nombre para la tarea!")
  } 
  else  
  {
    agregarTarea(nombreTarea);
  }
}

function agregarTarea(nombreTarea){
  let item = document.createElement("li");
  item.className = classNames.TODO_ITEM;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = classNames.TODO_CHECKBOX;
  checkbox.setAttribute("onchange","chequearTarea(this);"); 

  let descripcion = document.createElement("span");
  descripcion.className = classNames.TODO_TEXT;
  descripcion.innerText = nombreTarea;

  let botonDelete = document.createElement("input");
  botonDelete.type = "button";
  botonDelete.className = classNames.TODO_DELETE;
  botonDelete.value = "x";
  botonDelete.setAttribute("onclick","eliminarTarea(this);"); 

  item.append(checkbox);
  item.append(descripcion);
  item.append(botonDelete);

  list.append(item);

  actualizarContadores();
}

function chequearTarea(checkbox){
  if (checkbox.checked) 
  {
    checkbox.nextSibling.classList.add(classNames.TODO_CROSSED);
  } 
  else 
  {
    checkbox.nextSibling.classList.remove(classNames.TODO_CROSSED);
  }
  actualizarContadores();
}

function eliminarTarea(boton){
  boton.parentElement.remove();
  actualizarContadores();
}

function actualizarContadores(){
  let listaTareas = document.getElementsByClassName("todo-container");
  itemCountSpan.innerHTML = listaTareas.length;

  let listaCheckers =  document.getElementsByClassName("todo-checkbox");
  let contadorPendientes = 0;
  for (let i = 0; i < listaCheckers.length; i++){
    if (!listaCheckers[i].checked){
      contadorPendientes++;
    }
  }

  if(contadorPendientes === 0){
    uncheckedCountSpan.style.color = "green";
  }
  else 
  {
    uncheckedCountSpan.style.color = "red";
  }
  
  uncheckedCountSpan.innerHTML = contadorPendientes;
}