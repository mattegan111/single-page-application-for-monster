import { useState } from 'react';

function CreateUserPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [title, setTitle] = useState('');
    const [plan, setPlan] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        const user = { firstName, lastName, email, dateOfBirth, creditCard, title, plan };

        fetch('/dummy-post-url', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log(user);
        });
    }

    return (
        <>
            <div>
                <h1>Create User</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input 
                            name='first_name' 
                            type='text' 
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)} 
                        />
                    </label>
                    <label>
                        Last Name:
                        <input 
                            name='last_name' 
                            type='text' 
                            value={lastName}
                            onChange={e => setLastName(e.target.value)} 
                        />
                    </label>
                    <label>
                        Email:
                        <input 
                            name='email' 
                            type='text' 
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </label>
                    <label>
                        Date of Birth:
                        <input 
                            name='date_of_birth' 
                            type='text' 
                            value={dateOfBirth}
                            onChange={e => setDateOfBirth(e.target.value)} 
                        />
                    </label>
                    <label>
                        Credit Card:
                        <input 
                            name='credit_card' 
                            type='text' 
                            value={creditCard}
                            onChange={e => setCreditCard(e.target.value)} 
                        />
                    </label>
                    <label>
                        Title:
                        <input 
                            name='employment.title' 
                            type='text' 
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                        />
                    </label>
                    <label>
                        Plan:
                        <input 
                            name="subscription.plan" 
                            type='text' 
                            value={plan}
                            onChange={e => setPlan(e.target.value)} 
                        />
                        {/* <select 
                            name="subscription.plan" 
                            onChange={setPlan}>
                            <option value="free-trial">Free Trial</option>
                            <option value="student">Student</option>
                            <option value="essential">Essential</option>
                            <option value="standard">Standard</option>
                            <option value="basic">Basic</option>
                            <option value="professional">Professional</option>
                            <option value="premium">Premium</option>
                            <option value="bronze">Bronze</option>
                            <option value="silver">Silver</option>
                            <option value="gold">Gold</option>
                            <option value="diamond">Diamond</option>
                            <option value="platinum">Platinum</option>
                        </select> */}
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default CreateUserPage;