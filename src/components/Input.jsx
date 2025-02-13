export default function input({id,label,error,...props}) {
    return (
        <div className="control no-margin">
            <div className="control">
                <label htmlFor={id}>{label}</label>
                <input id={id} {...props} />
            </div>
            <div className="control-error"> 
                { error && <p>{error}</p> }
            </div>
        </div>
    )
}