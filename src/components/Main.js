import React from 'react'
import { Button, Stepper, Step, StepLabel, Typography, TextField, Paper } from '@mui/material'
import { useState } from 'react'
import { useForm, FormProvider, useFormContext, Controller } from 'react-hook-form';
import { Container, Box } from '@mui/material'
import { insertdata } from '../action';
import { useDispatch } from 'react-redux/es/exports';
import { WindowTwoTone } from '@mui/icons-material';







function getsteps() {
    return [
        "Basic Information",
        "Contact Information",
        "Personal Information",
        "Payment",
        "Confirmation"

    ]
}


const Basicinfo = () => {

    const { control, formState: { errors } } = useFormContext()

    return (
        <>
            <Controller
                control={control}
                name="firstName"
                rules={{
                    required: true,
                    minLength: 2,
                    maxLength: 10,
                }}
                render={({ field }) => (
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.firstName)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.firstName?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.firstName?.type === "minLength" &&
                    "Minimun 2 character required"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.firstName?.type === "maxLength" &&
                    "Maximun 10 character is allowed"}
            </small>

            <Controller
                control={control}
                name="middelName"
                rules={{
                    required: true,
                    minLength: 2,
                    maxLength: 10,
                }}
                render={({ field }) => (
                    <TextField
                        id="middel-name"
                        label="Middel Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.middelName)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.middelName?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.middelName?.type === "minLength" &&
                    "Minimun 2 character required"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.middelName?.type === "maxLength" &&
                    "Maximun 10 character is allowed"}
            </small>

            <Controller
                control={control}
                name="lastName"
                rules={{
                    required: true,
                    minLength: 2,
                    maxLength: 10,
                }}
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.lastName)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.lastName?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.lastName?.type === "minLength" &&
                    "Minimun 2 character required"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.lastName?.type === "maxLength" &&
                    "Maximun 10 character is allowed"}
            </small>
        </>
    );
};
const Contactinfo = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <>
            <Controller
                control={control}
                name="emailAddress"
                rules={{
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                }}
                render={({ field }) => (
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.emailAddress)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.emailAddress?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.emailAddress?.type === "pattern" && "Enter valid Email-Address"}
            </small>


            <Controller
                control={control}
                name="phoneNumber"
                rules={{
                    required: true,
                    pattern: /^\d{10}$/

                }}
                render={({ field }) => (
                    <TextField
                        id="phone-number"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.phoneNumber)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.phoneNumber?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.phoneNumber?.type === "pattern" && "PhoneNumber is in-Valid"}
            </small>

            <Controller
                control={control}
                name="alternatePhone"
                rules={{
                    required: true,
                    pattern: /^\d{10}$/

                }}
                render={({ field }) => (
                    <TextField
                        id="alternate-phone"
                        label="Alternate Phone-Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.alternatePhone)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.alternatePhone?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.alternatePhone?.type === "pattern" && "PhoneNumber is in-Valid"}
            </small>
        </>
    )

};
const Personalinfo = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <>
            <Controller
                control={control}
                name="current_address"
                rules={{
                    required: true
                }}
                render={({ field }) => (
                    <TextField
                        id="address1"
                        label="Current Address "
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.current_address)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.current_address?.type === "required" && "this field is requird"}
            </small>


            <Controller
                control={control}
                name="permanent_address"
                rules={{
                    required: true
                }}
                render={({ field }) => (
                    <TextField
                        id="address2"
                        label="Permanent Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.permanent_address)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.permanent_address?.type === "required" && "this field is requird"}
            </small>

            <Controller
                control={control}
                name="State"
                rules={{
                    required: true
                }}
                render={({ field }) => (
                    <TextField
                        id="State"
                        label="State"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.State)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.State?.type === "required" && "this field is requird"}
            </small>
        </>
    )

};
const Paymentinfo = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <>
            <Controller
                control={control}
                name="cardNumber"
                rules={{
                    required: true,
                    pattern: /^\d{16}$/

                }}
                render={({ field }) => (
                    <TextField
                        id="cardNumber"
                        label="Card Number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.cardNumber)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.cardNumber?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.cardNumber?.type === "pattern" && "card number is invalid(cardNumber should have in 16 digit )"}
            </small>

            <Controller
                control={control}
                name="cardMonth"
                rules={{
                    required: true,
                    pattern: /^\d{2}$/

                }}
                render={({ field }) => (
                    <TextField
                        id="cardMonth"
                        label="Card Month"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.cardMonth)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.cardMonth?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.cardMonth?.type === "pattern" && "card month is invalid"}
            </small>
            <Controller
                control={control}
                name="cardYear"
                rules={{
                    required: true,
                    pattern: /^\d{4}$/

                }}
                render={({ field }) => (
                    <TextField
                        id="cardYear"
                        label="Card Year"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors.cardYear)}
                    />
                )}
            />
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.cardYear?.type === "required" && "this field is requird"}
            </small>
            <small style={{ color: "red", marginLeft: "10px" }}>
                {errors.cardYear?.type === "pattern" && "card year is invalid"}
            </small>
        </>
    )
};

