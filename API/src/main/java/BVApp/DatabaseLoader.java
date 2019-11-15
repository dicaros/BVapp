package BVApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final EmployeeRepository employees;
	private final ManagerRepository managers;

	@Autowired
	public DatabaseLoader(EmployeeRepository employeeRepository,
						  ManagerRepository managerRepository) {

		this.employees = employeeRepository;
		this.managers = managerRepository;
	}

	@Override
	public void run(String... strings) throws Exception {

		Manager greg = this.managers.save(new Manager("greg", "turnquist",
							"ROLE_MANAGER"));
		Manager oliver = this.managers.save(new Manager("oliver", "gierke",
							"ROLE_MANAGER"));

		SecurityContextHolder.getContext().setAuthentication(
			new UsernamePasswordAuthenticationToken("greg", "doesn't matter",
				AuthorityUtils.createAuthorityList("ROLE_MANAGER")));

		this.employees.save(new Employee("Frodozzo", "Baggins", "ring bearer", greg));
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
				AuthorityUtils.createAuthorityList("ROLE_MANAGER")));

		this.employees.save(new Employee("Samwise", "Gamgee", "gardener", oliver));
		this.employees.save(new Employee("Merry", "Brandybuck", "pony rider", oliver));
		this.employees.save(new Employee("Peregrin", "Took", "pipe smoker", oliver));

		SecurityContextHolder.clearContext();
	}
}