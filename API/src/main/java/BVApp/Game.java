package BVApp;

import java.sql.Date;
import java.sql.Time;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import net.minidev.json.annotate.JsonIgnore;

@Entity // declare that this class is meant for storage in a dbs table
public class Game {

	private @Id @GeneratedValue Long id; // automatically generated primary ID
	private Long sportcenterid;
	private Double priceperperson;
	private Boolean isprivate;
	private Date gamedate;
	private Time gametime;
	private Boolean gameisfull;
	private Boolean gameispast;
	private String description;
	
	private @Version @JsonIgnore Long version;
	private @ManyToOne Myuser myuser;

	private Game() {}
	

	public Game(Long sportcenterid,	Double priceperperson,	Boolean isprivate,	Date gamedate,	Time gametime,	Boolean gameisfull,	Boolean gameispast,	String description, Myuser myuser) 
	{
		this.sportcenterid = sportcenterid;
		this.priceperperson = priceperperson;
		this.isprivate = isprivate;
		this.gamedate = gamedate;
		this.gametime = gametime;
		this.gameisfull = gameisfull; 
		this.gameispast = gameispast;
		this.description = description;
		this.myuser = myuser;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Game game = (Game) o;
		return Objects.equals(id, game.id) &&
			Objects.equals(sportcenterid, game.sportcenterid) &&
			Objects.equals(priceperperson, game.priceperperson) &&
			Objects.equals(isprivate, game.isprivate) &&			
			Objects.equals(gamedate, game.gamedate) &&
			Objects.equals(gametime, game.gametime) &&
			Objects.equals(gameisfull, game.gameisfull) &&
			Objects.equals(gameispast, game.gameispast) &&
			Objects.equals(description, game.description) &&
			Objects.equals(version, game.version) &&
			Objects.equals(myuser, game.myuser);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, sportcenterid, priceperperson, isprivate, gamedate, gametime, gameisfull, gameispast, description, version, myuser);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getSportcenter() {
		return sportcenterid;
	}

	public void setSportcenter(Long sportcenterid) {
		this.sportcenterid = sportcenterid;
	}
	
	public Double getPriceperperson() {
		return priceperperson;
	}

	public void setPriceperperson(Double priceperperson) {
		this.priceperperson = priceperperson;
	}
	
	public Boolean getIsprivate() {
		return isprivate;
	}

	public void setIsprivate(Boolean isprivate) {
		this.isprivate = isprivate;
	}

	public Boolean getGameispast() {
		return gameispast;
	}

	public void setGameispast(Boolean gameispast) {
		this.gameispast = gameispast;
	}

	public Boolean getGameisfull() {
		return gameisfull;
	}

	public void setGameisfull(Boolean gameisfull) {
		this.gameisfull = gameisfull;
	}
	
	public Date getGamedate() {
		return gamedate;
	}

	public void setGamedate(Date gamedate) {
		this.gamedate = gamedate;
	}

	public Time getGametime() {
		return gametime;
	}

	public void setGametime(Time gametime) {
		this.gametime = gametime;
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
			", sportcenterid='" + sportcenterid + '\'' +
			", priceperperson='" + priceperperson + '\'' +
			", isprivate='" + isprivate + '\'' +
			", gamedate='" + gamedate + '\'' +
			", gametime='" + gametime + '\'' +
			", gameisfull='" + gameispast + '\'' +
			", gameispast='" + gameispast + '\'' +			
			", description='" + description + '\'' +
			", version=" + version +
			", myuser=" + myuser +
			'}';
	}
}