package BVApp;

import java.sql.Date;
import java.sql.Time;
import java.util.Calendar;
import java.util.Objects;

// this class is needed to validate a game before passing it to the Game entity and return a response from the validation

public class Gamecreate {

	private Integer kurt;
	private String priceperperson;
	private Boolean isprivate;
	private Date gamedate;
	private Time gametime;
	private Boolean gameisfull;
	private Boolean gameispast;
	private Boolean gameiscancelled;
	private String description;
	private Long sportcenterid;
	
	@SuppressWarnings("unused")
	private Gamecreate() {}
	
	public Gamecreate(Long sportcenterid,	Integer kurt, String priceperperson,	Boolean isprivate,	Date gamedate,	Time gametime,	Boolean gameisfull,	Boolean gameispast,	Boolean gameiscancelled, String description) 
	{
		this.sportcenterid = sportcenterid;
		this.kurt = kurt;
		this.priceperperson = priceperperson;
		this.isprivate = isprivate;
		this.gamedate = gamedate;
		this.gametime = gametime;
		this.gameisfull = gameisfull; 
		this.gameispast = gameispast;
		this.gameiscancelled = gameiscancelled;
		this.description = description;

	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Gamecreate game = (Gamecreate) o;
		return Objects.equals(sportcenterid, game.sportcenterid) &&
			Objects.equals(kurt, game.kurt) &&
			Objects.equals(priceperperson, game.priceperperson) &&
			Objects.equals(isprivate, game.isprivate) &&			
			Objects.equals(gamedate, game.gamedate) &&
			Objects.equals(gametime, game.gametime) &&
			Objects.equals(gameisfull, game.gameisfull) &&
			Objects.equals(gameispast, game.gameispast) &&
			Objects.equals(description, game.description);
	}

	@Override
	public int hashCode() {

		return Objects.hash(kurt, sportcenterid, priceperperson, isprivate, gamedate, gametime, gameisfull, gameispast, description);
	}

	public Long getSportcenterid() {
		return sportcenterid;
	}

	public void setSportcenterid(Long sportcenterid) {
		this.sportcenterid = sportcenterid;
	}
	
	public Integer getKurt() {
		return kurt;
	}

	public void setKurt(Integer kurt) {
		this.kurt = kurt;
	}
	
	public String getPriceperperson() {
		return priceperperson;
	}

	public void setPriceperperson(String priceperperson) {
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
	
	public Boolean getGameiscancelled() {
		return gameiscancelled;
	}

	public void setGameiscancelled(Boolean gameiscancelled) {
		this.gameiscancelled = gameiscancelled;
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


	@Override
	public String toString() {
		return "Employee{" +
			", kurt='" + kurt + '\'' +
			", priceperperson='" + priceperperson + '\'' +
			", isprivate='" + isprivate + '\'' +
			", gamedate='" + gamedate + '\'' +
			", gametime='" + gametime + '\'' +
			", gameisfull='" + gameispast + '\'' +
			", gameispast='" + gameispast + '\'' +			
			", gameiscancelled='" + gameiscancelled + '\'' +
			", description='" + description + '\'' +
			'}';
	}
	
	Gameresponse createGame(Gamecreate gamecreate, Myuser myuser, Sportcenter sportcenter, GameRepository gamerepo) {

		// create a new empty response
		Gameresponse response = new Gameresponse (false, false, false, false, false, "");
		
    	// checks if a valid Sportcenter value has been supplied, updates the gameresponse otherwise 
    	if(gamecreate.sportcenterid < 1)
    		{
					response.setFailed(true);
					response.setsportcenternull(true);
					response.setDescription(response.resultdescription + "Sportcenter must be specified. ");
    			}
    
		//get current date and time in sql format
		java.sql.Date nowdate = new java.sql.Date(Calendar.getInstance().getTime().getTime());
		java.sql.Time nowtime = new java.sql.Time(Calendar.getInstance().getTime().getTime());
    	
    	// checks if a future date/time value has been input, updates the gameresponse otherwise
		// game is before today
	if(gamecreate.getGamedate().toLocalDate().compareTo(nowdate.toLocalDate()) < 0 ||
			// game is today but time is past 
			(gamecreate.getGamedate().toLocalDate().equals(nowdate.toLocalDate()) && gamecreate.getGametime().toLocalTime().compareTo(nowtime.toLocalTime()) < 0))
			{	
				response.setFailed(true);
				response.setdatepast(true);
				response.setDescription(response.resultdescription + "The game is in the past. ");
			}

	// checks that a date/time value has been input, updates the gameresponse otherwise
		if(gamecreate.gamedate == null || gamecreate.gametime == null)
			{
				response.setFailed(true);
				response.settimenull(true);
				response.setDescription(response.resultdescription + "You must specify a date. ");
				}

    	// checks that a price value has been provided, updates the gameresponse otherwise
		if(!response.checkisint(gamecreate.priceperperson) || gamecreate.priceperperson == "")
		{
			response.setFailed(true);
			response.setpriceinvalid(true);
			response.setDescription(response.resultdescription + "A valid price must be entered. ");
		}
		
    	// if all checks are successful the new game is created
    	if(!response.checkfailed)
    			{
        				Game newgame = new Game(sportcenter, gamecreate.getKurt(), (double) Integer.parseInt(gamecreate.getPriceperperson()), gamecreate.getIsprivate(),     			
        						gamecreate.getGamedate(), gamecreate.getGametime(), false, false, false, gamecreate.getDescription(), myuser);
    					gamerepo.save(newgame);    					
    			}

		return response;
			}
	
}