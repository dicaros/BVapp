package BVApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler
public class SpringDataRestEventHandler {

	private final MyuserRepository myuserRepository;

	@Autowired
	public SpringDataRestEventHandler(MyuserRepository myuserRepository) {
		this.myuserRepository = myuserRepository;
	}

	@HandleBeforeCreate
	@HandleBeforeSave
	public void applyUserInformationUsingSecurityContext1(MyUserDetail myuserdetails) 
{
		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		Myuser myuser = this.myuserRepository.findByName(name);
		myuserdetails.setMyuser(myuser);
	}
	@HandleBeforeCreate
	@HandleBeforeSave
	public void applyUserInformationUsingSecurityContext2(Game game) 
{
		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		Myuser myuser = this.myuserRepository.findByName(name);
		game.setMyuser(myuser);
	}
	@HandleBeforeCreate
	@HandleBeforeSave
	public void applyUserInformationUsingSecurityContext3(Gameparticipant gameparticipant) 
{
		String name = SecurityContextHolder.getContext().getAuthentication().getName();
		Myuser myuser = this.myuserRepository.findByName(name);
		gameparticipant.setMyuser(myuser);
	}
}