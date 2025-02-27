import React from 'react';

const PatientTable = () => {
  return (
    <div className="overflow-x-auto h-full">
      <table className="table-container ">
        <thead>
          <tr>
            <th>No</th>
            <th>Patient</th>
            <th>Contact</th>
            <th>Appointment</th>
            <th>Waited</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className=''>
          <tr>
            <td >1</td>
            <td >Prashant</td>
            <td >+91 XXXXX XXXXX</td>
            <td >Walk-in</td>
            <td >35 min</td>
            <td >Edit</td>
          </tr>
          <tr>
            <td >1</td>
            <td >Prashant</td>
            <td >+91 XXXXX XXXXX</td>
            <td >Walk-in</td>
            <td >35 min</td>
            <td >Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
