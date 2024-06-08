import AddIdeaDialogue from './AddIdeaDialogue';

import React, { useState } from 'react';

const Footer = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShareClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmitIdea = (idea) => {
        // Submit the idea to the backend
        fetch('/api/submit-idea', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ idea }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        setShowModal(false);
    };

    return (
        <div id="footer" style={{ display: 'flex', flexDirection: 'row', color: "#FFF" }}>
            <p style={{opacity: '30%' }}>Got an burning question? <a style={{opacity: '80%', textDecoration: 'underline', cursor: 'pointer' }} onClick={handleShareClick}>Add it to the list</a></p>
            <AddIdeaDialogue show={showModal} handleClose={handleCloseModal} handleSubmit={handleSubmitIdea} />
        </div>
    );
}
export default Footer