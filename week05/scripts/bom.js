const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// function addRemoveChapter() {
//     if (input.value.trim() !== '') {
//         const li = input.value;
//         input.value = '';

//         const chapItem = document.createElement('li');
//         const chapText = document.createElement('span');
//         const deleteButton = document.createElement('button');

//         chapItem.append(chapText);
//         chapText.textContent = li;
//         chapItem.append(deleteButton);
//         deleteButton.textContent = '❌';
//         list.append(chapItem);

//         deleteButton.addEventListener('click', () => {
//             list.removeChild(chapItem);
//         })

//         input.focus();

//     }
// }


// button.addEventListener('click', addRemoveChapter);

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', () => {
  if (input.value != '') { 
    displayList(input.value);
    chaptersArray.push(input.value);  
    setChapterList(); 
    input.value = ''; 
    input.focus(); 
  }
});

function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; 
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); 
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); 
    input.focus();
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length – 1); 

chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length – 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}