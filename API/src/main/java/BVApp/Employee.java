package BVApp;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import net.minidev.json.annotate.JsonIgnore;

@Entity // declare that this class is meant for storage in a dbs table
public class Employee {

	private @Id @GeneratedValue Long id; // automatically generated primary ID
	private String firstName;
	private String lastName;
	private String description;

	private @Version @JsonIgnore Long version;

	private @ManyToOne Myuser myuser;

	private Employee() {}

	public Employee(String firstName, String lastName, String description, Myuser myuser) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.description = description;
		this.myuser = myuser;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Employee employee = (Employee) o;
		return Objects.equals(id, employee.id) &&
			Objects.equals(firstName, employee.firstName) &&
			Objects.equals(lastName, employee.lastName) &&
			Objects.equals(description, employee.description) &&
			Objects.equals(version, employee.version) &&
			Objects.equals(myuser, employee.myuser);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, firstName, lastName, description, version, myuser);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

	public Myuser getMyuser() {
		return myuser;
	}

	public void setMyuser(Myuser myuser) {
		this.myuser = myuser;
	}

	@Override
	public String toString() {
		return "Employee{" +
			"id=" + id +
			", firstName='" + firstName + '\'' +
			", lastName='" + lastName + '\'' +
			", description='" + description + '\'' +
			", version=" + version +
			", myuser=" + myuser +
			'}';
	}
}