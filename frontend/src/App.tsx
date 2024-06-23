import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tasks from "./pages/Task/Tasks";
import Assets from "./pages/Assets";
import Processes from "./pages/Processes";
import Forms from "./pages/Forms";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import FormEdit from "./pages/FormEdit";
import TaskEdit from "./pages/TaskEdit";
import FormScheduleEdit from "./pages/FormScheduleEdit";
import PrivacyNotice from "./pages/PrivacyNotice";
import ConcreteWorksTracker from "./pages/ProcessDashboard/ProcessDashboard";
import { useAppDispatch } from "./redux/reduxHooks";
import { useEffect } from "react";
import { fetchUserData } from "./redux/slices/userSlice";
import { fetchForms } from "./redux/slices/formSlice";
import { fetchProcesses } from "./redux/slices/processSlice";
import { fetchTasks } from "./redux/slices/taskSlice";
import { fetchFormsSchedule } from "./redux/slices/formScheduleSlice";
import AssetsDashboard from "./pages/AssetDashboard/AssetsDashboard";
import { fetchAssets } from "./redux/slices/assetsSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchForms());
    dispatch(fetchTasks());
    dispatch(fetchFormsSchedule());
    dispatch(fetchProcesses());
    dispatch(fetchAssets());
  }, [dispatch]);
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
          <Route
            path="/processes/detail/:processRef"
            element={<ConcreteWorksTracker />}
          ></Route>
          <Route
            path="/assets/detail/:assetRef"
            element={<AssetsDashboard />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
