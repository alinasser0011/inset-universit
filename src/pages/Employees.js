import React, { useState } from 'react';
import './Employees.css'; // تأكد من وجود ملف CSS لتنسيق الصفحة

// قسم تسجيل حضور وانصراف الموظف
const AttendanceForm = () => {
  const [date] = useState(new Date().toLocaleDateString());
  const [time] = useState(new Date().toLocaleTimeString());

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="attendance-form">
      <h2>Employee Attendance</h2>
      <form>
        <label>
          Employee ID:
          <input type="text" name="employeeId" required />
        </label>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Check-in Time:
          <input type="text" value={`${date} ${time}`} readOnly />
        </label>
        <button type="button" onClick={handlePrint}>Print</button>
      </form>
    </div>
  );
};

// قسم عرض أعضاء هيئة التدريس
const FacultyMembers = () => {
  // يمكنك تحديث البيانات لتتناسب مع قاعدة البيانات أو مصدر البيانات لديك
  const faculty = [
    {
id: 1,
name: 'Dr. John Doe',
photo: 'path/to/photo1.jpg',
title: 'Professor of Computer Science',
subjects: ['Algorithms', 'Data Structures']
    },
    {
id: 2,
name: 'Dr. Jane Smith',
title: 'Associate Professor of Mathematics',
  photo: 'path/to/photo2.jpg',
      subjects: ['Calculus', 'Linear Algebra']
    },
    {
id: 2,
name: 'Dr. Jane Smith',
title: 'Associate Professor of Mathematics',
  photo: 'path/to/photo2.jpg',
      subjects: ['Calculus', 'Linear Algebra']
    },
    {
id: 2,
name: 'Dr. Jane Smith',
title: 'Associate Professor of Mathematics',
  photo: 'path/to/photo2.jpg',
      subjects: ['Calculus', 'Linear Algebra']
    },
    {
id: 2,
name: 'Dr. Jane Smith',
title: 'Associate Professor of Mathematics',
  photo: 'path/to/photo2.jpg',
      subjects: ['Calculus', 'Linear Algebra']
    },
    {
id: 2,
name: 'Dr. Jane Smith',
title: 'Associate Professor of Mathematics',
  photo: 'path/to/photo2.jpg',
      subjects: ['Calculus', 'Linear Algebra']
    },
    {
id: 2,
name: 'Dr. Jane Smith',
title: 'Associate Professor of Mathematics',
  photo: 'path/to/photo2.jpg',
      subjects: ['Calculus', 'Linear Algebra']
    },
    {
id: 2,
name: 'Dr. Jane Smith',
title: 'Associate Professor of Mathematics',
  photo: 'path/to/photo2.jpg',
      subjects: ['Calculus', 'Linear Algebra']
    }
    // أضف المزيد من أعضاء هيئة التدريس هنا
  ];

  return (
    <div className="faculty-members">
      <h2>Faculty Members</h2>
      <div className="faculty-list">
        {faculty.map(member => (
          <div key={member.id} className="faculty-card">
            <img src={member.photo} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.title}</p>
            <p>Subjects: {member.subjects.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Employees = () => {
  return (
    <div className="employees-page">
      <AttendanceForm />
      <FacultyMembers />
    </div>
  );
};

export default Employees;
