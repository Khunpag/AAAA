import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar";

import { useParams } from "react-router-dom";
import { API_GET, API_POST } from "../api";

function User() {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const json = await API_GET(`personData/${params.id}`);

    setUser(json.data);
  };

  const getSex = (sex) => {
    if (sex) {
      return sex === "M" ? "ชาย" : "หญิง";
    }
  };

  const getDate = (format) => {
    if (format) {
      const birthYear = format.split("-")[0];
      const currentYear = new Date().getFullYear();

      console.log(birthYear, currentYear);

      const age = currentYear - birthYear;
      return age;
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg p-0">
          <Sidebar />
        </div>
        <div className="col-10 p-0">
          <h1 className="title">ข้อมูลผู้ใช้</h1>
          <div className="p-5 hight-one">
            <div className="content border rounded-3 p-4 shadow">
              <div className="rounded-3 bg-light h-100">
                <div className="d-flex py-2">
                  <h5 className="mx-2">เลขประจำตัว :</h5>
                  <h5>{user?.person_no}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">ชื่อ-สกุล :</h5>
                  <h5>
                    {user?.name} {user?.last_name}
                  </h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">เพศ :</h5>
                  <h5>{getSex(user?.sex)}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">อายุ :</h5>
                  <h5>{getDate(user?.birthday)}</h5>
                </div>
                <div className="d-flex py-2">
                  <h5 className="mx-2">ชื่อผู้ใช้ :</h5>
                  <h5>{user?.username}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
