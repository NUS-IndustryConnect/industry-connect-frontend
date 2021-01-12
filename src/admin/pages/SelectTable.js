import React, { useState } from 'react';

export default function SelectTable(props) {
  const {
    headers,
<<<<<<< HEAD
    data,
=======
    data = [],
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    dataToRow,
    idKey,
    className="",
    actions
  } = props;

  const [selections, setSelections] = useState([]);
  // updating a single checkbox
  const updateSelections = (id, checked) => {
    if (checked) { // add to selections
      setSelections(prevSelections => prevSelections.concat([id]));
    } else { // remove from selections
      setSelections(prevSelections => prevSelections.filter(
        elem => elem !== id
      ));
    }
  }

  // "select all" checkbox
  const allIDs = data.map(d => d[idKey]);
  const selectAll = () => setSelections(allIDs);
  const selectNone = () => setSelections([]);
  const toggleAll = event => event.target.checked ? selectAll() : selectNone();

<<<<<<< HEAD
  return (
=======
  return data.length === 0
  ? <p>No items.</p>
  : (
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
    <React.Fragment>
      <table className={className + " select-table"}>
        <thead>
          <tr>
            <th><input type="checkbox" onChange={toggleAll} /></th>
            { headers.map(h => <th key={h}>{h}</th>) }
          </tr>
        </thead>
        <tbody>
          { data.map(d => dataToRow(d,
            <input
              type="checkbox"
              checked={selections.includes(d[idKey])}
              onChange={(event) => updateSelections(d[idKey], event.target.checked)}
            />)) }
        </tbody>
      </table>
      { (selections.length > 0 && actions) ?
        <div className="actions">
          { actions.map(({ label, className, onClick }) => 
            <button
              key={label}
              className={className}
<<<<<<< HEAD
              onClick={() => onClick(selections)}
=======
              onClick={() => {
                onClick(selections)
                selectNone();
              }}
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
            >
              {label}
            </button>)}
        </div> :
        null }
    </React.Fragment>
  );
}