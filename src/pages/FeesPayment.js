import React, { useState } from 'react';
import './FeesPayment.css'; // تأكد من وجود ملف CSS لتنسيق الصفحة

// قائمة طرق الدفع الممكنة
const paymentMethods = [
  'Cash',
  'Credit Card',
  'Bank Transfer',
  'Online Payment',
];

const TuitionPaymentForm = () => {
  const [date] = useState(new Date().toLocaleDateString());
  const [time] = useState(new Date().toLocaleTimeString());
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="payment-form">
      <h2>Tuition Fee Payment</h2>
      <form>
        <label>
          Student ID:
          <input type="text" name="studentId" required />
        </label>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Amount Paid:
          <input type="number" name="amountPaid" required />
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            {paymentMethods.map(method => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </label>
        <label>
          Date & Time:
          <input type="text" value={`${date} ${time}`} readOnly />
        </label>
        <button type="button" onClick={handlePrint}>Print</button>
      </form>
    </div>
  );
};

const SecondaryFeesForm = () => {
  const [date] = useState(new Date().toLocaleDateString());
  const [time] = useState(new Date().toLocaleTimeString());
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="payment-form">
      <h2>Secondary Fee Payment</h2>
      <form>
        <label>
          Student ID:
          <input type="text" name="studentId" required />
        </label>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Amount Paid:
          <input type="number" name="amountPaid" required />
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            {paymentMethods.map(method => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </label>
        <label>
          Date & Time:
          <input type="text" value={`${date} ${time}`} readOnly />
        </label>
        <button type="button" onClick={handlePrint}>Print</button>
      </form>
    </div>
  );
};

const SummerCourseBookingForm = () => {
  const [date] = useState(new Date().toLocaleDateString());
  const [time] = useState(new Date().toLocaleTimeString());
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="payment-form">
      <h2>Summer Course Booking</h2>
      <form>
        <label>
          Student ID:
          <input type="text" name="studentId" required />
        </label>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Course Name:
          <input type="text" name="courseName" required />
        </label>
        <label>
          Amount Paid:
          <input type="number" name="amountPaid" required />
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            {paymentMethods.map(method => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </label>
        <label>
          Date & Time:
          <input type="text" value={`${date} ${time}`} readOnly />
        </label>
        <button type="button" onClick={handlePrint}>Print</button>
      </form>
    </div>
  );
};

const FeesPayment = () => {
  return (
    <div className="fees-payment-page">
      <TuitionPaymentForm />
      <SecondaryFeesForm />
      <SummerCourseBookingForm />
    </div>
  );
};

export default FeesPayment;
