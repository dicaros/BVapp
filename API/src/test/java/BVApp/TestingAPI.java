package BVApp;



import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;

import static org.junit.Assert.assertEquals;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.authenticated;
import static org.springframework.security.test.web.servlet.response.SecurityMockMvcResultMatchers.unauthenticated;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;



@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureRestDocs(outputDir = "target/snippets")
@RunWith(SpringJUnit4ClassRunner.class)
public class TestingAPI {

    @Autowired
    private MockMvc mockMvc;

    // test access to API without credentials
    @Test
    public void accessNoCredentials() throws Exception {
        this.mockMvc.perform(get("/"))
                .andExpect(status().isUnauthorized());
    }

    // test access to API with credentials
    @Test
    public void loginUser() throws Exception {
        this.mockMvc.perform(get("/").with(httpBasic("pareto", "password")))
                .andExpect(authenticated());
//                .andDo(document("home", 
                        //requestFields(fieldWithPath("id").description("The id of the input")                        
                        //)));
    }

    // test response when invalid credentials are provided
    @Test
    public void loginInvalidUser() throws Exception {
        MvcResult result = this.mockMvc
        		.perform(get("/").with(httpBasic("invalid", "invalid")))
                .andExpect(unauthenticated())
                .andExpect(status().is4xxClientError())
                .andReturn();
        		assertEquals(result.getResponse().getStatus(), 401);
    }


    // Successful user registration
	@Test
	public void registerCorrect() throws Exception {
			this.registerUser();
			this.deleteCurrentUser();
	}
	
