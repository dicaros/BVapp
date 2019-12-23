package BVApp;


public class UserDataFlow {
	public String name;
	public String password;
	public String confirmpassword;

	protected UserDataFlow() {}
	
	public UserDataFlow(String name, String password, String confirmpassword) {
		this.name = name;
		this.password = password;
		this.confirmpassword = confirmpassword;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
		UserResponse usercheck = this.validateRegistration(this.password, this.confirmpassword);

		if(usercheck.checkfailed == false)
			{
				Myuser myuser = new Myuser(
						this.name, this.password, "ROLE_USER");
    					myuser = repo.save(myuser);	
			}

		return usercheck;
	}
	
	public UserResponse validateRegistration(String password1, String password2)
	{	
		UserResponse usercheck = new UserResponse(false, false, false, "Registration OK");
		
		
		
		if(!password1.equals(password2))
		{
			usercheck.setFailed(true);
			usercheck.setpsswmismatch(true);
			usercheck.setDescription("The two passwords must match. ");
		}
		if(password1 == null || password2 == null || password1.equals("") || password2.equals(""))
		{
			usercheck.setFailed(true);
			usercheck.setpsswblank(true);
			usercheck.setDescription(usercheck.resultdescription + "The password field cannot be blank.");
		}
		
		return usercheck;
	}
}
