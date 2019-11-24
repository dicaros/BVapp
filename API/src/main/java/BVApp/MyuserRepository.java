package BVApp;

import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface MyuserRepository extends Repository<Myuser, Long> {

	Myuser save(Myuser myuser);

	Myuser findByName(String name);

}