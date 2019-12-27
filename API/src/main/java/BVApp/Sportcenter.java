package BVApp;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Version;

import net.minidev.json.annotate.JsonIgnore;

@Entity // declare that this class is meant for storage in a dbs table
public class Sportcenter {

	private @Id @GeneratedValue Long id; // automatically generated primary ID
	private String name;
	private String street;
	private String city;
	private String postcode;
	private String country;
	private Double gpsx;
	private Double gpsy;
	private String website;
	
	private @Version @JsonIgnore Long version;

	private Sportcenter() {}
	
	public Sportcenter(String name,	String street,	String city, String postcode, String country, Double gpsx, Double gpsy,	String website) 
	{
		this.name = name;
		this.street = street;
		this.city = city;
		this.postcode = postcode;
		this.country = country;
		this.gpsx = gpsx; 
		this.gpsy = gpsy;
		this.website = website;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Sportcenter sportcenter = (Sportcenter) o;
		return Objects.equals(id, sportcenter.id) &&
			Objects.equals(name, sportcenter.name) &&
			Objects.equals(street, sportcenter.street) &&
			Objects.equals(city, sportcenter.city) &&			
			Objects.equals(postcode, sportcenter.postcode) &&
			Objects.equals(country, sportcenter.country) &&
			Objects.equals(gpsx, sportcenter.gpsx) &&
			Objects.equals(gpsy, sportcenter.gpsy) &&
			Objects.equals(website, sportcenter.website);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, name, street, city, postcode, country, gpsx, gpsy, website);
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
	
	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}
	
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}	
	
	public String getPostcode() {
		return postcode;
	}

	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}	
	
	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}	
	
	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
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
	
	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

	@Override
	public String toString() {
		return "Employee{" +
			"id=" + id +
			", name='" + name + '\'' +
			", street='" + street + '\'' +
			", city='" + city + '\'' +
			", postcode='" + postcode + '\'' +
			", country='" + country + '\'' +
			", gpsx='" + gpsx + '\'' +
			", gpsy='" + gpsy + '\'' +			
			", website='" + website +

			'}';
	}
}