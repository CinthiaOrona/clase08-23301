import Form from 'react-bootstrap/Form';

function TextControlsExample() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Check type="checkbox" label='Si' value={'Si'} defaultChecked="false" />
                <Form.Check type="checkbox" label='No' value={'No'} defaultChecked="false" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" />
            </Form.Group>
            <Form.Group className='mb3' controlId='exampleForm.ControlSelect'>
                <Form.Select aria-label="Default select example">
                    <option>Libros</option>
                    <option defaultValue="1">Handbook Javascript</option>
                    <option defaultValue="2">React & NextJs</option>
                    <option defaultValue="3">ISQTB- QA</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlRange">
            </Form.Group>
            <Form.Label>Rango</Form.Label>
            <Form.Range constrolId='exampleForm.Range' defaultValue={0} />
            <Form.Control type="submit" value="Enviar" className="btn btn-primary" />
        </Form>
    );
}

export default TextControlsExample;