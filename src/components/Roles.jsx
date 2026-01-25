import React from "react";
import { roles } from "../data/rolesData";


const Roles = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
      <div className="bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
        <h2 className="text-2xl font-bold">বর্তমান দায়িত্ব</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-12">
          {roles.map((role, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="material-icons">check_circle</span>
              <span>{role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roles;
