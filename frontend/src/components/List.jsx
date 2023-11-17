import Card from 'react-bootstrap/Card';


function List(props){

    return (

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.genre}</Card.Subtitle>
            <Card.Text>
                 {props.starring}
            </Card.Text>
            {/*<Card.Link href="#">Card Link</Card.Link>*/}
            {/*<Card.Link href="#">Another Link</Card.Link>*/}
          </Card.Body>
        </Card>
    );
}

  //
  //       <div className="note">
  //           <h2 >  Film: {props.name} </h2>
  //           <p > Zanr: {props.genre}</p>
  //           <p > Uloge: {props.starring}</p>
  //       </div>
  //   )
  // }

export default List
