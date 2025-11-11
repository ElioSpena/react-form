import Button from "./Button"

export default function List({titolo, onClick}) {
    return(
             <li className="list-item d-flex align-items-center flex-row justify-content-between">
                  <h3 className="py-4">{titolo}</h3>

                <Button   
                 onClick={onClick} 
                    className={"btn btn-outline-danger"}
                    text={"Cancella"}
                />
                  
            </li>
    )
}