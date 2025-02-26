import react from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return (
        <div>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        </div>
    )
}