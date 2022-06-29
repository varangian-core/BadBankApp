


export default function Card(props) {

    return (<div>
        <div className="card-header">{props.header}</div>
            {props.title && (<h3 className="card-title">{props.title}</h3>)}
            <div className="card-body">
            {props.text && (<p className="card-text">{props.text}</p>)}
            {props.body}
            {props.status && (<div id="">{props.status}</div>)}
        </div>
    </div>
    );
        }