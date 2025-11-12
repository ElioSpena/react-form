import Button from "./Button"
import Form from "./Form"

export default function List({titolo, onClick, getElemOnClick, saveEditedElem, onTextChange, editingText, isEditing}) {
    return( <>
             <li className="list-item d-flex align-items-center flex-row justify-content-between">

                    {isEditing ? (
                        <input 
                        type="text"
                        placeholder="Modifica il titolo..."
                        value={editingText}
                        onChange={onTextChange}
                        className="form-control me-2"
                        /> ) : (
                            <h3 className="py-4">{titolo}</h3>
                        )
                    }


                <div className="d-flex gap-3">
                <Button   
                 onClick={onClick} 
                    className={"btn btn-outline-danger"}
                    text={"Cancella"}
                />

                <Button
                onClick={isEditing ? saveEditedElem : getElemOnClick}
                className={"btn btn-outline-success"}
                text={isEditing ? "Salva" : "Modifica"}
                
                />
                </div>
                  
            </li>
             <hr />
            </>

           
    )
}