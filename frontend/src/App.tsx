import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Assets from "./pages/Assets";
import Processes from "./pages/Processes";
import Forms from "./pages/Forms";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import FormEdit from "./pages/FormEdit";
import TaskEdit from "./pages/TaskEdit";

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/dashboard?" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/processes" element={<Processes />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/forms" element={<Forms />}>
            {/* <Route index element={<FormEdit />} />
            <Route path="edit/:formRef:" element={<FormEdit />} /> */}
          </Route>
          <Route path="/forms/edit/:formRef" element={<FormEdit />}></Route>
          <Route path="/tasks/edit/:taskRef" element={<TaskEdit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//
//https://www.priority1.uk.net/fieldviewweb/forms/edit/F356486.24
//https://www.priority1.uk.net/fieldviewweb/forms/edit/F1.2766396
