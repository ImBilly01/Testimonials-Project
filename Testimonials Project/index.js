const viewMore = document.getElementById('viewMore');
const viewLess = document.getElementById('viewLess');
const paragraph = document.getElementById('paragraph');

viewMore.addEventListener('click', () => {
    if (viewMore !== paragraph) {
        paragraph.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorem quia voluptatum distinctio sunt asperiores quaerat, quam delectus fugiat molestiae deserunt recusandae voluptas quisquam temporibus molestias, rerum labore. Quos, exercitationem!'; 
    }
});

viewLess.addEventListener('click', () => {
    if (viewLess !== paragraph) {
        paragraph.innerHTML = ''; 
    }
});

let hidden = false;

function action() {
    hidden = !hidden;
    
    if(hidden) {
        document.getElementById('viewMore').style.visibility = 'hidden';
        document.getElementById('viewLess').style.visibility = 'visible';
    } else {
        document.getElementById('viewMore').style.visibility = 'visible';
        document.getElementById('viewLess').style.visibility = 'hidden';
    }
}