import React, { useState } from 'react';
import { CardBody, 
        Card, 
        Form, 
        FormGroup, 
        Label, 
        Input,
        Button } from 'reactstrap';
import API from '../../utils/API';


        
const buttonStyle = {
  marginTop: '2px'
}

const Comment = ( { id } ) => {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleSubmit = async (e) => {
    // alert('a comment was submitted ' + value);
    API.saveComment({text: value}, id);
    // const results = await API.getArticles(id);
    // console.log(results)
    e.preventDefault();
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

        </Form>
      </CardBody>
   </Card>
  )



};

export default Comment;