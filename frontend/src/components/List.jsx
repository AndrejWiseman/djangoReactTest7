function List(props){

    return (
        <div className="note">
            <h1 >  Title: {props.name} </h1>
            <p > Content: {props.genre}</p>
            <p > Content: {props.starring}</p>
        </div>
    )
  }

export default List
