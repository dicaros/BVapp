package BVApp;

import java.security.Principal;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
	public class SecurityController {


		
	    @RequestMapping(value = "/username", method = RequestMethod.GET)
	    @ResponseBody
	    public String currentUserName(Principal principal) {
	        return principal.getName();
	    }
	    
	    @RequestMapping(method = RequestMethod.POST, value = "/signup")
	    public String signup(Model uiModel,
	                                        @RequestParam String name
	                                        
/*	                                        @RequestParam String password,*/
/*	                                        @RequestParam boolean auth,*/
	                                        ) {	    	  	
	    	
	    	return name;

	    }

}