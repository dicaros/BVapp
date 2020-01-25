package BVApp;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

// Users that are signed up to a specific game

@Entity // declare that this class is meant for storage in a dbs table
public class Gameparticipant {

	private @Id @GeneratedValue Long id; // automatically generated primary ID
	private Integer playernumber;
	private Boolean noshow;
	private @ManyToOne Myuser myuser;
	private @ManyToOne Game game;
	
	@SuppressWarnings("unused")
	private Gameparticipant() {}
	
	public Gameparticipant(Integer playernumber, Boolean noshow, Myuser myuser, Game game) 
	{
		this.playernumber = playernumber;
		this.noshow = noshow;
		this.game = game;
		this.myuser = myuser;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Gameparticipant gameparticipant = (Gameparticipant) o;
		return Objects.equals(id, gameparticipant.id) &&
			Objects.equals(playernumber, gameparticipant.playernumber) &&
			Objects.equals(noshow, gameparticipant.noshow) &&
			Objects.equals(game, gameparticipant.game) &&
			Objects.equals(myuser, gameparticipant.myuser);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, playernumber, noshow, game, myuser);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getPlayernumber() {
		return playernumber;
	}

	public void setPlayernumber(Integer playernumber) {
		this.playernumber = playernumber;
	}

	public Boolean getNoshow() {
		return noshow;
	}

	public void setNoshow(Boolean noshow) {
		this.noshow = noshow;
	}

	public Game getGame() {
		return game;
	}

	public void setGame(Game game) {
		this.game = game;
	}
	
	public Myuser getMyuser() {
		return myuser;
	}

	public void setMyuser(Myuser myuser) {
		this.myuser = myuser;
	}

}