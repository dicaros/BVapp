package BVApp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

/*@RepositoryRestResource(exported = true)*/
public interface MyuserRepository extends JpaRepository<Myuser, Long> {

/*	@Override
	@PreAuthorize("permitAll()")*/
	Myuser save(Myuser myuser);

	Myuser findByName(String name);

	Myuser findByEmail(String email);

}