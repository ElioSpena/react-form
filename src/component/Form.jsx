import Button from "./Button"

export default function Form({onSubmit, onChange, value, text}) {
    return (
             <form
          onSubmit={onSubmit}
           className="text-center">

            <input 
            value={value}
            onChange={onChange}
            className="form-control mb-3"
            type="text" />

            <Button
            className={"btn btn-primary mb-4"}
            text={"Aggiungi Articolo"}
            />
          </form>
    )
}