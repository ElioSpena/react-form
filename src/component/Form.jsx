import Button from "./Button"

export default function Form({onSubmit, onChange, value, btnClassName, formClassName, inputClassName, text, type}) {
    return (
             <form
          onSubmit={onSubmit}
           className={formClassName}>

            <input 
            value={value}
            onChange={onChange}
            className={inputClassName}
            type={type} />

            <Button
            className={btnClassName}
            text={text}
            />
          </form>
    )
}