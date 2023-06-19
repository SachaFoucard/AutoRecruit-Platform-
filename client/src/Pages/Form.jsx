import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
import data from '../../public/data/positions.json'
import { useNavigate } from 'react-router-dom';


export default function Form() {
    let { id } = useParams();

    let nav = useNavigate();

    const [firstname, setFirstname] = useState();
    const [lastname, setlastname] = useState();
    const [city, setcity] = useState();
    const [codepostal, setcodepostal] = useState();
    const [state, setstate] = useState();
    const [phone, setphone] = useState();
    const [address, setAdress] = useState();
    const [resume, setResumeFile] = useState(null);
    const [mail, setmail] = useState()
    const [jobPosition, setJobPosition] = useState([]);
    const [linkedin, setLinkedin] = useState();
    const [github, setGithub] = useState();
    const [jobID, setJobID] = useState();



    const SendForm = async () => {
        setJobID(id)
        let response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname,
                lastname,
                mail,
                city,
                state,
                resume,
                phone,
                address,
                codepostal,
                linkedin,
                github,
                jobID
            })
        });

        if (response.status === 201) {
            alert('Sent successfully!');
            nav('/');
        } else if (response.status === 403) {
            alert('User with this email has already applied!');
        } else if (response.status === 401) {
            alert('Missing required fields, please check that all fields are filled');
        }
    };



    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setResumeFile(file);
    };
    useEffect(() => {
        let job = data.find((item) => item.id == id);
        setJobPosition(job)
    }, [])

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom>
                {jobPosition.title} Positions
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        type='text'
                        autoComplete="given-name"
                        variant="standard"
                        onChange={(e) => setFirstname(e.target.value)}
                        InputLabelProps={{
                            className: !firstname ? 'label-error' : ''
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        type='text'
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={(e) => setlastname(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        type='text'
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={(e) => setAdress(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="mail"
                        type='mail'
                        name="mail"
                        label="mail"
                        fullWidth
                        autoComplete="mail"
                        variant="standard"
                        onChange={(e) => setmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        type='string'
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        onChange={(e) => setcity(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="phone"
                        name="phone"
                        label="Phone"
                        type='phone'
                        fullWidth
                        variant="standard"
                        onChange={(e) => setphone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        type='number'
                        autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={(e) => setcodepostal(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        type='string'
                        autoComplete="shipping country"
                        variant="standard"
                        onChange={(e) => setstate(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="linkedin"
                        name="linkedin"
                        label="Linkedin link"
                        fullWidth
                        type='string'
                        autoComplete="linkedin"
                        variant="standard"
                        onChange={(e) => setLinkedin(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="github"
                        name="github"
                        label="github link"
                        fullWidth
                        type='string'
                        autoComplete="github"
                        variant="standard"
                        onChange={(e) => setGithub(e.target.value)}
                    />
                </Grid>
                <input className='cv'
                    type="file"
                    name='resume'
                    id="resume-upload"
                    accept=".png,.pdf"
                    onChange={(e) => setResumeFile(e.target.value)}
                />
                {resume && (
                    <p>Selected File: {resume.name}</p>
                )}
            </Grid>
            <button className='apply-now' onClick={() => SendForm()}> APPLY NOW</button>

        </React.Fragment >
    );
}