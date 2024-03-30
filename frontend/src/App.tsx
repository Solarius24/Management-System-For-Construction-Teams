import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Assets from "./pages/Assets";
import Processes from "./pages/Processes";
import Forms from "./pages/Forms";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import FormEdit from "./pages/FormEdit";
import TaskEdit from "./pages/TaskEdit";
import FormScheduleEdit from "./pages/FormScheduleEdit";
import PrivacyNotice from "./pages/PrivacyNotice";

function App() {
  return (
    <BrowserRouter>
      <div>
        learn react
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/processes" element={<Processes />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/forms" element={<Forms />}></Route>
          <Route path="/forms/edit/:formRef" element={<FormEdit />}></Route>
          <Route
            path="/forms-schedule/edit/:formRef"
            element={<FormScheduleEdit />}
          ></Route>
          <Route path="/tasks/edit/:taskRef" element={<TaskEdit />}></Route>
          <Route path="/privacy-notice" element={<PrivacyNotice />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
