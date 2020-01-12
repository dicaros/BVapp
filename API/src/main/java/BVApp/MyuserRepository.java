package BVApp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

// user details are not visible to other users and are not exposed through the API
@RepositoryRestResource(exported = false)
public interface MyuserRepository extends JpaRepository<Myuser, Long> {

	@SuppressWarnings("unchecked")
	Myuser save(Myuser myuser);

	Myuser findByName(String name);

	Myuser findByEmail(String email);

}