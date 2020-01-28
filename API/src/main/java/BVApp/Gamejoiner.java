package BVApp;

import java.util.Calendar;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

// this class is used to validate, sort and add players to an existing game and return the result of the validation

public class Gamejoiner {
		public Boolean noshow;
		public Long gameid;

		protected Gamejoiner() {}
		
		public Gamejoiner(Boolean noshow, Long gameid) {
			this.noshow = noshow;
			this.gameid = gameid;
		}
	
		public Boolean getNoshow() {
			return noshow;
		}

		public void setNoshow(Boolean noshow) {
			this.noshow = noshow;
		}

		public Long getGameid() {
			return gameid;
		}

		public void setGame(Long gameid) {
			this.gameid = gameid;
		}
		
		public Gamejoinerresponse addPlayer(Gamejoiner gamejoiner, Myuser user, GameRepository gamerepo, GameparticipantRepository gamepartrepo, int maxplayers) 
		
		{
		
	    	// get selected game based on game ID
	        Optional<Game> game = gamerepo.findById(gamejoiner.gameid);	        
	        Game singlegame = game.get();
	        
	        // list with all game participants for selected game
	        List<Gameparticipant> players = (List<Gameparticipant>) gamepartrepo.findAllByGameId(gamejoiner.gameid);

	    	// create an empty response object	    	
	    	Gamejoinerresponse tryjoingame = new Gamejoinerresponse(false,false,false,false, "");	    	
    	
	    	// check for number of participants:
			if(players.size() == maxplayers)
			{
				tryjoingame.setFailed(true);
				tryjoingame.setgameisfull(true);
				tryjoingame.setDescription(tryjoingame.resultdescription + "This game is full. ");
			}

			//get current date and time in sql format
			java.sql.Date nowdate = new java.sql.Date(Calendar.getInstance().getTime().getTime());
			java.sql.Time nowtime = new java.sql.Time(Calendar.getInstance().getTime().getTime());
			
			//check that game is in the past
				// game is before today
			if(singlegame.getGamedate().toLocalDate().compareTo(nowdate.toLocalDate()) < 0 ||
					// game is today but time is past 
					(singlegame.getGamedate().toLocalDate().equals(nowdate.toLocalDate()) && singlegame.getGametime().toLocalTime().compareTo(nowtime.toLocalTime()) < 0))
					{
				
						tryjoingame.setFailed(true);
						tryjoingame.setgameispast(true);
						tryjoingame.setDescription(tryjoingame.resultdescription + "This game is in the past. ");
					}
			    			
			//check if the user already signed in
			Iterator<Gameparticipant> playeriterator = players.iterator();
			while (playeriterator.hasNext()) {
					if(playeriterator.next().getMyuser() == user)
					{
						tryjoingame.setFailed(true);
						tryjoingame.setalreadysigned(true);
						tryjoingame.setDescription(tryjoingame.resultdescription + "You already signed for this game! ");
					}						
			}			
			
			int found = 0;
			int notfound = 0;
			
			int i = 0;
			int y = 0;
			
			// assign lower available player number to the current player
			for(y = 1; y <= maxplayers ; y++)
				{
				for(i=0; i < players.size() ; i++)
					{											
							if(y == players.get(i).getPlayernumber())
							{
								found = 1+found;
							}
					}
					if (found < y)
					{
						notfound = y;
						break;
					}
				}
			
				if(!tryjoingame.getFailed())
						{		
													
		    	// create the current instance of gameparticipant
		        Gameparticipant gameparticipant = new Gameparticipant(notfound, false, user, game.get());
				
		        // if this is the last gameparticipant set game as full
		        if(notfound == maxplayers)
		        {
		        	singlegame.setGameisfull(true);
		        	singlegame = gamerepo.save(singlegame);
		        }
				// store the game participant in the game participant list
		        gameparticipant = gamepartrepo.save(gameparticipant);
		        
						};
						
		        System.out.println(tryjoingame.resultdescription);    	
	    	
		        
	    	return tryjoingame;
			
		}
		
}
