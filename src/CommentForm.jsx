
import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onAddComment(comment); 
    setComment(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        data-testid="comment-input" 
        value={comment}
        onChange={(e) => setComment(e.target.value)} 
      />
      <button data-testid="submit-button" type="submit">Adicionar Comentário</button>
    </form>
  );
};

export default CommentForm;
