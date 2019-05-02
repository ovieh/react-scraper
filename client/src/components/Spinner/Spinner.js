import React from 'react';
import { Container, Spinner } from 'reactstrap';

const Progress = () => 
  <Container className='mx-auto align-middle' style={{width: '200px'}}>
    <Spinner color='dark' style={{ width: '10rem', height: '10rem' }} type='grow' />
  </Container>

export default Progress;