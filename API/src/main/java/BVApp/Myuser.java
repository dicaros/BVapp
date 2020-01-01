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
	private @JsonIgnore String password;
	private String roles;
	private String email;
	private String firstname;
	private String lastname;

	public void setPassword(String password) {
		this.password = PASSWORD_ENCODER.encode(password); // encrypt password
	}

	protected Myuser() {}

	public Myuser(String name, String password, String roles, String  email, String firstname, String lastname) {

		this.name = name;
		this.setPassword(password);
		this.roles = roles;
		this.email = email;
		this.firstname = firstname;
		this.lastname = lastname;		
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Myuser myuser = (Myuser) o;
		return Objects.equals(id, myuser.id) &&
			Objects.equals(name, myuser.name) &&
			Objects.equals(password, myuser.password) &&
			Objects.equals(roles, myuser.roles) &&
			Objects.equals(email, myuser.email) &&
			Objects.equals(firstname, myuser.firstname) &&
			Objects.equals(lastname, myuser.lastname);
	}

	@Override
	public int hashCode() {

		int result = Objects.hash(id, name, password, email, firstname, lastname);
		result = 31 * result + Objects.hashCode(roles);
		return result;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstname;
	}

	public void setFirstName(String firstName) {
		this.firstname = firstName;
	}

	public String getLastName() {
		return lastname;
	}

	public void setLastName(String lastName) {
		this.lastname = lastName;
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
			", firstName='" + firstname + '\'' +
			", lastName='" + lastname + '\'' +
			", name='" + name + '\'' +
			", roles=" + roles +
			", email=" + email +
			'}';
	}
}