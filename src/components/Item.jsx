import React, { useEffect } from "react";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Item = ({ jsonpack }) => {
  const itemid = jsonpack.id;
  useEffect(() => { }, [jsonpack]);
  console.log("jsonpack");
  console.log(jsonpack);

  return (
    <>
      <div className="container">
        <Card>
          <Card.Header>
            <Card.Img variant="top" src={jsonpack.pictureurl} />
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="subtitulo"><p>DESCRIPCION</p>{jsonpack.description}</Card.Subtitle><br />
            <Card.Text>PRECIO: $ {jsonpack.price}</Card.Text>
          </Card.Body>
          <Link to={`/item/${itemid}`} className="letrasnav"><Button>{jsonpack.title}</Button></Link>
        </Card>
      </div>
    </>
  );
};

export default Item;