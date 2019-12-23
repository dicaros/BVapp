package BVApp;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Version;
import net.minidev.json.annotate.JsonIgnore;

@Entity // declare that this class is meant for storage in a dbs table
public class MyUserDetail {

	private @Id @GeneratedValue Long id; // automatically generated primary ID
	private String firstname;
	private String lastname;
	private String phone;
	private Double gpsx;
	private Double gpsy;
	private Integer playedcount;
	private Integer noshowcount;
	

	private @Version @JsonIgnore Long version;

	private @OneToOne Myuser myuser;

	private MyUserDetail() {}

	public MyUserDetail(String firstname, String lastname, String phone, Double gpsx, Double gpsy, Integer playedcount, Integer noshowcount, Myuser myuser) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.phone = phone;
		this.gpsx = gpsx;
		this.gpsy = gpsy;
		this.playedcount = playedcount;
		this.noshowcount = noshowcount;
		this.myuser = myuser;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		MyUserDetail myuserdetails = (MyUserDetail) o;
		return Objects.equals(id, myuserdetails.id) &&
			Objects.equals(firstname, myuserdetails.firstname) &&
			Objects.equals(lastname, myuserdetails.lastname) &&
			Objects.equals(phone, myuserdetails.phone) &&
			Objects.equals(gpsx, myuserdetails.gpsx) &&
			Objects.equals(gpsy, myuserdetails.gpsy) &&
			Objects.equals(playedcount, myuserdetails.playedcount) &&
			Objects.equals(noshowcount, myuserdetails.noshowcount) &&			
			Objects.equals(myuser, myuserdetails.myuser);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, firstname, lastname, phone, gpsx, gpsy, playedcount, noshowcount, myuser);
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Double getgpsx() {
		return gpsx;
	}

	public void setgpsx(Double gpsx) {
		this.gpsx = gpsx;
	}

	public Double getgpsy() {
		return gpsy;
	}

	public void setgpsy(Double gpsy) {
		this.gpsy = gpsy;
	}

	public Integer getplayedcount() {
		return playedcount;
	}

	public void setplayedcount(Integer playedcount) {
		this.playedcount = playedcount;
	}

	public Integer getnoShowCount() {
		return noshowcount;
	}

	public void setnoShowCount(Integer noShowCount) {
		this.noshowcount = noShowCount;
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
			", firstName='" + firstname + '\'' +
			", lastName='" + lastname + '\'' +
						", phone='" + phone + '\'' +
						", gpsx='" + gpsx + '\'' +
						", gpsy='" + gpsy + '\'' +
						", playedcount='" + playedcount + '\'' +
						", noShowCount='" + noshowcount + '\'' +		
			", version=" + version +
			", myuser=" + myuser +
			'}';
	}
}