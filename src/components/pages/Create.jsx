import { useNavigate } from "react-router-dom";
import Button from "../Button";

const Create = ({ eventFormStates, setEventFormStates }) => {
    const changeEventHandler = (e, name) => {
        setEventFormStates({ ...eventFormStates, [name]: e.target.value })
    }

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault()
        navigate("/event");
    }

  return (
    <div className="create">
        <form onSubmit={submitHandler}>
            {/* Event name, Host name, Start and End time/date, Location and Event photo. */}
            <div className="form-input">
            <label>Event Name</label>
            <input
                type="text"
                name="event"
                value={eventFormStates.event}
                id="event"
                placeholder="enter name"
                onChange={(e) => changeEventHandler(e, "event")}
            />
            
            </div>

            <div className="form-input">
            <label>Host Name</label>
            <input
                type="text"
                name="host"
                value={eventFormStates.host}
                id="host"
                placeholder="enter host"
                onChange={(e) => changeEventHandler(e, "host")}
            />
            </div>

            <Button version='create' text='Next' />
        </form>
    </div>
  )
}

export default Create