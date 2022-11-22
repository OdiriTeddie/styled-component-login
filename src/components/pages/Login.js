import { useState, useEffect } from "react"
import PageLayout from "components/common/PageLayout"
import styled from 'styled-components'
import { Input } from "components/common/Input"
import PasswordInput from "components/common/PasswordInput"
import { Button, Spinner } from "components/common"


const Form = styled.form`
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 1rem;
    color: #000;
    border-radius: 4px;

    .alt-text {
        text-align: center;
        margin-block: 10px;
    }

    >${Button}:first-of-type{
        margin-top: 20px;
    }

    >${Input}{
        margin-top: 20px;
    }
`

let timeOut;

const Login = () => {

    const [formFields, setFormFields] = useState({username: '', password: ''})
    const [loading, setLoading] = useState(false)

    function handleInputChange(e){
        e.persist();
        setFormFields(s => ({
            ...s,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        setLoading(true);
        timeOut = setTimeout(() => {
            setLoading(false)
        }, 2000)


        e.preventDefault();
    }

    useEffect(() => {
        return () => {
            if(timeOut) {
                clearTimeout(timeOut);
            }
        }
    }, [])

    return (
        <PageLayout>
            <h1>Login</h1>
            <Form onSubmit = {handleSubmit}>
                {loading ? <Spinner /> : 
                <>
                <span>Login if you have an account</span>
                <Input 
                    value = {formFields.username}
                    onChange = {handleInputChange}
                    name="username" 
                    type="text"
                    placeholder="Username" 
                />

                <PasswordInput
                    value = {formFields.password}
                    onChange = {handleInputChange}
                    name="password"  
                    />
                </>
                 }

                <Button large type="submit" disabled={loading}>
                    {loading ? 'loading....' : 'Login'}
                </Button>
                {!loading && 
                    <>
                    <div className="alt-text">or</div>
                    <Button secondary type="button">
                        Register
                    </Button>
                    </>
                }
            </Form>
        </PageLayout>
    )
}

export default Login