package BVApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class SpringDataJpaUserDetailsService implements UserDetailsService {

	private final MyuserRepository repository;

	@Autowired
	public SpringDataJpaUserDetailsService(MyuserRepository repository) {
		this.repository = repository;
	}

	@Override
	public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
		Myuser myuser = this.repository.findByName(name);
		return new User(myuser.getName(), myuser.getPassword(),
				AuthorityUtils.createAuthorityList(myuser.getRoles()));
	}

}