import React, { useState } from 'react';
import './ScheduleManagement.css'; // تأكد من استيراد ملف CSS

const ScheduleManagement = () => {
  const [schedules, setSchedules] = useState([]);
  const [newSchedule, setNewSchedule] = useState({ course: '', teacher: '', room: '', time: '' });
  const [notificationMessage, setNotificationMessage] = useState('');

  const getCurrentDate = () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('ar-EG', options);
  };

  const getCurrentDay = () => {
    const today = new Date();
    return today.toLocaleDateString('ar-EG', { weekday: 'long' });
  };

  const handleInputChange = (e) => {
    setNewSchedule({ ...newSchedule, [e.target.name]: e.target.value });
  };

  const addSchedule = () => {
    const updatedSchedule = { ...newSchedule, date: getCurrentDate(), day: getCurrentDay() };
    setSchedules([...schedules, updatedSchedule]);
    sendNotifications(updatedSchedule);
    setNewSchedule({ course: '', teacher: '', room: '', time: '' });
  };

  const sendNotifications = (schedule) => {
    // في حالة التطبيق الحقيقي، ستحتاج إلى استدعاء API لإرسال الإشعارات.
    // هذا مجرد مثال توضيحي.
    console.log('Sending notifications for:', schedule);
    setNotificationMessage('تم إرسال إشعارات للطلاب والأساتذة حول التغيير في الجدول.');
  };

  return (
    <div className="schedule-management">
      <h2>إدارة الجداول الدراسية</h2>
      <div className="schedule-form">
        <input type="text" name="course" placeholder="اسم المادة" value={newSchedule.course} onChange={handleInputChange} />
        <input type="text" name="teacher" placeholder="اسم الأستاذ" value={newSchedule.teacher} onChange={handleInputChange} />
        <input type="text" name="room" placeholder="رقم الغرفة" value={newSchedule.room} onChange={handleInputChange} />
        <input type="text" name="time" placeholder="الوقت" value={newSchedule.time} onChange={handleInputChange} />
        <button onClick={addSchedule}>إضافة الجدول</button>
        {notificationMessage && <p className="notification-message">{notificationMessage}</p>}
      </div>

      <div className="schedule-list">
        <h3>الجداول الحالية</h3>
        {schedules.map((schedule, index) => (
          <div className="schedule-card" key={index}>
            <div className="schedule-details">
              <span><strong>المادة:</strong> {schedule.course}</span>
              <span><strong>الأستاذ:</strong> {schedule.teacher}</span>
              <span><strong>الغرفة:</strong> {schedule.room}</span>
              <span><strong>الوقت:</strong> {schedule.time}</span>
              <span><strong>التاريخ:</strong> {schedule.date}</span>
              <span><strong>اليوم:</strong> {schedule.day}</span>
            </div>
            <div className="schedule-actions">
              <button>تعديل</button>
              <button>حذف</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleManagement;
