import { Form } from 'react-bootstrap/';

export function URLRequired(inputID){
    return (
        <Form.Control 
        type="url" 
        id={inputID}
        placeholder="https://example.com"
        pattern="https://.*" 
        size="50" 
        // required
        />
    )
}