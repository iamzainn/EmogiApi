import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";



import Home from "./components/Home";
import Category from "./components/Category";
import Detail from "./components/Detail";


function App() {

   const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path="/">
        <Route index element = {<Home></Home>}></Route>
        <Route path="details" element = {<Detail></Detail>}>
           <Route path=":name" element = {<Category></Category>}></Route>
        </Route>
       </Route>
    )
  );


  return (
    
      <RouterProvider router={router} />
    
    
  )
}

export default App