    // User registration validation error 1
	@Test
	public void registerWrong_1() throws Exception {
		// create a user
		this.registerUser();
		// create a duplicateuser with incorrect data
		UserDataFlow newuser = new UserDataFlow("mockusr", "mock", "user", "pass", "pss123", "email@email.com");			
		//MvcResult result = 
				this.mockMvc
	        		.perform(post("/signup")
	                .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(newuser)))
	        		.andExpect(status().isOk())
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswmismatch").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswblank").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswshort").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.nameblank").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.nameexists").value(true))
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.emailexists").value(true))
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.emailvalid").value(false));
				this.deleteCurrentUser();
	}

	
    // User registration validation error 2
	@Test
	public void registerWrong_2() throws Exception {
		UserDataFlow newuser = new UserDataFlow("", "", "", "", "", "email");			
		//MvcResult result = 
				this.mockMvc
	        		.perform(post("/signup")
	                .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(newuser)))
	        		.andExpect(status().isOk())
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswmismatch").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswblank").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswshort").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.nameblank").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.nameexists").value(false))
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.emailexists").value(false))
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.emailvalid").value(true));
	}
	
    // User registration validation error 3
	@Test
	public void registerWrong_3() throws Exception {
		UserDataFlow newuser = new UserDataFlow("", "", "",
									/*password1*/ "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890"
									, "password2", "");			
		//MvcResult result = 
				this.mockMvc
	        		.perform(post("/signup")
	                .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(newuser)))
	        		.andExpect(status().isOk())
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswmismatch").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswblank").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.psswshort").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.nameblank").value(true)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.nameexists").value(false))
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.emailexists").value(false))
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.emailvalid").value(true));
	
	}

	
    // Create game
	@Test
	public void createGameSuccess() throws Exception {

				this.registerUser();
		
				java.sql.Date testdate = java.sql.Date.valueOf( "2099-03-31" );
	    		java.sql.Time testtime = java.sql.Time.valueOf( "23:59:59" );
			Gamecreate newgame = new Gamecreate(/*sportcenter*/(long) 1,	/*kurtn*/2, 
											/*priceperperson*/"150",	/*isprivate*/false,	
											/*gamedate*/testdate,	/*gametime*/testtime,	
											/*gameisfull*/ false,	/*gameispast*/ false,	
											/*gameiscancelled*/ false, "This is the description for this test game");			
		//MvcResult result = 
				this.mockMvc
	        		.perform(post("/api/newgame").with(httpBasic("mockusr", "password"))
	                .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(newgame)))
	        		.andExpect(status().isOk())
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.sportcenternull").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.datepast").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.timenull").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.priceinvalid").value(false));
	
				this.deleteCurrentUser();				
	}   

    // Sign for a game - success
	@Test
	public void joinGame_success() throws Exception {

				this.registerUser();
		
		//MvcResult result = 
			Gamejoiner player = new Gamejoiner(false, (long) 347);
			
			this.mockMvc
	        		.perform(post("/api/gameparticipantspost").with(httpBasic("mockusr", "password"))
	                .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(player)))
	        		.andExpect(status().isOk())
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.gameisfull").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.alreadysigned").value(false)) 	        
	        		.andExpect(MockMvcResultMatchers.jsonPath("$.gameispast").value(false)); 	        
			this.deleteCurrentUser();
				
	}

    // Sign for a game - player already signed
	@Test
	public void joinGame_duplicate() throws Exception {

				this.registerUser();
		//MvcResult result = 
			Gamejoiner player = new Gamejoiner(false, (long) 347);
			
			this.mockMvc
	        		.perform(post("/api/gameparticipantspost").with(httpBasic("mockusr", "password"))
	                .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(player)))
	        		.andExpect(status().isOk());
			this.mockMvc
	    		.perform(post("/api/gameparticipantspost").with(httpBasic("mockusr", "password"))
	            .contentType(MediaType.APPLICATION_JSON)
	            .content(asJsonString(player)))
	    		.andExpect(status().isOk())
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(true)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.gameisfull").value(false)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.alreadysigned").value(true)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.gameispast").value(false)); 			
			this.deleteCurrentUser();
				
	}

    // Sign for a game - game is already full
	@Test
	public void joinGame_gameisfull() throws Exception {

				this.registerUser();
		//MvcResult result = 
			Gamejoiner player = new Gamejoiner(false, (long) 414);
			
			this.mockMvc
	    		.perform(post("/api/gameparticipantspost").with(httpBasic("mockusr", "password"))
	            .contentType(MediaType.APPLICATION_JSON)
	            .content(asJsonString(player)))
	    		.andExpect(status().isOk())
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(true)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.gameisfull").value(true)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.alreadysigned").value(false)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.gameispast").value(false)); 			
			this.deleteCurrentUser();			
	}

    // Sign for a game - the game is in the past
	@Test
	public void joinGame_gameispast() throws Exception {

				this.registerUser();
		//MvcResult result = 
			Gamejoiner player = new Gamejoiner(false, (long) 209);
			
			this.mockMvc
	    		.perform(post("/api/gameparticipantspost").with(httpBasic("mockusr", "password"))
	            .contentType(MediaType.APPLICATION_JSON)
	            .content(asJsonString(player)))
	    		.andExpect(status().isOk())
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(true)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.gameisfull").value(false)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.alreadysigned").value(false)) 	        
	    		.andExpect(MockMvcResultMatchers.jsonPath("$.gameispast").value(true)); 			
			this.deleteCurrentUser();			
	}

	
	
	public void deleteCurrentUser() throws Exception {			
				// delete the user that was just created
			    this.mockMvc.perform(delete("/api/deleteuser").with(httpBasic("mockusr", "password")))
			    .andExpect(authenticated())
				.andExpect(status().isOk());
	}
	
	public void registerUser() throws Exception {				
	UserDataFlow newuser = new UserDataFlow("mockusr", "mock", "user", "password", "password", "email@email.com");			
	//MvcResult result = 
			this.mockMvc
        		.perform(post("/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(newuser)))
        		.andExpect(status().isOk())
        		.andExpect(MockMvcResultMatchers.jsonPath("$.checkfailed").value(false));      	      
	}	
	
	public static String asJsonString(final Object obj) {
	    try {
	        return new ObjectMapper().writeValueAsString(obj);
	    } catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}

}