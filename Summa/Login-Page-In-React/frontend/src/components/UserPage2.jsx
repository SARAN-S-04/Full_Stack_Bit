import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PIDsContext } from './PIDsContext';
import './UserPage2.css';

const UserPage2 = () => {
    const { pids } = useContext(PIDsContext);
    const [selectedPid, setSelectedPid] = useState('');
    const [communicationQuality, setCommunicationQuality] = useState('');
    const [teamCollaboration, setTeamCollaboration] = useState('');
    const [responsiveness, setResponsiveness] = useState('');
    const [novelty, setNovelty] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedPid || !communicationQuality || !teamCollaboration || !responsiveness || !novelty) {
            setError('Please fill out all fields.');
            return;
        }
        setError('');
        // Handle the form submission logic here
    };

    return (
        <div className="user-page">
            <h2 className="user-header">Reviewer’s Marks</h2>
            <div className="user-content">
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
                                <label htmlFor="communication-quality">Clear Objectives (out of 5): </label>
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
                                <label htmlFor="team-collaboration">Originality & Creativity (out of 5): </label>
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
                                <label htmlFor="responsiveness">Technical Proficiency (out of 5): </label>
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
                                <label htmlFor="novelty">Implementation (out of 5): </label>
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
                            <button type="submit" className="center-button">Submit</button>
                        </form>
                    ) : (
                        <p>No PIDs available.</p>
                    )}
                </div>
                <div className="form-section">
                    {pids.length > 0 ? (
                        <form className="user-form">
                            <div className='temp'>
                                <label htmlFor="communication-quality"> Documentation & Presentation (out of 5): </label>
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
                                <label htmlFor="team-collaboration">Teamwork & Collaboration (out of 5): </label>
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
                                <label htmlFor="responsiveness">User Experience & Usability (out of 5): </label>
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
                                <label htmlFor="novelty">Continuous Improvement & Iteration (out of 5): </label>
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
                        </form>
                    ) : (
                        <p>No PIDs available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserPage2;
