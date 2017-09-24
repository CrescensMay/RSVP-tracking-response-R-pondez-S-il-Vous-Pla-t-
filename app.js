var form = document.getElementById('registrar');
var input = form.querySelector('input');
var mainDiv = document.querySelector('.main');
var ul = document.getElementById('invitedList');
// var total;
var div = document.createElement('div');
var filterLabel = document.createElement('label');
var filterCheckBox = document.createElement('input');
// var number = document.createElement('label');

filterLabel.textContent = "Cacher ceux qui n'ont pas répondu";
filterCheckBox.type = 'checkbox';
// number.textContent = "Total Invités: " + total;
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
// div.appendChild(number);
mainDiv.insertBefore(div, ul);

filterCheckBox.addEventListener('change', function(event){
  var isChecked = event.target.checked;
  var list = ul.children;
  if(isChecked){
    for (var i = 0; i < list.length; i++) {
      var li = list[i];
      if(li.className === 'responded'){
        li.style.display = '';
      }else {
        li.style.display = 'none';
      }
    }
  }else{
    for (var i = 0; i < list.length; i++) {
      var li = list[i];
      li.style.display = '';
    }
  }
});

function createLI(text){
  function createElement(elementName, property, value){
    var element = document.createElement(elementName);
    element[property] = value;
    return element;
  }

  function appendToLi(elementName, property, value){
    var element = createElement(elementName, property, value);
    li.appendChild(element);
    return element;
  }
  var li = document.createElement('li');

  appendToLi('span', 'textContent', text);
  // span.textContent = text;
  // li.appendChild(span);

  var label = appendToLi('label', 'textContent', 'Confirmed');
  // label.textContent = 'Confirmed';

  var checkbox = appendToLi('input', 'type', 'checkbox');
  // checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  // li.appendChild(label);

  appendToLi('button', 'textContent', 'edit');
  // editBtn.textContent = 'edit';
  // li.appendChild(editBtn);

  appendToLi('button', 'textContent', 'remove');
  // removeBtn.textContent = 'remove';
  // li.appendChild(removeBtn);

  return li;
}

form.addEventListener('submit', function(event){
  event.preventDefault();
  var text = input.value;
  input.value = '';
  if(text === ''){
    alert("Désolé, nom de l'invité ne peut demeurer vide!");
  }else {
    var li = createLI(text);
    ul.appendChild(li);
  }
});

ul.addEventListener('change', function(e){
   var checkbox = event.target;
   var checked = checkbox.checked;
   var listItem = checkbox.parentNode.parentNode;

   if(checked){
     listItem.className = 'responded';
   }else {
     listItem.className = '';
   }
});

ul.addEventListener('click', function(event){
  if(event.target.tagName === 'BUTTON'){
    var button = event.target;
    var li = button.parentNode;
    var ul = li.parentNode;
    var action = button.textContent;
    var nameActions = {
      remove: () => {
        ul.removeChild(li);
      },
      edit: () => {
          var span = li.firstElementChild;
          var input = document.createElement('input');
          input.type = 'text';
          input.value = span.textContent;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.textContent = 'save';
        },
        save: () => {
            var input = li.firstElementChild;
            var span = document.createElement('span');
            span.textContent = input.value;
            if(input.value === ''){
              alert("Désolé, nom de l'invité ne peut demeurer vide!");
            }else {
              li.insertBefore(span, input);
              li.removeChild(input);
              button.textContent = 'edit';
            }
          }
    };
    // select and run action in button's name
    nameActions[action]();
    // if(action.textContent === 'remove'){
    //   nameActions.remove();
    // }else if (action.textContent === 'edit') {
    //   nameActions.edit();
    // }else if (action.textContent === 'save') {
    //   nameActions.save();
    // }
  }
});
