import React from "react";

import {
    Tab, Tabs, Form,

    FormControl,

    Button,
} from 'react-bootstrap';

function Managesitesettings() {
    return (
        <>
            <div className="Tabs_container">
                <div className="Tabs_content text-start p-4">
                    <h4>Site settings</h4>
                    <Tabs
                        defaultActiveKey="Site"
                        id="uncontrolled-tab-example"
                        className="my-4"
                    >
                        <Tab eventKey="Site" title="Site">
                            <Form className="Adminuser_form col-8 py-4">
                                <label className="fs-6">Site-Logo:</label>
                                <FormControl type="file" className="py-2 mb-3" />
                                <label className="fs-6">Favicon image:</label>
                                <FormControl type="file" className="py-2 mb-3" />
                                <label className="fs-6">Site Name:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Primary-phonenumber:</label>
                                <FormControl type="number" className="py-2 mb-3" />
                                <label className="fs-6">Secondary-phonenumber:</label>
                                <FormControl type="number" className="py-2 mb-3" />
                                <label className="fs-6">From Email-address:</label>
                                <FormControl type="mail" className="py-2 mb-3" />
                                <label className="fs-6">From Email Name:</label>
                                <FormControl type="mail" className="py-2 mb-3" />
                                <label className="fs-6">To Email-address:</label>
                                <FormControl type="mail" className="py-2 mb-3" />
                                <label className="fs-6">To Email Name:</label>
                                <FormControl type="mail" className="py-2 mb-3" />
                                <label className="fs-6">Default-country:</label>
                                <Form.Select
                                    aria-label="Default select example"
                                    className="py-2 mb-3"
                                >
                                    <option>Default Country</option>
                                    <option value="1">super admin</option>
                                    <option value="2">sub admin</option>

                                </Form.Select>
                                <label className="fs-6">Default-Currency code:</label>
                                <Form.Select
                                    aria-label="Default select example"
                                    className="py-2 mb-3"
                                >
                                    <option>Default-Currency code</option>
                                    <option value="1">super admin</option>
                                    <option value="2">sub admin</option>

                                </Form.Select>
                                <label className="fs-6">Make site specific to this country?:</label>
                                <div className="d-flex">
                                    <Form.Check
                                        className="py-2 mb-3 me-3"
                                        type="checkbox"
                                        label="Yes"
                                    />
                                    <Form.Check className="py-2 mb-3" type="checkbox" label="No" />
                                </div>
                                <label className="fs-6">Street Address:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={3} />
                                <label className="fs-6">Site goole map:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={3} />
                                <label className="fs-6">Package for?:</label>
                                <div className="d-flex">
                                    <Form.Check
                                        className="py-2 mb-3 me-3"
                                        type="checkbox"
                                        label="Job seeker"
                                    />
                                    <Form.Check className="py-2 mb-3 me-3" type="checkbox" label="Employer" />
                                    <Form.Check className="py-2 mb-3 me-3" type="checkbox" label="Cv Search" />
                                    <Form.Check className="py-2 mb-3" type="checkbox" label="Ads" />
                                </div>
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="E-mail" title="E-mail">
                            <Form>
                                <label className="fs-6 pb-2">Mail Driver:</label>
                                <Form.Select
                                    aria-label="Default select example"
                                    className="py-2 mb-5"
                                >
                                    <option>Mail Driver</option>
                                    <option value="1">super admin</option>
                                    <option value="2">sub admin</option>

                                </Form.Select>
                                <h4>SMTP settings</h4>
                                <hr />
                                <label className="fs-6">Mail host:</label>
                                <FormControl type="mail" className="py-2 mb-3" />
                                <label className="fs-6">Mail Port:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Mail Encryption:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Mail Username:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Mail password:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <h4>Send Mail - Pretend Settings:</h4>
                                <hr />
                                <label className="fs-6">Mail Sendmail:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Mail Pretend:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <h4>Mail-gun settings</h4>
                                <hr />
                                <label className="fs-6">Mailgun Domain:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Mailgun Secret:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <h4>Mandrill settings</h4>
                                <hr />
                                <label className="fs-6">Mandrill Secret:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <h4>Sparkpost Settings:</h4>
                                <hr />
                                <label className="fs-6">Sparkpost Secret:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <h4>AMAZON SES Settings:</h4>
                                <hr />
                                <label className="fs-6">SES Key:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">SES Secret:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">SES Region:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Social-networks" title="Social-networks">

                            <Form>
                                <label className="fs-6">Facebook Address:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Google+ Address:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Pinterst Address:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Twitter Address:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Instagram Address:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Youtube Address:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Manage-ads" title="Manage-ads">
                        <Form>
                                <label className="fs-6 pb-2">Index Page Below Top Employes:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <label className="fs-6 pb-2">Index Page Below Cities:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <label className="fs-6 pb-2">Dashboard Below Menu Verticle Ad:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Captcha" title="Captcha">
                            <Form>
                                <label className="fs-6">Site key:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Secret:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Social-media Login" title="Social-media Login">
                            <Form>
                                <label className="fs-6">Facebook App ID:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Facebook App Secret:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Twitter App ID:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Twitter App Secret:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Payment-gateway" title="Payment-gateway" >
                            <Form>
                                <h3>Paypal:</h3>
                                <hr />
                                <label className="fs-6">Paypal Account:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Paypal client id:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Paypal Secret :</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Is Sandbox?:</label>
                                <div className="d-flex">
                                    <Form.Check
                                        className="py-2 mb-3 me-3"
                                        type="checkbox"
                                        label="sandbox"
                                    />
                                    <Form.Check
                                        className="py-2 mb-3 "
                                        type="checkbox"
                                        label="Live"
                                    />
                                </div>
                                <label className="fs-6">Is Paypal Active?:</label>
                                <div className="d-flex">
                                    <Form.Check
                                        className="py-2 mb-3 me-3"
                                        type="checkbox"
                                        label="yes"
                                    />
                                    <Form.Check
                                        className="py-2 mb-3 "
                                        type="checkbox"
                                        label="No"
                                    />
                                </div>
                                <h3>PayUmoney:</h3>
                                <hr />
                                <label className="fs-6 pb-2">Payu mode:</label>
                                <Form.Select
                                    aria-label="Default select example"
                                    className="py-2 mb-3"
                                >
                                    <option>--Mode--</option>
                                    <option value="1">Test</option>
                                    <option value="2">Live</option>

                                </Form.Select>
                                <label className="fs-6">Paypal-U key:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Paypal-U salt:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Is Payu Active?:</label>
                                <div className="d-flex">
                                    <Form.Check
                                        className="py-2 mb-3 me-3"
                                        type="checkbox"
                                        label="yes"
                                    />
                                    <Form.Check
                                        className="py-2 mb-3 "
                                        type="checkbox"
                                        label="No"
                                    />
                                </div>

                                <h3>Stripe:</h3>
                                <hr />

                                <label className="fs-6">Stripe Publishable Key:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Stripe Secret:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6">Is Stripe active?:</label>
                                <div className="d-flex">
                                    <Form.Check
                                        className="py-2 mb-3 me-3"
                                        type="checkbox"
                                        label="yes"
                                    />
                                    <Form.Check
                                        className="py-2 mb-3 "
                                        type="checkbox"
                                        label="No"
                                    />
                                </div>
                                <h3>Packages:</h3>
                                <hr />
                                <label className="fs-6">Is Package active for job seaker?:</label>
                                <div className="d-flex">
                                    <Form.Check
                                        className="py-2 mb-3 me-3"
                                        type="checkbox"
                                        label="yes"
                                    />
                                    <Form.Check
                                        className="py-2 mb-3 "
                                        type="checkbox"
                                        label="No"
                                    />
                                </div>
                                <label className="fs-6">Is Package active for company?:</label>
                                <div className="d-flex">
                                    <Form.Check
                                        className="py-2 mb-3 me-3"
                                        type="checkbox"
                                        label="yes"
                                    />
                                    <Form.Check
                                        className="py-2 mb-3 "
                                        type="checkbox"
                                        label="No"
                                    />
                                </div>

                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Mail-chimp" title="Mail-chimp" >
                        <Form>
                                <label className="fs-6 pb-2">MailChimp API Key:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <label className="fs-6 pb-2">MailChimp List Name:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <label className="fs-6 pb-2">MailChimp List ID:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Google-Analytics" title="Google-Analytics" >
                        <Form>
                                <label className="fs-6 pb-2">Enter Analytics Code:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <label className="fs-6 pb-2">Google Tag Manager for Head:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <label className="fs-6 pb-2">Google Tag Manager for Body:</label>
                                <FormControl type="text" className="py-2 mb-3" as="textarea" rows={4}/>
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="Jobg8 api" title="Jobg8 api" >
                        <Form>
                                <label className="fs-6 pb-2">Enter username:</label>
                                <FormControl type="text" className="py-2 mb-3"/>
                                <label className="fs-6 pb-2">Enter Password:</label>
                                <FormControl type="text" className="py-2 mb-3" />
                                <label className="fs-6 pb-2">Enter Account Number:</label>
                                <FormControl type="text" className="py-2 mb-3" />

                                <p className="m-0">If you want to import jobs from jobg8 api then click on this link:</p>
                                <p>www.sample.com</p>
                                <Button className='Btn_color py-2 mt-2' type='submit'>Save Changes</Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    );
}

export default Managesitesettings;