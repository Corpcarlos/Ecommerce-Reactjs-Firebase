import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';




export const ItemDetail = ({ jsonpack }) => {
  useEffect(() => { }, [jsonpack]);


  console.log("itemDetail");
  console.log(jsonpack);
  if (jsonpack) {

    return (
      <>
        <div className="productos">
          <div id="centerman" align="center">
            <Card className="card">
              <Card.Header className="top">
                <Card.Img src={jsonpack.pictureurl} />
              </Card.Header>
              <Card.Body className="body">
                <Card.Text>{jsonpack.title}</Card.Text>
                <Card.Subtitle className="body"></Card.Subtitle>
                <Card.Text>
                  PRECIO: $ {jsonpack.price}<br />
                  DISPONIBLES: {jsonpack.stock}
                </Card.Text>
              </Card.Body>
            </Card>
            <ItemCount productname={jsonpack.title} stock={jsonpack.stock} initial={1} productid={jsonpack.id} itemprice={jsonpack.price} />
          </div>
        </div>
      </>
    );
  }

  else {

    return (<></>);
  }

};