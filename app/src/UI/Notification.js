import './notification.scss';
const Notification = (props) =>{
    let wrapperClass ='notification';
    if(props.status === 'pending'){
        wrapperClass = wrapperClass + ' pending';
    }
    if(props.status === 'success'){
        wrapperClass = wrapperClass + ' success';
    }
    if(props.status === 'error'){
        wrapperClass = wrapperClass + ' error';
    }
    return(
        <div className={wrapperClass}>
            <div className="container">
                <div className="wrapper">
                    <div className="status-title">{props.title}</div>
                    <div className="message">{props.message}</div>
                </div>
            </div>
        </div>
    )
}
export default Notification;