import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Students.css'; // تأكد من وجود ملف CSS لتنسيق الصفحة

const FileUpload = ({ onDrop, title }) => {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="file-upload">
      <h2>{title}</h2>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
};


// مكون لعرض الجداول الدراسية
const StudySchedule = () => {
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']; // تعديل الأيام لتبدأ من السبت
  const classes = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];

  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Time</th>
          {days.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {classes.map((year) => (
          <tr key={year}>
            <td>{year}</td>
            {days.map((day) => (
              <td key={day} className="empty-cell">
                {/* يمكنك إضافة مواد دراسية هنا */}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// مكون لعرض جدول الحضور
const AttendanceTable = () => {
  const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']; // تعديل الأيام لتبدأ من السبت
  const students = ['Student 1', 'Student 2', 'Student 3']; // قائمة بالطلاب

  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>Student Name</th>
          {days.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student}>
            <td>{student}</td>
            {days.map((day) => (
              <td key={day}>
                <input type="checkbox" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};



// مكون لعرض نموذج تسجيل طالب جديد
const StudentForm = () => {
  const [student, setStudent] = useState({
    studentName: '',
    dob: '',
    fatherName: '',
    motherName: '',
    fatherPhone: '',
    motherPhone: '',
    fatherOccupation: '',
    fatherQualification: '',
    motherOccupation: '',
    motherQualification: '',
    studentPhone: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Registered:', student);
    // إضافة المنطق لإرسال البيانات إلى الخادم أو تحديث الحالة
  };

  return (
    <form onSubmit={handleSubmit} className="student-form">
      <h2>Register New Student</h2>
      <label>
        Student's Name:
        <input type="text" name="studentName" value={student.studentName} onChange={handleChange} required />
      </label>
      <label>
        Date of Birth:
        <input type="date" name="dob" value={student.dob} onChange={handleChange} required />
      </label>
      <label>
        Father's Name:
        <input type="text" name="fatherName" value={student.fatherName} onChange={handleChange} required />
      </label>
      <label>
        Mother's Name:
        <input type="text" name="motherName" value={student.motherName} onChange={handleChange} required />
      </label>
      <label>
        Father's Phone Number:
        <input type="text" name="fatherPhone" value={student.fatherPhone} onChange={handleChange} required />
      </label>
      <label>
        Mother's Phone Number:
        <input type="text" name="motherPhone" value={student.motherPhone} onChange={handleChange} required />
      </label>
      <label>
        Father's Occupation:
        <input type="text" name="fatherOccupation" value={student.fatherOccupation} onChange={handleChange} />
      </label>
      <label>
        Father's Qualification:
        <input type="text" name="fatherQualification" value={student.fatherQualification} onChange={handleChange} />
      </label>
      <label>
        Mother's Occupation:
        <input type="text" name="motherOccupation" value={student.motherOccupation} onChange={handleChange} />
      </label>
      <label>
        Mother's Qualification:
        <input type="text" name="motherQualification" value={student.motherQualification} onChange={handleChange} />
      </label>
      <label>
        Student's Phone Number:
        <input type="text" name="studentPhone" value={student.studentPhone} onChange={handleChange} required />
      </label>
      <label>
        Department to be Joined:
        <input type="text" name="department" value={student.department} onChange={handleChange} required />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

// المكون الرئيسي لصفحة الطلاب
const Students = () => {
  const handleFileDrop = (acceptedFiles) => {
    console.log('Files dropped:', acceptedFiles);
  };

  return (
    <div className="students-page">
      <h1>Students Page</h1>

      <section>
        <FileUpload onDrop={handleFileDrop} title="Upload Excel Files" />
      </section>

      <section>
        <h2>Study Schedules</h2>
        <StudySchedule />
      </section>

      <section>
        <FileUpload onDrop={handleFileDrop} title="Upload Books" />
      </section>

      <section>
        <h2>Student Activities</h2>
        {/* إضافة الأنشطة الطلابية هنا */}
      </section>

      <section>
        <StudentForm />
      </section>

      <section>
        <h2>Student Attendance</h2>
        <AttendanceTable />
      </section>
    </div>
  );
};

export default Students;
