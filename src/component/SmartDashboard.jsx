import React, { useState } from 'react';
import Swal from 'sweetalert2';

const fakeUsers = [
  {
    name: 'Kamal Prajapati',
    accountNo: '433702010003113',
    ifsc: 'UBIN0543373',
    balance: 25000,
    statement: [],
  },
];

function SmartDashboard() {
  const [balanceInputs, setBalanceInputs] = useState({ name: '', accountNo: '', ifsc: '' });
  const [creditInputs, setCreditInputs] = useState({ name: '', accountNo: '', ifsc: '', amount: '' });
  const [withdrawInputs, setWithdrawInputs] = useState({ name: '', accountNo: '', ifsc: '', amount: '' });
  const [statementInputs, setStatementInputs] = useState({ name: '', accountNo: '', ifsc: '' });

  const handleChange = (setFunc) => (e) => {
    const { name, value } = e.target;
    setFunc((prev) => ({ ...prev, [name]: value }));
  };

  const verify = (inputs) => {
    const { name, accountNo, ifsc } = inputs;
    if (!name || !accountNo || !ifsc) {
      Swal.fire('Error', 'All fields are required!', 'error');
      return null;
    }
    const startsWithValid = accountNo.startsWith('4337020100031');
    const user = fakeUsers.find(
      (u) =>
        u.accountNo === accountNo.trim() &&
        u.name.toLowerCase() === name.trim().toLowerCase() &&
        u.ifsc.toLowerCase() === ifsc.trim().toLowerCase() &&
        startsWithValid
    );
    if (user) {
      return user;
    } else {
      Swal.fire('Error', 'Invalid credentials!', 'error');
      return null;
    }
  };

  const handleCheckBalance = () => {
    const user = verify(balanceInputs);
    if (user) {
      Swal.fire('Balance Info', `Available Balance: ₹${user.balance.toLocaleString()}`, 'info');
    }
  };

  const handleCredit = () => {
    const user = verify(creditInputs);
    const amt = parseInt(creditInputs.amount);
    if (!amt || amt <= 0) {
      Swal.fire('Error', 'Enter valid amount!', 'error');
      return;
    }
    if (user) {
      user.balance += amt;
      user.statement.unshift({ type: 'Credit', amount: amt });
      Swal.fire('Success', `₹${amt} Credited Successfully!`, 'success');
      setCreditInputs({ ...creditInputs, amount: '' });
    }
  };

  const handleWithdraw = () => {
    const user = verify(withdrawInputs);
    const amt = parseInt(withdrawInputs.amount);
    if (!amt || amt <= 0) {
      Swal.fire('Error', 'Enter valid amount!', 'error');
      return;
    }
    if (user) {
      if (user.balance < amt) {
        Swal.fire('Error', 'Insufficient Balance!', 'error');
        return;
      }
      user.balance -= amt;
      user.statement.unshift({ type: 'Withdraw', amount: amt });
      Swal.fire('Success', `₹${amt} Withdrawn Successfully!`, 'success');
      setWithdrawInputs({ ...withdrawInputs, amount: '' });
    }
  };

  const handleStatement = () => {
    const user = verify(statementInputs);
    if (user) {
      if (user.statement.length === 0) {
        Swal.fire('Statement', 'No transactions yet.', 'info');
      } else {
        const html = user.statement
          .slice(0, 5)
          .map(
            (txn) =>
              `<p style="color:${txn.type === 'Credit' ? 'green' : 'red'}">${txn.type}: ₹${txn.amount}</p>`
          )
          .join('');
        Swal.fire({ title: 'Mini Statement', html, icon: 'info' });
      }
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-primary fw-bold">💼 SwiftBank Smart Dashboard</h2>
      <div className="row g-4">
        {/* Check Balance */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow p-4 h-100">
            <h5>🔍 Check Balance</h5>
            <input type="text" name="name" placeholder="Full Name" className="form-control mb-2"
              value={balanceInputs.name} onChange={handleChange(setBalanceInputs)} />
            <input type="text" name="accountNo" placeholder="Account Number" className="form-control mb-2"
              value={balanceInputs.accountNo} onChange={handleChange(setBalanceInputs)} />
            <input type="text" name="ifsc" placeholder="IFSC Code" className="form-control mb-3"
              value={balanceInputs.ifsc} onChange={handleChange(setBalanceInputs)} />
            <button className="btn btn-warning w-100" onClick={handleCheckBalance}>Check Balance</button>
          </div>
        </div>

        {/* Credit */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow p-4 h-100">
            <h5>➕ Credit</h5>
            <input type="text" name="name" placeholder="Full Name" className="form-control mb-2"
              value={creditInputs.name} onChange={handleChange(setCreditInputs)} />
            <input type="text" name="accountNo" placeholder="Account Number" className="form-control mb-2"
              value={creditInputs.accountNo} onChange={handleChange(setCreditInputs)} />
            <input type="text" name="ifsc" placeholder="IFSC Code" className="form-control mb-2"
              value={creditInputs.ifsc} onChange={handleChange(setCreditInputs)} />
            <input type="number" name="amount" placeholder="Amount" className="form-control mb-3"
              value={creditInputs.amount} onChange={handleChange(setCreditInputs)} />
            <button className="btn btn-warning w-100" onClick={handleCredit}>Credit</button>

          </div>
        </div>

        {/* Withdraw */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow p-4 h-100">
            <h5>➖ Withdraw</h5>
            <input type="text" name="name" placeholder="Full Name" className="form-control mb-2"
              value={withdrawInputs.name} onChange={handleChange(setWithdrawInputs)} />
            <input type="text" name="accountNo" placeholder="Account Number" className="form-control mb-2"
              value={withdrawInputs.accountNo} onChange={handleChange(setWithdrawInputs)} />
            <input type="text" name="ifsc" placeholder="IFSC Code" className="form-control mb-2"
              value={withdrawInputs.ifsc} onChange={handleChange(setWithdrawInputs)} />
            <input type="number" name="amount" placeholder="Amount" className="form-control mb-3"
              value={withdrawInputs.amount} onChange={handleChange(setWithdrawInputs)} />
            <button className="btn btn-warning w-100" onClick={handleWithdraw}>Withdraw</button>

          </div>
        </div>

        {/* Statement */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow p-4 h-100">
            <h5>📄 Mini Statement</h5>
            <input type="text" name="name" placeholder="Full Name" className="form-control mb-2"
              value={statementInputs.name} onChange={handleChange(setStatementInputs)} />
            <input type="text" name="accountNo" placeholder="Account Number" className="form-control mb-2"
              value={statementInputs.accountNo} onChange={handleChange(setStatementInputs)} />
            <input type="text" name="ifsc" placeholder="IFSC Code" className="form-control mb-3"
              value={statementInputs.ifsc} onChange={handleChange(setStatementInputs)} />
            <button className="btn btn-warning w-100" onClick={handleStatement}>View Statement</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartDashboard;
