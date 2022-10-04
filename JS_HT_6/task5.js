let selectionBtn = document.getElementById('selectBtn');
let students = document.getElementById('toCloneStudents');
let studentsList = document.getElementById('studentsCheck');
let group = document.getElementById('group');
let saveBtn = document.getElementById('saveBtn');
let topicNode = null;

group.addEventListener('change', function (){
    document.getElementById('studentsCheck').style.display = 'none';
    document.getElementById('topic').style.display = 'none';
});
selectionBtn.addEventListener('click', function (){
    topicNode = document.getElementById('topic');
    topicNode.style.display = 'block';
    document.getElementById('studentsCheck').style.display = 'block';
    StudentsClone();
    for (const node of document.getElementById('studentsCheck').childNodes) {
        console.log(node)
    }
});
saveBtn.addEventListener('click', function (){
    if (topicNode==null) return;
    TopicReplaceNode();
    StudentsCheckboxReplacer();
});

function StudentsClone(){
    switch (group.selectedIndex){
        case 0:
            for (let i = 0; i < 3; i++) {
                let student = students.cloneNode(true);
                student.childNodes[1].childNodes[1].textContent = `Student ${i+2}`;
                studentsList.appendChild(student);
            }
            break;
        case 1:
            for (let i = 0; i < 5; i++) {
                let student = students.cloneNode(true);
                student.childNodes[1].childNodes[1].textContent = `Student ${i+2}`;
                studentsList.appendChild(student);
            }
            break;
        case 2:
            for (let i = 0; i < 7; i++) {
                let student = students.cloneNode(true);
                student.childNodes[1].childNodes[1].textContent = `Student ${i+2}`;
                studentsList.appendChild(student);
            }
            break;
    }
}
function TopicReplaceNode(){
    let currentNode = topicNode.children[1];
    let newNode = document.createTextNode(`${currentNode.value}`);
    topicNode.replaceChild(newNode, currentNode);
}
function StudentsCheckboxReplacer() {
    let checkedStudents = document.getElementsByName('isPresent');
    for (let i = 0; i < checkedStudents.length; i++) {
        console.log(checkedStudents[i]);
        let newNode = checkedStudents[i].checked
            ? document.createTextNode('present')
            : document.createTextNode('');
        let parent = checkedStudents[i].parentNode;
        parent.replaceChild(newNode, checkedStudents[i]);
    }
    for (const checkedStudent of checkedStudents) {
        console.log(checkedStudent)
        let newNode = checkedStudent.checked
            ? document.createTextNode('present')
            : document.createTextNode('');
        let parent = checkedStudent.parentNode;
        parent.replaceChild(newNode, checkedStudent);
    }
}



