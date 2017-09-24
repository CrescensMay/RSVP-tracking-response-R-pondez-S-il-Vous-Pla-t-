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

  var button = document.createElement('button');
  button.textContent = 'remove';
  li.appendChild(button);

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
    var li = event.target.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
  }
});
