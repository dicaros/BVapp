package BVApp;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;

@Component
public class SpringDataRestCustomization implements RepositoryRestConfigurer {

 @Override
 public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
    config.getCorsRegistry()
    			.addMapping("/**")			
    			.allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH")
    			.allowedOrigins("*");
  }
}