const Formdata = (udata) => {
    console.log(udata.udata.firstName)

    return (
        <>
            <Container component={Box} p={5}>
                <Paper component={Box} p={2}>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>FirstName: {udata.udata.firstName}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>MiddelName: {udata.udata.middelName}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>LastName: {udata.udata.lastName}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>E-mail: {udata.udata.emailAddress}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>Phone: {udata.udata.phoneNumber}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>Alternate-Phone: {udata.udata.alternatePhone}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>Current-Address: {udata.udata.current_address}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>Permanent-Address: {udata.udata.permanent_address}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>State: {udata.udata.State}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>CardNumber: {udata.udata.cardNumber}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>CardMonth: {udata.udata.cardMonth}</Typography>
                    <Typography sx={{ color: "black", fontSize: "20px", borderTop: "none", borderLeft: "none", borderRight: "none", backgroundColor: "white", marginBottom: "15px" }}>CardYear: {udata.udata.cardYear}</Typography>
                    {/* <label style={{fontSize:"30px"}}>FirstName:  </label>
                <input
                disabled
                style={{color:"black",fontSize:"30px",borderTop:"none",borderLeft:"none",borderRight:"none",backgroundColor:"white"}}
                value={udata.udata.firstName}
                /> */}
                    <Button variant='contained' onClick={() => { window.print() }}>Print</Button>

                </Paper>

            </Container>

        </>
    )








}

function getstepcontent(step, udata) {


    switch (step) {
        case 0:
            return <Basicinfo />
        case 1:
            return <Contactinfo />
        case 2:
            return <Personalinfo />
        case 3:
            return <Paymentinfo />
        case 4:
            return <Formdata udata={udata} />
        default:
            return "404-NOT FOUND";
    }
}

function Main() {

    const [activestep, setActivestep] = useState(0)
    const [udata, setData] = useState();

    const dispatch=useDispatch()
    


    let step = getsteps();
    let method = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            middelName: "",
            emailAddress: "",
            phoneNumber: "",
            alternatePhone: "",
            current_address: "",
            permanent_address: "",
            State: "",
            cardNumber: "",
            cardMonth: "",
            cardYear: "",


        }
    }
    );

    // let onsubmit=(data)=>{
    //     console.log(data)
    // }

    const handleback = () => {
        setActivestep(activestep - 1)
    }

    const handlenext = (data) => {
        if (activestep === step.length - 2) {
            console.log(data)
            setData(data)
            dispatch(insertdata(data)) 
        }
        
        setActivestep(activestep + 1)
    }

    




    return (
        <>
            <Stepper alternativeLabel activeStep={activestep} sx={{ padding: 4 }}>
                {
                    step.map((step, index) => {
                        return (

                            <Step key={index}>
                                <StepLabel >
                                    {step}
                                </StepLabel>
                            </Step>
                        )

                    }
                    )}

            </Stepper>

            {
                activestep === 5 ?
                    <>
                        <Typography variant="h2" align='center' color={"green"} > Submitted Successfully!!!</Typography>
                        
                    </>



                    :
                    (
                        <>
                            <FormProvider {...method}>

                                <form onSubmit={method.handleSubmit(handlenext)}>
                                    {getstepcontent(activestep, udata)}
                                    <br />
                                    <Button sx={{ marginTop: 2 }} variant='contained' onClick={handleback} disabled={activestep === 0}>Back</Button>

                                    <Button sx={{ marginLeft: 3, marginTop: 2 }} variant='contained' type='submit' >{activestep === step.length - 1 ? "Finish" : "Next"}</Button>
                                </form>
                            </FormProvider>

                        </>


                    )
                    

            }
            

        </>
    )
}

export default Main
