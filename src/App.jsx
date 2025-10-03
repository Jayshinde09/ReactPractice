// import { Link } from "react-router-dom";
// import Count from "./components/Count";
// import SimpleEvents from "./components/Events";
// import Events from "./components/Events";
// import Layout from "./components/Layout";
// import Multiple from "./components/Multiple";
// import Prop from "./components/Prop";
// import Service from "./components/Service";
// import InlineCss from "./csstyles/inline";
// import TailwindExample from "./csstyles/tailwindex";
// import Controlled from "./Forms/Controlled";
// import CheckRadio from "./Forms/Example";
// import MultiForm from "./Forms/Multiform";
// import WindowSizeComponent from "./Hooks/Custom";
// import CallBack from "./Hooks/useCallback";
// import Context from "./Hooks/usecontext";
// import Expensive from "./Hooks/usememo";
// import ReduceCounter from "./Hooks/usereduce";
// import InputFocus from "./Hooks/useref";
// import Counter from "./Hooks/usestate";
// import StudentList from "./listandkey/keys";
// import FruitList from "./listandkey/listex";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Create from "./Context/Create";
// import Wonder from "./Context/Dynamic";
// import Userlist from "./API/Fetch";
// import WishList from "./API/Axios";
// import Momo from "./Performance/Memos";
// import Don from "./Performance/usememo";
// import CountProject from "./Countproject/count";
// import GetPost from "./REST/Getpost";

// function App()
// {   
//   return(
//     <>
//     <Layout>
//       <Home/>
//     </Layout>

//     <Layout>
//       <About/>
//     </Layout>

//     <Service title="Better services with cheap cost" description="Our is everything better despite cheap cost "/>
//     <Count/>
//     <Events/>
//     <SimpleEvents/>

//     <Multiple/>
//     <Prop name="JAY" age="23" salary="100000"/>
    
//     <Counter/>
//     <Context/>

//     <InputFocus/>
//     <InlineCss/>
//     <ReduceCounter/>
//     <TailwindExample/>

//      <FruitList/>
//      <StudentList/>

//      <Controlled/>
//      <MultiForm/>
//      <CheckRadio/>
//      <Expensive/>
//      <CallBack/>
//     <WindowSizeComponent/>
//     <Create/>
//     <Wonder/>
//     <Userlist/>
//     <WishList/>
//     <Momo/>
//     <CountProject/>
//     <GetPost/>
  
    
    
  
    

//     </>
//   )
// }

// export default App;

// // import { Routes, Route } from "react-router-dom";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";
// // import NotFound from "./pages/NotFound";


// // function App()
// // {
// //   return(
// //     <div>
// //       {/* <h1>THIS THE MAIN WEBSITE</h1> */}
// //       <Routes>
// //         <Route path="/" element= {<Home/>}/>
// //         <Route path="about" element={<About/>}/>
// //         <Route path="Contact" element={<Contact/>}/>
// //         <Route path="notfound" element={<NotFound/>}/>
// //       </Routes>
// //     </div>

// //   )
// // }

// // export default App;

import { useState } from "react";
import GetPost from "./REST/Getpost";
import Createpost from "./REST/Createpost";
import Update from "./REST/Update";
import Patch from "./REST/Patch";
import DeletePost from "./REST/Delete";


function App() {
  const [tab, setTab] = useState("get");

  return (
    
    <div style={{ padding: "20px" }}>
      <h1>REST API Practice</h1>

      {/* Navigation buttons */}
      <button onClick={() => setTab("get")}>GET</button>
      <button onClick={()=>setTab("create")}>POST</button>
      <button onClick={()=>setTab("put")}>PUT</button>
      <button onClick={()=>setTab("patch")}>PATCH</button>
      <button onClick={()=>setTab("delete")}>DELETE</button>

      <hr />

      {/* Render selected tab */}
      {tab === "get" && <GetPost/>}
      {tab ==="create" && <Createpost/>}
      {tab==="put" && <Update/>}
      {tab==="patch" && <Patch/>}
      {tab==="delete" && <DeletePost/>}
    </div>
  );
}

export default App;
