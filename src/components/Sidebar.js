import React from 'react';
import { FaCalendarAlt, FaChalkboardTeacher, FaDollarSign, FaEnvelope, FaHome, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // تأكد من أن هذا الملف موجود

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">INSET</div>
      <div className="menu">
        <Link to="/">
          <FaHome size={24} />
          <span>Home</span>
        </Link>
        <Link to="/students">
          <FaUsers size={24} />
          <span>Students</span>
        </Link>
        <Link to="/employees">
          <FaChalkboardTeacher size={24} />
          <span>Employees</span>
        </Link>
        <Link to="/fees-payment">
          <FaDollarSign size={24} />
          <span>Fees Payment</span>
        </Link>
        <Link to="/contact-us">
  <FaEnvelope size={24} />
  <span>Contact Us</span>
</Link>
  {/* رابط لقسم إدارة الجداول الدراسية */}
  <Link to="/schedule-management">
        <FaCalendarAlt size={24} />
        <span>إدارة الجداول الدراسية</span>
      </Link>


      </div>
    </div>
  );
}

export default Sidebar;
