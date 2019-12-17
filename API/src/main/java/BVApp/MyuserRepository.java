package BVApp;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PreAuthorize;

/*@RepositoryRestResource(exported = true)*/
public interface MyuserRepository extends CrudRepository<Myuser, Long> {

/*	@Override
	@PreAuthorize("permitAll()")*/
	Myuser save(@Param("myuser")Myuser myuser);

	Myuser findByName(String name);

}