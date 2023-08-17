import logo from './logo.svg';
import './App.css';
import React from 'react';
import Image from './image';
import Name from './Name';
import Price from './price';
import Description from './description';
import newObj from "./product";
import Card from 'react-bootstrap/Card';


let defObj = JSON.parse(newObj);

function App() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={defObj.Image}/>
      <Card.Body>
        <Card.Title><Name Name={defObj.Name}/></Card.Title>
        <Card.Text>
        <Price Price={defObj.Price}/>
        </Card.Text>
        <Card.Text>
        <Description Description={defObj.Description}/>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}





export default App;
