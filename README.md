# Homework

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)

Issues and bugs:

1.  App.tsx -> useEffect doesn't have any dependencies array so it goes infinitely after mounting
2.  App.tsx -> Todo component doesn't have a key
3.  Todo.tsx -> React.Component has any type
4.  App.tsx -> setState([...state, awaitedTodos[i]]), there is not need to set state on each for iteration, setState(...state, ...awaitedTodos)
5.  Todo.tsx -> if(this.props != prevProps), there was used != which is not a good practice 
