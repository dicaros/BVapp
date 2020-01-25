package BVApp;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity // security policy for this app. Overrides default Spring Boot settings
@EnableGlobalMethodSecurity(prePostEnabled = true) // Enable method-level security
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	// security
	@Autowired
	private SpringDataJpaUserDetailsService userDetailsService;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth
			.userDetailsService(this.userDetailsService)
			.passwordEncoder(Myuser.PASSWORD_ENCODER);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.cors().and() // enable cors
			.authorizeRequests()
				.antMatchers("/signup").permitAll() // grants unconditional access to certain paths
				.anyRequest().authenticated() // anything else requires authentication to be accessed
				.and()
			.formLogin()
				.defaultSuccessUrl("/api/", true) // defaults to /api on login
				.permitAll()
				.and()
			.httpBasic() // basic login
			.authenticationEntryPoint(new NoPopupBasicAuthenticationEntryPoint()) // prevents the default username/password browser popup from appearing when the React front-end tries to connect to the API
				.and()	
			.csrf().disable() // !!!!!!!!!!!!!! basic authentication is on and csrf disabled, to be changed for prod release (cross-site request forgery)
			.logout()
				.logoutSuccessUrl("/");
	}

	
	   @Bean
	    public CorsConfigurationSource corsConfigurationSource() {
	        final CorsConfiguration configuration = new CorsConfiguration();
	        configuration.setAllowedOrigins(List.of("*")); // !!!!!!!!!!!!!! for demo purpose all origins allowed. To be changed to react server once in Prod
	        configuration.setAllowedMethods(List.of("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH"));
	        configuration.setAllowCredentials(true);
	        // setAllowedHeaders to prevent fail with 403 Invalid CORS request
	        configuration.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
	        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", configuration);
	        return source;
	    }
	   
	   // expose IDs for specific objects. This is needed by front-end app to be able to filter requests
	   @Bean
	   public RepositoryRestConfigurer repositoryRestConfigurer()
	   {
	       return RepositoryRestConfigurer.withConfig(config -> {
	           config.exposeIdsFor(Sportcenter.class, Game.class, Gameparticipant.class);
	       });
	   }
	
}