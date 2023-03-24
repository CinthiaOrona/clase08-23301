export default function Input() {
    return (
        <div justify-content m-4 p-4 mx-auto>
            <label for="roll"> Tu nombre </label>
            <input
                className="form-control"
                type="text"
                id="tunombre"
                name="tunombre"
                required
                minlength="10"
                maxlength="20" 
            />
        </div>
    )
}
