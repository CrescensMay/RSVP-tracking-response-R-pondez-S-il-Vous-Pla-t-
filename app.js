var form = document.getElementById('registrar');
var input = form.querySelector('input');
var ul = document.getElementById('invitedList');

function createLI(text){
  var li = document.createElement('li');
  var span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);
  var label = document.createElement('label');
  label.textContent = 'Confirmed';
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);

  var editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  li.appendChild(editBtn);

  var removeBtn = document.createElement('button');
  removeBtn.textContent = 'remove';
  li.appendChild(removeBtn);

  return li;
}

form.addEventListener('submit', function(event){
  event.preventDefault();
  var text = input.value;
  input.value = '';
  var li = createLI(text);
  ul.appendChild(li);
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
    if(button.textContent == 'remove'){
      ul.removeChild(li);
    }else if (button.textContent === 'edit') {
      var span = li.firstElementChild;
      var input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';

    }else if (button.textContent === 'save') {
      var input = li.firstElementChild;
      var span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
});
