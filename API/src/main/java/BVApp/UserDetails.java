package BVApp;

	public class UserDetails {
		public String phone;
	
	protected UserDetails() {}
	
	public UserDetails(String phone) 
	{
		this.phone= phone;
	}    		
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getPhone() {
		return phone;
	}
}
