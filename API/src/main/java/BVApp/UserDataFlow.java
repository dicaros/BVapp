package BVApp;

import org.springframework.util.StringUtils;

public class UserDataFlow {
	public String name;
	public String password;
	public String confirmpassword;
	public String email;

	protected UserDataFlow() {}
	
	public UserDataFlow(String name, String password, String confirmpassword, String email) {
		this.name = name;
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

	public UserResponse saveUser(MyuserRepository repo)
	{	 
		UserResponse usercheck = this.validateRegistration(this.password, this.confirmpassword, this.name, this.email, repo);

		if(usercheck.checkfailed == false)
			{
				Myuser myuser = new Myuser(
						this.name, this.password, "ROLE_USER", this.email);
    					myuser = repo.save(myuser);	
			}

		return usercheck;
	}
	
	public UserResponse validateRegistration(String password1, String password2, String name, String email, MyuserRepository repo)
	{	
		UserResponse usercheck = new UserResponse(false, false, false, false, false, false, false, false, "");

		if(name == null || name.equals(""))
		{
			usercheck.setFailed(true);
			usercheck.setnameblank(true);
			usercheck.setDescription(usercheck.resultdescription + "The name field cannot be blank. ");
		}

		if(!password1.equals(password2))
		{
			usercheck.setFailed(true);
			usercheck.setpsswmismatch(true);
			usercheck.setDescription(usercheck.resultdescription + "The two passwords must match. ");
		}

		if(password1 == null || password1.equals(""))
		{
			usercheck.setFailed(true);
			usercheck.setpsswblank(true);
			usercheck.setDescription(usercheck.resultdescription + "The password field cannot be blank.");
		}

		if(password1.length() < 8)
		{
			usercheck.setFailed(true);
			usercheck.setpsswshort(true);
			usercheck.setDescription(usercheck.resultdescription + "The password should be at least 8 characters long.");
		}
		
		Myuser findusername = repo.findByName(name);
		if(findusername != null)
		{
			usercheck.setFailed(true);
			usercheck.setnameexists(true);
			usercheck.setDescription(usercheck.resultdescription + "The usename already exists. ");
		}

		Myuser finduseremail = repo.findByEmail(email);
		if(finduseremail != null)
		{
			usercheck.setFailed(true);
			usercheck.setemailexists(true);
			usercheck.setDescription(usercheck.resultdescription + "This email has already been registered. ");
		}
		
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