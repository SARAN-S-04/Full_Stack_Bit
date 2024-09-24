import React, { useContext, useState } from 'react';
import { PIDsContext } from './PIDsContext';
import './UserPage.css';  // Import the CSS file
import reviewImage from '../assets/review.jpg';  // Corrected path
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
    const { pids } = useContext(PIDsContext);
    const [selectedPid, setSelectedPid] = useState('');
    const [communicationQuality, setCommunicationQuality] = useState('');
    const [teamCollaboration, setTeamCollaboration] = useState('');
    const [responsiveness, setResponsiveness] = useState('');
    const [novelty, setNovelty] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedPid || !communicationQuality || !teamCollaboration || !responsiveness || !novelty) {
            setError('Please fill out all fields.');
            return;
        }
        navigate('/user2');
        setError('');
        // Handle form submission logic here
    };

    return (
        <div className="user-page">
            <h2 className="user-header">Reviewer’s Marks</h2>
            <div className="user-content">
                <div className="image-section">
                    <h3 className="image-title">Team Communication</h3>
                    <img src={reviewImage} alt="Review" className="user-image" />
                </div>
                <div className="form-section">
                    <p className="welcome-text">Welcome, User! You can review and submit your marks here.</p>

                    {pids.length > 0 ? (
                        <form className="user-form" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="pid-select">Select PID: </label>
                                <select
                                    id="pid-select"
                                    value={selectedPid}
                                    onChange={(e) => setSelectedPid(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Choose
                                    </option>
                                    {pids.map((pid) => (
                                        <option key={pid} value={pid}>
                                            {pid}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="communication-quality">Communication Quality (out of 5): </label>
                                <select
                                    id="communication-quality"
                                    value={communicationQuality}
                                    onChange={(e) => setCommunicationQuality(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Choose
                                    </option>
                                    {[...Array(6).keys()].map((mark) => (
                                        <option key={mark} value={mark}>
                                            {mark}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="team-collaboration">Team Collaboration (out of 5): </label>
                                <select
                                    id="team-collaboration"
                                    value={teamCollaboration}
                                    onChange={(e) => setTeamCollaboration(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Choose
                                    </option>
                                    {[...Array(6).keys()].map((mark) => (
                                        <option key={mark} value={mark}>
                                            {mark}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="responsiveness">Responsiveness (out of 5): </label>
                                <select
                                    id="responsiveness"
                                    value={responsiveness}
                                    onChange={(e) => setResponsiveness(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Choose
                                    </option>
                                    {[...Array(6).keys()].map((mark) => (
                                        <option key={mark} value={mark}>
                                            {mark}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="novelty">Novelty (out of 5): </label>
                                <select
                                    id="novelty"
                                    value={novelty}
                                    onChange={(e) => setNovelty(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Choose
                                    </option>
                                    {[...Array(6).keys()].map((mark) => (
                                        <option key={mark} value={mark}>
                                            {mark}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            <div className='button-div1'>
                            <button type="submit">Submit</button>

                            </div>
                        </form>
                    ) : (
                        <p>No PIDs available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
