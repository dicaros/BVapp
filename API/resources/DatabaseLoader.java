package BVApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component // automatically picked by @SpringBootApplication
public class DatabaseLoader implements CommandLineRunner { // executes after all beans are created and registered

	private final EmployeeRepository employees;
	private final MyuserRepository myusers;

	@Autowired
	public DatabaseLoader(EmployeeRepository employeeRepository,
						  MyuserRepository myuserRepository) {

		this.employees = employeeRepository;
		this.myusers = myuserRepository;
	}

	@Override
	public void run(String... strings) throws Exception {

		Myuser greg = this.myusers.save(new Myuser("greg", "turnquist",
							"ROLE_USER"));
		Myuser oliver = this.myusers.save(new Myuser("oliver", "gierke",
							"ROLE_USER"));

		SecurityContextHolder.getContext().setAuthentication(
			new UsernamePasswordAuthenticationToken("greg", "doesn't matter",
				AuthorityUtils.createAuthorityList("ROLE_USER")));

		this.employees.save(new Employee("Frodo", "Baggins", "ring bearer", greg));
		this.employees.save(new Employee("Bilbo", "Baggins", "burglar", greg));
		this.employees.save(new Employee("Gandalf", "the Grey", "wizard", greg));
		this.employees.save(new Employee("Gandalf2", "the Grey2", "wizard", greg));
		this.employees.save(new Employee("Gandalf3", "the Grey3", "wizard", greg));
		this.employees.save(new Employee("Gandalf4", "the Grey4", "wizard", greg));
		this.employees.save(new Employee("Gandalf5", "the Grey5", "wizard", greg));
		this.employees.save(new Employee("Gandalf6", "the Grey6", "wizard", greg));
		this.employees.save(new Employee("Gandalf7", "the Grey7", "wizard", greg));
		this.employees.save(new Employee("Gandalf8", "the Grey8", "wizard", greg));
		this.employees.save(new Employee("Gandalf9", "the Grey9", "wizard", greg));
		this.employees.save(new Employee("Gandalf10", "the Grey10", "wizard", greg));

		SecurityContextHolder.getContext().setAuthentication(
			new UsernamePasswordAuthenticationToken("oliver", "doesn't matter",
				AuthorityUtils.createAuthorityList("ROLE_USER")));

		this.employees.save(new Employee("Samwise", "Gamgee", "gardener", oliver));
		this.employees.save(new Employee("Merry", "Brandybuck", "pony rider", oliver));
		this.employees.save(new Employee("Peregrin", "Took", "pipe smoker", oliver));

		SecurityContextHolder.clearContext();
	}
}