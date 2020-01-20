package BVApp;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PreAuthorize;

public interface MyUserDetailsRepository extends CrudRepository<MyUserDetail, Long> { // enable paging support
	
	@SuppressWarnings("unchecked")
	@Override
//	@PreAuthorize("#myuserdetails?.myuser == null or #myuserdetails?.myuser?.name == authentication?.name")
	@RestResource(exported = false)
	MyUserDetail save(@Param("myuserdetails") MyUserDetail myuserdetails);
		
	@Override
	@PreAuthorize("@myuserdetailsrepository.findById(#id)?.myuser?.name  == authentication?.name")
	void deleteById(@Param("id") Long id);

/*	@PostFilter("filterObject.myuser.getName() == principal.username")
    @Override
    List<MyUserDetails> findAll();*/

	@Override
	@PreAuthorize("#myuserdetails?.myuser?.name == authentication?.name")
	void delete(@Param("myuserdetails") MyUserDetail myuserdetails);

}