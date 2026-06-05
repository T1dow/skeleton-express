const todo =[
    {id: 1, title: "learn express", completed:true},
    {id: 2, title: "learn node", completed:false},
    {id: 3, title: "learn js", completed:true},
]


const title= todo.map((item) => item.title);

const incomplete = todo.filter((item)=> !item.completed);
const findex = todo.find((item)=> item.id ===2)
console.log(findex);
