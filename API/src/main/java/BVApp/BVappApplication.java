package BVApp;

// start the backend
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication
(exclude = { SecurityAutoConfiguration.class })
public class BVappApplication {

	public static void main(String[] args) {
		SpringApplication.run(BVappApplication.class, args);
	}
}