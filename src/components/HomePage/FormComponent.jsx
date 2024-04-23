import React, {useState} from 'react';
import style from '../HomePage/FormComponent.module.css'
function FormComponent(){
    const [input, setInput] = useState({
        current: '',
        dest: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', input);
        
    };
    return (
        <form onSubmit={handleSubmit} className={style.formContainer}>
            <h2 className={style.formText}>Current</h2>
            <input type="text" name="current" value={input.current} onChange={handleChange} className={style.inputField}/>
            <h2 className={style.formText}>Destination</h2>
            <input type="text" name="dest" value={input.dest} onChange={handleChange}  className={style.inputField}/>
            <button type="submit" className={style.goButton}>Go</button>
        </form>
    );

}
export default FormComponent;