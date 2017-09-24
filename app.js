var form = document.getElementById('registrar');
var input = form.querySelector('input');
var ul = document.getElementById('invitedList');

function createLI(text){
  var li = document.createElement('li');
  li.textContent = text;
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
      console.log('Edit working');
    }
  }
});
