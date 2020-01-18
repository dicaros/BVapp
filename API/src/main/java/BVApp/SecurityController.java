package BVApp;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
	public class SecurityController {
			
		@Autowired
		private ApplicationContext context;
	    
		// expose API endpoint for listing the participant for the selected game   
	    @RequestMapping(value = "/api/gameparticipantsget", method = RequestMethod.GET, produces = "application/json")
	    @ResponseBody
	    public List<Gameparticipant> list(@RequestParam Long id) {
	        GameparticipantRepository repo3 = context.getBean(GameparticipantRepository.class);
	        List<Gameparticipant> game = (List<Gameparticipant>) repo3.findAllByGameId(id);
	        return game;
	    }

		// expose API endpoint for joining a game
	    @RequestMapping(value = "/api/gameparticipantspost", method = RequestMethod.POST, produces = "application/json")
	    @ResponseBody
	    public Gamejoinerresponse signupforagame(@RequestBody Gamejoiner gamejoiner, HttpServletRequest httpServletRequest, Principal principal) { 

	    	MyuserRepository userrepo = context.getBean(MyuserRepository.class);
	    	GameRepository gamerepo = context.getBean(GameRepository.class);
	        GameparticipantRepository gamepartrepo = context.getBean(GameparticipantRepository.class);    	
	    	
	        // get current user from the logged user ID
	    	Myuser myuser = userrepo.findByName(principal.getName());
	    	// save the game participant	        
	        Gamejoinerresponse tryjoingame = gamejoiner.addPlayer(gamejoiner, myuser, gamerepo, gamepartrepo, 4);
	    	// print the result from the request to the console
	        System.out.println(tryjoingame.resultdescription); 
	    	// return the result from the request as API response	    	
	        return tryjoingame;
	        
	    }	
	    
		// expose API endpoint for creating a new game   
	    @RequestMapping(value = "/api/newgame", method = RequestMethod.POST, produces = "application/json")
	    // receive a user object from the API call and use it to create a new myuser and userdetails. Return the validation results
	    @ResponseBody
	    // get a game object with a post request 
	    public Gameresponse newgame(@RequestBody Gamecreate gamecreate, HttpServletRequest httpServletRequest, Principal principal) { 
	    	// get the current user repository info from the context
	    	MyuserRepository userrepo = context.getBean(MyuserRepository.class);
	    	// get the current user object
	    	Myuser myuser = userrepo.findByName(principal.getName());
	    	
	    	GameRepository gamerepo = context.getBean(GameRepository.class);
	    	
	    	SportCenterRepository sportrepo = context.getBean(SportCenterRepository.class);
	    	Sportcenter sportcenter = sportrepo.findById(gamecreate.getSportcenterid()).get();
	    	
	    	Gameresponse response = gamecreate.createGame(gamecreate, myuser, sportcenter, gamerepo);			    	

	    	return response;
	    }

		// expose API endpoint for signing a new user. This resource doesn't require login   
	    @RequestMapping(value = "/signup", method = RequestMethod.POST, produces = "application/json")
	    // receive a user object from the API call and use it to create a new myuser and userdetails. Return the validation results
	    @ResponseBody
	    public UserResponse signup(@RequestBody UserDataFlow user, HttpServletRequest httpServletRequest) { 
	    	// get the current user and userdetails repository info from the context
	    	MyuserRepository repo = context.getBean(MyuserRepository.class);
	    	MyUserDetailsRepository repo2 = context.getBean(MyUserDetailsRepository.class);
	    	// create a new user object with the received information 
	    	UserDataFlow newuser = new UserDataFlow(user.name, user.firstname, user.lastname, user.password, user.confirmpassword, user.email);	    	
	    	// save the user in myuser and myuserdetail
	    	UserResponse trysaveuser = newuser.saveUser(repo, repo2);
	    	// print the result from the request to the console
	    	System.out.println(trysaveuser.resultdescription); 
	    	// return the result from the request as API response	    	
	    	return trysaveuser;
	    }		

		// expose API endpoint for extracting a single game   
	    @RequestMapping(value = "/api/singlegame", method = RequestMethod.GET, produces = "application/json")
	    @ResponseBody
	    public Optional<Game> singlegame(@RequestParam Long id) {
	        GameRepository repo4 = context.getBean(GameRepository.class);
	        Optional<Game> game = repo4.findById(id);
	        return game;
	    }
	    
		// get the username. Expose a username API endpoint
	    @RequestMapping(value = "/username", method = RequestMethod.GET)
	    @ResponseBody
			// return a string with the username
	    public String currentUserName(Principal principal) {
	        return principal.getName();
	    }  
	    
}