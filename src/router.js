import {
    createBrowserRouter, createRoutesFromElements, Route, Navigate} from 'react-router-dom';
  import App from './App';
  import Landing from './pages/Index';
  import Show from './pages/Show';
  import Update from "./pages/Update"
  import { barterCircusLoader, barterCircusItemLoader } from './loaders'
  import { updateAction, createAction, deleteAction } from './actions'
  
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App /> }>
            <Route path='' element={<Landing/>} loader={barterCircusLoader}/>
            <Route path=':id' element={<Show/>} loader={barterCircusItemLoader}/>
            <Route path='/update/:id' element={<Update />} loader={barterCircusItemLoader}/>
            <Route path='create' action={createAction}/>
            <Route path='updating/:id' action={updateAction}/> 
            <Route path='delete/:id' action={deleteAction}/> 
         <Route path='index.html' element={<Navigate to='/' replace />}/>
        </Route>
    )
  )
  
  export default router;
  
  