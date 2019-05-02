import React, { useState, useEffect, lazy, Suspense } from 'react';
import { CardBody, 
        Card, 
        Form, 
        FormGroup, 
        Label, 
        Input,
        Button,
        ListGroup,
        ListGroupItem } from 'reactstrap';
import API from '../../utils/API';
import { Spinner } from 'reactstrap';

// Refactor so that state is located in parent element!!!
        
const buttonStyle = {
  marginTop: '2px'
}

const Comment = ( { id } ) => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(()=> {
    (async () => {
      const result = await API.getComments(id);
      setComments(result.data.comments);
    })();
  },[id])

  // Eventually, add prompt to verify user wants to delete comment!
  const handleDelete = async (commentID) => {
    API.deleteComment(commentID);
    
    const result = await API.getComments(id);
    setComments(result.data.comments)
  }

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleSubmit = (event) => {
    (async() => {
      API.saveComment({text: value}, id);

      const result = await API.getComments(id);
      setComments(result.data.comments);
      setValue("");
    })();

    event.preventDefault();
  }
  return (
    <Card>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="comments">Comments</Label>
            <Input name="comment" id="comments" value={value} onChange={handleChange}/>
            <Button style={buttonStyle} type='submit' value='submit'>Submit</Button>
          </FormGroup>
          <Suspense fallback={<Spinner color='dark' style={{ width: '10rem', height: '10rem' }} type='grow' />}>
            <ListGroup>
              {comments.map((comment, key) =>
                  <ListGroupItem key={key}>
                    {comment.text}<Button close onClick={()=> handleDelete(comment._id)} />
                  </ListGroupItem> )}
            </ListGroup>
          </Suspense> 
        </Form>
      </CardBody>
   </Card>
  )



};

export default Comment;