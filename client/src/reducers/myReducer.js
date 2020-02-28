
const initState = {
  posts:[
    {id: 1, title: "hello world", body: "blah blah blah blah blah blah.."},
    {id: 2, title: "Wonderful Journey", body: "blah blah blah blah blah blah.."},
    {id: 3, title: "Do it Now!", body: "blah blah blah blah blah blah.."}
  ]
}

const myReducer = (state = initState, action)=>{
  console.log(action)
  return state
}

export default myReducer
