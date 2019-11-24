package BVApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler(Employee.class)
public class SpringDataRestEventHandler {

	private final MyuserRepository myuserRepository;

	@Autowired
	public SpringDataRestEventHandler(MyuserRepository myuserRepository) {
		this.myuserRepository = myuserRepository;
	}

	@HandleBeforeCreate
	@HandleBeforeSave
	public void applyUserInformationUsingSecurityContext(Employee employee) {

		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		Myuser myuser = this.myuserRepository.findByName(name);
		if (myuser == null) {
			Myuser newMyuser = new Myuser();
			newMyuser.setName(name);
			newMyuser.setRoles("ROLE_USER");
			myuser = this.myuserRepository.save(newMyuser);
		}
		employee.setMyuser(myuser);
	}
}