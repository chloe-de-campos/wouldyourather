
import React, { useState } from 'react';
import {storeFeedback} from  '../storeResponse';


const AddIdeaDialogue = ({ show, handleClose, handleSubmit }) => {
    const [idea, setIdea] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(idea);
        storeFeedback({idea})
        setIdea(''); // Clear the input field after submission
    };

    if (!show) {
        return null;
    }

    const handleOverlayClick = (e) => {
        // Check if the click is on the overlay and not on the dialog content
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    return (
        <div  
            onClick={handleOverlayClick}
            style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            
            <div  id="addideadialogue"
            >
                <h3 style={{color: '#303030', textAlign: 'left',  margin: '10px'}}>Add your own question</h3>

                <form onSubmit={onSubmit} style={{padding:'10px', display:'flex', flexDirection:'column', alignItems:'end'}}>
                    <textarea
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                        placeholder="Would you rather..."
                        style={{resize: 'none', border:'tomato solid 1px', borderRadius:'5px', width: '-webkit-fill-available', height: '100px', padding:'20px' }}
                    />
                    <button style={{margin:'10px 0 0 0 '}} type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddIdeaDialogue