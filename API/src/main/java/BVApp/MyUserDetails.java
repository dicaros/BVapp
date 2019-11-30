package BVApp;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import net.minidev.json.annotate.JsonIgnore;

@Entity // declare that this class is meant for storage in a dbs table
public class MyUserDetails {

	private @Id @GeneratedValue Long id; // automatically generated primary ID
	private String firstName;
	private String lastName;
	private String phone;
	private String gpsx;
	private String gpsy;
	private Integer playedcount;
	private Integer noShowCount;
	

	private @Version @JsonIgnore Long version;

	private @ManyToOne Myuser myuser;

	private MyUserDetails() {}

	public MyUserDetails(String firstName, String lastName, String phone, String gpsx, String gpsy, Integer playedcount, Integer noShowCount, Myuser myuser) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.gpsx = gpsx;
		this.gpsy = gpsy;
		this.playedcount = playedcount;
		this.noShowCount = noShowCount;
		this.myuser = myuser;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		MyUserDetails myuserdetails = (MyUserDetails) o;
		return Objects.equals(id, myuserdetails.id) &&
			Objects.equals(firstName, myuserdetails.firstName) &&
			Objects.equals(lastName, myuserdetails.lastName) &&
			Objects.equals(phone, myuserdetails.phone) &&
			Objects.equals(gpsx, myuserdetails.gpsx) &&
			Objects.equals(gpsy, myuserdetails.gpsy) &&
			Objects.equals(playedcount, myuserdetails.playedcount) &&
			Objects.equals(noShowCount, myuserdetails.noShowCount) &&			
			Objects.equals(myuser, myuserdetails.myuser);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, firstName, lastName, phone, gpsx, gpsy, playedcount, noShowCount, myuser);
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getgpsx() {
		return gpsx;
	}

	public void setgpsx(String gpsx) {
		this.gpsx = gpsx;
	}

	public String getgpsy() {
		return gpsy;
	}

	public void setgpsy(String gpsy) {
		this.gpsy = gpsy;
	}

	public Integer getplayedcount() {
		return playedcount;
	}

	public void setplayedcount(Integer playedcount) {
		this.playedcount = playedcount;
	}

	public Integer getnoShowCount() {
		return noShowCount;
	}

	public void setnoShowCount(Integer noShowCount) {
		this.noShowCount = noShowCount;
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
		return "MyUserDetails{" +
			"id=" + id +
			", firstName='" + firstName + '\'' +
			", lastName='" + lastName + '\'' +
						", phone='" + phone + '\'' +
						", gpsx='" + gpsx + '\'' +
						", gpsy='" + gpsy + '\'' +
						", playedcount='" + playedcount + '\'' +
						", noShowCount='" + noShowCount + '\'' +		
			", version=" + version +
			", myuser=" + myuser +
			'}';
	}
}


