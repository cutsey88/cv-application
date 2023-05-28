import '../styles/App.css';
import '../styles/companyExperience.css';

function CompanyExperience(props) {
    const position = props.position;
    let rbID = 'rb-' + position.id;
    let yFID = 'yf-' + position.id;
    let yTID = 'yt-' + position.id;
    let dpID = 'dp-' + position.id;
    if (props.saved) {
        return (
            <div className="positionBox">
                <div className="positionInfoBox">
                    <div className="positionNameBox">
                        <p className="positionNameText">{position.title}</p>
                    </div>
                    <div className="positionYearsBox">
                        <p className="positionYearsText">{position.years[0].concat(' - ', position.years[1])}</p>
                    </div>
                </div>
                <ul className="responsibilitiesContainer">
                    {position.responsibilities.map((responsibility) => {
                        return  <li key={responsibility.id} className="responsibilityBox">
                                    <p className="responsibilityText">{responsibility.text}</p>
                                </li>
                    })}
                </ul>
            </div>
        )
    }
    return (
        <div className="positionBox">
            <label className="positionLabel" htmlFor={position.id}>Position:</label>
            <span className="deletePositionSpan">
                <button id={dpID} className="deletePositionButton" onClick={props.deletePosition}>Delete</button>
            </span>
            <input
                type="text"
                name="position"
                id={position.id}
                className="positionInput"
                value={position.title}
                onChange={props.handleInputChange} />
            <label htmlFor={yFID}>From:</label>
            <input
                type="tel"
                name="from"
                id={yFID}
                className="positionYearFromInput"
                value={position.years[0]}
                onChange={props.handleInputChange} />
            <label htmlFor={yTID}>To:</label>
            <input
                type="tel"
                name="to"
                id={yTID}
                className="positionYearToInput"
                value={position.years[1]}
                onChange={props.handleInputChange} />
            <div className="responsibilitiesContainer">
                {position.responsibilities.map((responsibility) => {
                    let drID = 'dr-' + responsibility.id;
                    return (
                            <div key={drID} className="responsibilityBox">
                                <label className="responsibilityLabel" htmlFor={responsibility.id}>Responsibility:</label>
                                <span className="deleteResponsibilitySpan">
                                    <button id={drID} className="deleteResponsibilityButton" onClick={props.deleteResponsibility}>Delete</button>
                                </span>
                                <textarea
                                    type="text"
                                    name="responsibility"
                                    key={responsibility.id}
                                    id={responsibility.id}
                                    className="responsibilityInput"
                                    rows={4}
                                    value={responsibility.text}
                                    onChange={props.handleInputChange}></textarea>
                            </div>
                    )
                })}
            </div>
            <button
                className="addResponsibilityButton"
                id={rbID}
                onClick={props.addResponsibility}>Add responsibility</button>
        </div>
    );
}

export default CompanyExperience;