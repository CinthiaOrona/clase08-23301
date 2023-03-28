import Form from 'react-bootstrap/Form';

export default function Forms() {
    
    return (
        <Form noValidate className="w-50 mx-auto">
            <Form.Group className="mb-3" id="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="name@example.com" minLength={10} maxLength={40} />
            </Form.Group>
            <Form.Group className="mb-3" id="exampleForm.ControlTextarea1">
                <Form.Check type="checkbox" label='Si' value={'Si'} defaultChecked={true} />
                <Form.Check type="checkbox" label='No' value={'No'} defaultChecked={false} />

            </Form.Group>
            <Form.Group className="mb-3" id="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" minLength={5} maxLength={10} />
            </Form.Group>
            <Form.Group className="mb-3" id="exampleForm.ControlTextarea1">
                <Form.Label>Fecha</Form.Label>
                <Form.Control required type="date" />
            </Form.Group>
            <Form.Group className='mb3' id='exampleForm.ControlSelect'>
                <Form.Select aria-label="Default select example">
                    <option>Libros</option>
                    <option defaultValue="1">Handbook Javascript</option>
                    <option defaultValue="2">React & NextJs</option>
                    <option defaultValue="3">ISQTB- QA</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" id="exampleForm.ControlRange">
                <Form.Label>Rango</Form.Label>
                <Form.Range id="exampleForm.Range" defaultValue={0}/>
            </Form.Group>
            <Form.Control required type="submit" value="Enviar" className="btn btn-primary" />
        </Form>
    );
}