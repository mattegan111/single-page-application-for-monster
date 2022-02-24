function CreateUserPage() {
    return (
        <>
            <div>
                <h1>Create User</h1>
            </div>
            <div>
                <form>
                    <label>
                        First Name:
                        <input type="text" name="first_name" />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="last_name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Date of Birth:
                        <input type="text" name="date_of_birth" />
                    </label>
                    <label>
                        Credit Card:
                        <input type="text" name="cc_number" />
                    </label>
                    <label>
                        Title:
                        <input type="text" name="employment.title" />
                    </label>
                    <label>
                        Plan:
                        <input type="text" name="subscription.plan" />
                    </label>
                    <select>
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
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default CreateUserPage;