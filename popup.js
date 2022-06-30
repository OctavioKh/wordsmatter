var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace("El", 'Elle');
  value = value.replace(/el/, 'elle');
  value = value.replace(/ la /gi, ' le ');
  value = value.replace(/ las /gi, ' les ');
  value = value.replace(/ hombre /gi, ' persona ');
  value = value.replace(/mujer/gi, ' persona ');
  
  node.nodeValue = value;
}

window.onload = findAndReplace();