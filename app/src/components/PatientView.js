import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../sidebar";
import { API_GET, API_POST } from "../api";

const PatientView = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getPateint();
  }, []);

  const getPateint = async () => {
    try {
      const res = await API_GET(`patientData/${id}`);

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // format 2022-10-12
  const getDate = (format) => {
    if (format) {
      const birthYear = format.split("-")[0];
      const currentYear = new Date().getFullYear();

      console.log(birthYear, currentYear);

      const age = currentYear - birthYear;
      return age;
    }
  };

  const getSex = (sex) => {
    if (sex) {
      return sex === "M" ? "ชาย" : "หญิง";
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg p-0">
          <Sidebar />
        </div>
        <div className="col-10 p-0">
          <h1 className="title">ข้อมูลผู้ป่วย</h1>
          <div className="p-5 hight-one">
            <div className="content border rounded-3 p-4 shadow">
              <div className="px-4 overflow bg-light h-100">
                <div className="d-flex py-2">
                  <h5 className="mx-2">เลขประจำตัวผู้ป่วย :</h5>
                  <h5>{user.patient_no}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">เพศ :</h5>
                  <h5>{getSex(user.sex)}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">อายุ :</h5>
                  <h5>{getDate(user.birthday)}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">น้ำหนัก(กก.) :</h5>
                  <h5>{user.weight}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">ส่วนสูง(ซม.) :</h5>
                  <h5>{user.height}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">ความยาวคอ(ซม.) :</h5>
                  <h5>{user.neck_length}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">ความยาวแขน(ซม.) :</h5>
                  <h5>{user.arm_length}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">ระยะห่างระหว่างอกถึงเอว :</h5>
                  <h5>{user.bust_waist_length}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">ชื่อผู้ใช้ :</h5>
                  <h5></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientView;
