import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TestState from "./TestState";
import Login from "./login";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./Home";
import PatientReport from "./PatientReport";
import PatientDetail from "./PatientDetail";
import PatientAdd from "./PatientAdd";
import PatientView from "./components/PatientView";
import ChartPatient from "./chartPatient";
import UserAdd from "./UserAdd";
import User from "./components/user";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="/patient/:actionId" element={<PatientAdd />} />
      <Route path="/patient/view/:id" element={<PatientView />} />
      <Route path="report/all" element={<ChartPatient />} />
      <Route path="/user/:person_no" element={<UserAdd />} />
      <Route path="/role_user/view/:id" element={<User />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <TestState />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
