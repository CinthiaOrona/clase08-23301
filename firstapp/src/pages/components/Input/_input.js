export default function Input() {
    return (
        <div className="bg-light p-3">
            <label htmlFor="tunombre"> Tu nombre </label>
            <input
                className='form-control mt-3 mb-3'
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
