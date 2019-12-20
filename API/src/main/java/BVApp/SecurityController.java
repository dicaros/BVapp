package BVApp;

import java.security.Principal;


import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
	public class SecurityController {


		
	    @RequestMapping(value = "/username", method = RequestMethod.GET)
	    @ResponseBody
	    public String currentUserName(Principal principal) {
	        return principal.getName();
	    }
	    
	    @RequestMapping(value = "/signup", method = RequestMethod.POST)
	    public UserDataFlow signup(@RequestBody UserDataFlow userdata) throws Exception {	    	
	    	
	    	return null;

	    }
	    
}