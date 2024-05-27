import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TextInput from '../ui/placeholder/TextInput'
import Button from '../ui/button/Button'

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }    
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/api/user/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex space-x-10">
                    <TextInput title="Tên" type="text" name="name" onChange={handleChange}></TextInput>
                    <TextInput title="Email" type="text" name="email" onChange={handleChange}></TextInput>
                    <TextInput title="Số điện thoại" type="text" name="mobile" onChange={handleChange}></TextInput>
                    <Button type="submit">Lưu</Button>
                </div>
                
            </form>
        </div>
    )
}