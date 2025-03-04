import './card.css';

function Card(props) {
    return (
        <div className="card">
            <div className="img"><img src={props.uurl} alt="" /></div>
            <div className="info">
                <div className="head">{props.name}</div>
                <div className="data">{props.work}</div>
            </div>
        </div>
    );
}

export default Card;
