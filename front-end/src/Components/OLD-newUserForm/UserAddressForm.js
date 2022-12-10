import React from 'react';
import { Col, Form } from 'react-bootstrap/';

export default function UserAddressForm({ userInfo, setUserInfo, addressInfo, setAddInfo, handleTextChange, handleNumberChange }) {
    const { address, city, state, zip, complete } = addressInfo;

    const handleAddressTextChange = (event) => {
        setAddInfo({ ...addressInfo, [event.target.id]: event.target.value });
    };

    const formatAddress = () => {
        let addressDone = `${address}, ${city}, ${state}, ${zip}`;
        setAddInfo({ ...addressInfo, ['complete']: addressDone });
        setUserInfo({ ...userInfo, ['address']: addressDone })
    }

    return (
        <  >
            <div className="p-2">
                <div className="container">
                    <div className="border border-dark">
                        <h4 className="text-center m-3">Housing Information</h4>

                        {/* Address */}
                        <div className="m-3 border p-3">
                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    placeholder='Enter Address / P.O Box '
                                    onChange={handleAddressTextChange}
                                // required
                                />
                            </Form.Group>

                            {/* <Form.Row> */}
                            <Form.Group as={Col} controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    onChange={handleAddressTextChange}
                                // required
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="state">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="state"
                                    onChange={handleAddressTextChange}
                                // required
                                >
                                    <option value="">Select State</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DE">Delaware</option>
                                    <option value="DC">District Of Columbia</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="IA">Iowa</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="ME">Maine</option>
                                    <option value="MD">Maryland</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NY">New York</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VT">Vermont</option>
                                    <option value="VA">Virginia</option>
                                    <option value="WA">Washington</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WY">Wyoming</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="zip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="zip"
                                    onChange={handleAddressTextChange}
                                // required
                                />
                            </Form.Group>


                            <Form.Check
                                type='checkbox'
                                id='complete'
                                label="Finished Address Input"
                                onClick={formatAddress}

                            />

                        </div>

                        {/* Residence Type  */}

                        <div className="m-3 residenceType-div-outter" onChange={handleTextChange}>
                            <Form.Label>Residence Type</Form.Label>
                            <div className="residenceType-div-inner border p-3">
                                <Form.Check
                                    label='Private Home'
                                    name='residence'
                                    type="radio"
                                    id="residence_type"
                                    value="private_home"
                                />
                                <Form.Check
                                    label='Apartment'
                                    name='residence'
                                    type="radio"
                                    id="residence_type"
                                    value="apartment"
                                />
                                <Form.Check
                                    type="radio" name="reason" id='residence_type' value="">Other <input type="text" id='residence_type' name="other_reason" />
                                </Form.Check>
                            </div>

                        </div>

                        {/* HouseHold Size */}
                        <Form.Group className="m-3 userAge">
                            <Form.Label>House Hold Size</Form.Label>
                            <Form.Control
                                id="household_size"
                                type="number"
                                step='1'
                                placeholder="Enter House Hold Size"
                                onChange={handleNumberChange} />
                        </Form.Group>

                    </div>
                </div>
            </div>


        </>
    );
}