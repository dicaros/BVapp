package BVApp;

//contains validation results from creating a new user

import java.util.Calendar;

import org.springframework.util.StringUtils;

public class UserDataFlow {
	public String name;
	public String firstname;
	public String lastname;
	public String password;
	public String confirmpassword;
	public String email;


	protected UserDataFlow() {}
	
	public UserDataFlow(String name, String firstname, String lastname, String password, String confirmpassword, String email) {
		this.name = name;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.confirmpassword = confirmpassword;
		this.email = email;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastname;
	}

	public void setLastName(String lastname) {
		this.lastname = lastname;
	}

	public String getFirstName() {
		return firstname;
	}

	public void setFirstName(String firstname) {
		this.firstname = firstname;
	}
	
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmpassword;
	}
	
	public void setConfirmPassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}

	public UserResponse saveUser(MyuserRepository repo, MyUserDetailsRepository repo2)
	{	 
		UserResponse usercheck = this.validateRegistration(this.password, this.confirmpassword, this.name, this.email, repo);

		// if the usercheck is successful then create a new user
		if(usercheck.checkfailed == false)
			{
				Myuser myuser = new Myuser(
						this.name, this.password, "ROLE_USER", this.email, this.firstname, this.lastname);
    					myuser = repo.save(myuser);	
			
				java.sql.Date nowdate = new java.sql.Date(Calendar.getInstance().getTime().getTime());

    			MyUserDetail myuserdetail = new MyUserDetail("", 0.0, 0.0, 0, 0, myuser, nowdate);
    					myuserdetail = repo2.save(myuserdetail);
			}
		
		return usercheck;
	}
	
	// validate a new user request and return the result
	public UserResponse validateRegistration(String password1, String password2, String name, String email, MyuserRepository repo)
	{			
		// create a new empty user response 
		UserResponse usercheck = new UserResponse(false, false, false, false, false, false, false, false, "");

		// name cannot be null or empty
		if(name == null || name.equals(""))
		{
			usercheck.setFailed(true);
			usercheck.setnameblank(true);
			usercheck.setDescription(usercheck.resultdescription + "The name field cannot be blank. ");
		}

		// the two passwords supplied must match
		if(!password1.equals(password2))
		{
			usercheck.setFailed(true);
			usercheck.setpsswmismatch(true);
			usercheck.setDescription(usercheck.resultdescription + "The two passwords must match. ");
		}

		// the password cannot be null or empty
		if(password1 == null || password1.equals(""))
		{
			usercheck.setFailed(true);
			usercheck.setpsswblank(true);
			usercheck.setDescription(usercheck.resultdescription + "The password field cannot be blank.");
		}

		// the password must at least be 8 chars long
		if(password1.length() < 8)
		{
			usercheck.setFailed(true);
			usercheck.setpsswshort(true);
			usercheck.setDescription(usercheck.resultdescription + "The password should be at least 8 characters long.");
		}

		// the username must be unique (search for existing username)
		Myuser findusername = repo.findByName(name);
		if(findusername != null)
		{
			usercheck.setFailed(true);
			usercheck.setnameexists(true);
			usercheck.setDescription(usercheck.resultdescription + "The usename already exists. ");
		}

		// only one user can be created with one email (search for already existing emails)
		Myuser finduseremail = repo.findByEmail(email);
		if(finduseremail != null)
		{
			usercheck.setFailed(true);
			usercheck.setemailexists(true);
			usercheck.setDescription(usercheck.resultdescription + "This email has already been registered. ");
		}
		
		// a valid email address should contain one and only one "@" symbol		
		int count = StringUtils.countOccurrencesOf(email, "@");
		if(count != 1 || email.length() < 5)
		{
			usercheck.setFailed(true);
			usercheck.setemailvalid(true);
			usercheck.setDescription(usercheck.resultdescription + "Please enter a valid email address. ");
		}
		
		return usercheck;
	}
}