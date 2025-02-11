var alltodos =[
  
];

var type_allTodos = JSON.stringify(alltodos);

localStorage.setItem('AllTodos',type_allTodos)

function addTodosFun(){
    // debugger;
    var taskInput = document.getElementById('add_todo').value
    var dateinput = document.getElementById('date').value
  

    var newUser={
        task:taskInput,
        date:dateinput,
        Status:'Incomplete'
    }

    alltodos.push(newUser);

    
var type_allTodos = JSON.stringify(alltodos);

localStorage.setItem('AllTodos',type_allTodos)


Readtask();
}

function Readtask(){
    var table_body =document.getElementById('table_body')

    table_body.innerHTML=""

    var todositems=localStorage.getItem('AllTodos')


    var Items=JSON.parse(todositems)

    
    Items.forEach(
        (Element,index)=>{
            console.log(Element)
            table_body.innerHTML+=`
             <tr id=${index}>

            <th scope="row">${index+1}</th>
            <td id="todo_task">${Element.task}</td>
            <td  id="todo_date">${Element.date}</td>
            <td class="task"><button class="btn btn-secondary btn-sm" onclick="completTask('${Element.task}')"> Complete</button>
                <button class="btn btn-danger btn-sm" id="delete"> Delete</button>
            </td>
          </tr>
            `
        }
    )

    // var delet =document.getElementById('delete')
    // delet.addEventListener('click', function(){
    //     table_body.innerHTML=""
    // })

   

}
function completTask(TaskName){
    // console.log(TaskId+1);

    // var items = localStorage.getItem('AllTodos')

    // todositems=JSON.parse(items)
    
    // var singletask=todositems[TaskId]

    // singletask.Status='Complete'

    // console.log(singletask);
    // debugger;
    var items =JSON.parse(localStorage.getItem('AllTodos'))
    
    var singleTodo = items.find(Optionskey => Optionskey.task == TaskName)

    console.log(singleTodo.Status);
    singleTodo.Status ="comp"
    console.log(singleTodo);

    localStorage.setItem('AllTodos',JSON.stringify(items))
    

    
}

