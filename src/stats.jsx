function Stats(props) {
    return (
      <div className='col-md-4 mb-4'>
        <h6>Number of {props.name}</h6>
        <span className={props.className}>{props.detail}</span>
      </div>
    );
}

export default Stats;