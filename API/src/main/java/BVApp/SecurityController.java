package BVApp;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.data.repository.Repository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
	public class SecurityController {
			
		@Autowired
		private ApplicationContext context;
	
	    @RequestMapping(value = "/username", method = RequestMethod.GET)
	    @ResponseBody
	    public String currentUserName(Principal principal) {
	        return principal.getName();
	    }  
	
	    @RequestMapping(value = "/signup", method = RequestMethod.POST, produces = "application/json")
	    @ResponseBody
	    public UserResponse signup(/*Model uiModel,*/
	    		@RequestBody UserDataFlow user, HttpServletRequest httpServletRequest) { 

	    	MyuserRepository repo = context.getBean(MyuserRepository.class);
	    	MyUserDetailsRepository repo2 = context.getBean(MyUserDetailsRepository.class);
	    	
	    	UserDataFlow newuser = new UserDataFlow(user.name, user.firstname, user.lastname, user.password, user.confirmpassword, user.email);	    	
	    	UserResponse trysaveuser = newuser.saveUser(repo, repo2);
	    		    	
	    	System.out.println(trysaveuser.resultdescription); 
	    	
	    	return trysaveuser;
	    }	
	    
	    
	    @RequestMapping(value = "/api/gameparticipantspost", method = RequestMethod.POST, produces = "application/json")
	    @ResponseBody
	    public Gamejoinerresponse signupforagame(@RequestBody Gamejoiner gamejoiner, HttpServletRequest httpServletRequest, Principal principal) { 

	    	MyuserRepository userrepo = context.getBean(MyuserRepository.class);
	    	GameRepository gamerepo = context.getBean(GameRepository.class);
	        GameparticipantRepository gamepartrepo = context.getBean(GameparticipantRepository.class);    	
	    	
	        // get current user from the logged user ID
	    	Myuser myuser = userrepo.findByName(principal.getName());
	        
	        Gamejoinerresponse tryjoingame = gamejoiner.addPlayer(gamejoiner, myuser, gamerepo, gamepartrepo, 4);
	        
	        return tryjoingame;
	        
	    }	
	    
	    
	    @RequestMapping(value = "/api/gameparticipantsget", method = RequestMethod.GET, produces = "application/json")
	    @ResponseBody
	    public List<Gameparticipant> list(@RequestParam Long id) {
	        GameparticipantRepository repo3 = context.getBean(GameparticipantRepository.class);
	        List<Gameparticipant> game = (List<Gameparticipant>) repo3.findAllByGameId(id);
	        return game;
	    }

	    @RequestMapping(value = "/api/game2", method = RequestMethod.GET, produces = "application/json")
	    @ResponseBody
	    public Optional<Game> singlegame(@RequestParam Long id) {
	        GameRepository repo4 = context.getBean(GameRepository.class);
	        Optional<Game> game = repo4.findById(id);
	        return game;
	    }

	    	    
}