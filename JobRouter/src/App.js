import { createBrowserRouter,BrowserRouter, Routes, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import RootLayout from "./components/RootLayout/RootLayout.js";
import HelpLayout from "./components/RootLayout/HelpLayout.js";
import FAQ from "./components/Help/FAQ.js";
import Contact,{contactAction} from "./components/Help/Contact.js";
import NotFound from "./components/NotFound/NotFound.js";
import CareersLayout from "./components/CareersLayout/CareersLayout.js"
import Careers, { careersLoader } from "./components/Careers/Careers.js";
import CareerDetails, { careerDetailsLoader } from "./components/Careers/CareerDetails.js";
import CareersError from "./components/Careers/CareersError.js";

const router=createBrowserRouter(
  createRoutesFromElements(
//     BrowserRouter wraps our entire application and allowed us to use Routes in browser component and in this we need to specify which component is to render for which path
// the link and navLink intercepts the path to going to the server, navlink can be styled as it has a class called active but not link
// eg when we have a page in react where we are calling to another backend using api to fetch the data
// if we normally do this using route to load the page and then call the api it might not look good 
// so loaders does exactly this they call the api first only then they renders a component
  
    //navlinks are to be inside that of browser router but they aren't so we provide a element here it is
    //rootlayout that wraps the entire home and about component and also the navLinks are inside that of
    //browser router
    
    // give path relative to its parent always and no need to add a /, react does it automatically
    
    <Route path="/" element={<RootLayout/>}>
        <Route index element={ <Home/>}/>
        <Route path="about" element={ <About/>}/>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<FAQ/>}></Route>
          <Route path="contact" element={<Contact/>} action={contactAction}></Route>
        </Route>

        <Route path="careers" element={<CareersLayout/>} errorElement={<CareersError/>}>
          <Route
          index
          element={<Careers/>}
          loader={careersLoader}
          errorElement={<CareersError/>}
          ></Route>
          <Route
          path=":id"
          element={<CareerDetails/>}
          loader={careerDetailsLoader}
          errorElement={<CareersError/>}
          // if there is a error in this route then this will thrown but if err element is not defined here then parent route err element is shown
          ></Route>
        </Route>

        {/*we can define a route so whenever user tries to open a link that does not exist
        we can give them our own custom 404 page else react automatically give their own page*/}
        <Route path="*" element={<NotFound/>}></Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
