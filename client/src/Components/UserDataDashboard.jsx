import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faSquareCheck } from '@fortawesome/free-solid-svg-icons'

const UserDataDashboard = ({ users }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.header}>Name</th>
          <th style={styles.header}>Email</th>
          <th style={styles.header}>City</th>
          <th style={styles.header}>State</th>
          <th style={styles.header}>Postal Code</th>
          <th style={styles.header}>Phone</th>
          <th style={styles.header}>Linkedin</th>
          <th style={styles.header}>Github</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td style={styles.cell}>{user.firstname} {user.lastname}</td>
            <td style={styles.cell}>{user.mail}</td>
            <td style={styles.cell}>{user.city}</td>
            <td style={styles.cell}>{user.state}</td>
            <td style={styles.cell}>{user.codepostal}</td>
            <td style={styles.cell}>{user.phone}</td>
            <td style={styles.cell}>{user.resume}</td>
            <td style={styles.cell}>{user.linkedin}</td>
            <td style={styles.cell}>{user.github}</td>
            <td style={styles.cell}>
              <button><FontAwesomeIcon icon={faSquareCheck} style={{ color: '#6ee52e' }} /></button>
              <button><FontAwesomeIcon icon={faClose} /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  header: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  cell: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default UserDataDashboard;
