// StudentCard.js
import React from 'react';

const StudentCard = ({ nama, nama_pengguna, deskripsi }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      width: '200px',
      margin: '10px',
    }}>
      <div>
        <strong>{nama}</strong><br />
        <small>{nama_pengguna}</small>
      </div>
      <p>{deskripsi}</p>
    </div>
  );
};

export default StudentCard;
