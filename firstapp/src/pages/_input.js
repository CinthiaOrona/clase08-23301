export default function Input() {
    return (
        <div className="justify-content">
            <label htmlFor="roll"> Tu nombre </label>
            <input
                className="form-control"
                type="text"
                id="tunombre"
                name="tunombre"
                required
                minLength="10"
                maxLength="20" 
            />
        </div>
    )
}
