"use client";

import Button from "@/app/components/button/Button";
import Logo from "@/app/components/heading/Logo";
import PatientQueue from "@/app/components/patientQueue/PatientQueue";
import React from "react";

const DoctorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-full border grid grid-cols-8 border-none">
      <section className="col-span-2 flex flex-col h-screen py-4">
        <Logo />
        <PatientQueue />
        <div className='grid grid-cols-2'>
          <Button name="Live Queue" />
          <Button name="All Patients" />
        </div>
      </section>
      <section className="col-span-6 py-4 pe-4 ">
        <div className="bg-zinc-200 h-full rounded-3xl flex flex-col">
          {children}
        </div>
      </section>
    </main>
  );
};

export default DoctorLayout;
