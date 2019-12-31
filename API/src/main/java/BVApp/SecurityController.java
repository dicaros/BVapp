package BVApp;

import java.security.Principal;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	    	    
}