package BVApp;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Myuser {

	public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();
	private @Id @GeneratedValue Long id;
	
	private String name;
//	private String firstname;
//	private String lastname;
//	private String emailaddress;
	private @JsonIgnore String password;
	private String roles;

	public void setPassword(String password) {
		this.password = PASSWORD_ENCODER.encode(password); // encrypt password
	}

	protected Myuser() {}

	public Myuser(String name, String password, String roles) {

		this.name = name;
		this.setPassword(password);
		this.roles = roles;
		
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Myuser myuser = (Myuser) o;
		return Objects.equals(id, myuser.id) &&
			Objects.equals(name, myuser.name) &&
//			Objects.equals(firstname, myuser.firstname) &&
//			Objects.equals(lastname, myuser.lastname) &&
//			Objects.equals(emailaddress, myuser.emailaddress) &&
			Objects.equals(password, myuser.password) &&
			Objects.equals(roles, myuser.roles);
	}

	@Override
	public int hashCode() {

		int result = Objects.hash(id, name, password);
		result = 31 * result + Objects.hashCode(roles);
		return result;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	public String getFirstname() {
//		return firstname;
//	}

//	public void setFirstname(String firstname) {
//		this.firstname = firstname;
//	}
	
//	public String getLastname() {
//		return lastname;
//	}

//	public void setLastname(String lastname) {
//		this.lastname = lastname;
//	}

	
//	public String getEmailaddress() {
//		return emailaddress;
//	}

//	public void setEmailaddress(String emailaddress) {
//		this.emailaddress = emailaddress;
//	}
	
	public String getPassword() {
		return password;
	}

	public String getRoles() {
		return roles;
	}

	public void setRoles(String roles) {
		this.roles = roles;
	}

	@Override
	public String toString() {
		return "Myuser{" +
			"id=" + id +
			", name='" + name + '\'' +
			", roles=" + roles +
			'}';
	}
}