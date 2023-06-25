import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faLocation, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faSignature } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faMap} from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'


const UserDataDashboard = ({ users }) => {
  const isMobile = window.innerWidth < 1041;

  const SendMailAccepted = async (to) => {
    try {
      let response = await fetch('https://hr-management-870j.onrender.com/api/sendMailAccepted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to }),
      });
      if (response.ok) {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
    window.location.reload();
  };

  const SendMailRefused = async (to) => {
    try {
      let response = await fetch('https://hr-management-870j.onrender.com/api/sendMailRefused', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to }),
      });
      alert('Email sent successfully!');
    } catch (error) {
      console.log('Error:', error);
    }
    window.location.reload();
  };

  return (
    <div className="table-responsive">
      <table style={styles.table}>
        <thead>
          <tr>
            {isMobile ? (
              <React.Fragment>
                <th className='mobile' style={styles.header}>
                  <FontAwesomeIcon icon={faSignature} />
                </th>
                <th className='mobile' style={styles.header}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </th>
                <th className='mobile' style={styles.header}>
                  <FontAwesomeIcon icon={faMap} />
                </th>
                <th className='mobile' style={styles.header}>
                  <FontAwesomeIcon icon={faPhone} />
                </th>
                <th className='mobile' style={styles.header}>
                  {/* <FontAwesomeIcon icon={} /> */}
                </th>
                <th className='mobile' style={styles.header}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </th>
                <th className='mobile' style={styles.header}>
                  <FontAwesomeIcon icon={faGithub} />
                </th>
                <th className={isMobile ? 'mobile' : 'computer'} style={styles.header}>
                <FontAwesomeIcon icon={faPaperPlane} />
                </th>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <th className='computer' style={styles.header}>
                  Name
                </th>
                <th className='computer' style={styles.header}>
                  Email
                </th>
                <th className='computer' style={styles.header}>
                  State,City
                </th>
                <th className='computer' style={styles.header}>
                  Phone
                </th>
                <td className='computer' style={styles.header}>
                  Resume
                </td>
                <th className='computer' style={styles.header}>
                  Linkedin
                </th>
                <th className='computer' style={styles.header}>
                  Github
                </th>
                <th className={isMobile ? 'mobile' : 'computer'} style={styles.header}>
                  Send Answer
                </th>
              </React.Fragment>
            )}
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td style={styles.cell}>{user.firstname}<br></br> {user.lastname}</td>
                <td style={styles.cell}>{user.mail}</td>
                <td style={styles.cell}>{user.state},{user.city} <br></br>{user.codepostal}</td>
                <td style={styles.cell}>{user.phone}</td>
                <td style={styles.cell}>{user.resume}</td>
                <td style={styles.cell}>{user.linkedin}</td>
                <td style={styles.cell}>{user.github}</td>
                <td style={styles.cell}>
                  <button>
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      style={{ color: '#6ee52e' }}
                      onClick={() => SendMailAccepted(user.mail)}
                    />
                  </button>
                  <button>
                    <FontAwesomeIcon
                      icon={faClose}
                      style={{ color: 'red' }}
                      onClick={() => SendMailRefused(user.mail)}
                    />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td style={styles.cell} colSpan={10}>No users apply for this position</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
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
