function List(props){

    return (
        <div className="note">
            <h2 >  Film: {props.name} </h2>
            <p > Zanr: {props.genre}</p>
            <p > Uloge: {props.starring}</p>
        </div>
    )
  }

export default List
