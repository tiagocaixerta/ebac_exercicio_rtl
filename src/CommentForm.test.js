
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommentForm from './CommentForm';

describe('CommentForm', () => {
  test('insere dois comentários', () => {
    const handleAddComment = jest.fn(); 

    render(<CommentForm onAddComment={handleAddComment} />); 

 
    fireEvent.change(screen.getByTestId('comment-input'), {
      target: { value: 'Primeiro comentário' },
    });
    fireEvent.click(screen.getByTestId('submit-button'));

  
    fireEvent.change(screen.getByTestId('comment-input'), {
      target: { value: 'Segundo comentário' },
    });
    fireEvent.click(screen.getByTestId('submit-button'));

    
    expect(handleAddComment).toHaveBeenCalledTimes(2); 
    expect(handleAddComment).toHaveBeenCalledWith('Primeiro comentário'); 
    expect(handleAddComment).toHaveBeenCalledWith('Segundo comentário'); 
  });
});
