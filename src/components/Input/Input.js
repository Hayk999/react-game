function Input(props) {
    const { value, setValue } = props;

    return  <div>
          <p>temperature</p>
          <input 
            type="number" 
            value={value} 
            onChange={(event) => setValue(event.target.value)} 
        />
    </div>
}

export default Input