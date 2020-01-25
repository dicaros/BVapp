package BVApp;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PreAuthorize;

public interface MyUserDetailsRepository extends CrudRepository<MyUserDetail, Long> { // enable paging support
	
// anybody can create or update a user (needed for registration); however this action is not accessible through the API.  (see SecurityController)
	@SuppressWarnings("unchecked")
	@Override
//	@PreAuthorize("#myuserdetails?.myuser == null or #myuserdetails?.myuser?.name == authentication?.name")
	@RestResource(exported = false)
	MyUserDetail save(@Param("myuserdetails") MyUserDetail myuserdetails);
		
	@Override
// user details can only be deleted by the same user
	@PreAuthorize("@myuserdetailsrepository.findById(#id)?.myuser?.name  == authentication?.name")
	void deleteById(@Param("id") Long id);

/*	@PostFilter("filterObject.myuser.getName() == principal.username")
    @Override
    List<MyUserDetails> findAll();*/

	@Override
// user details can only be deleted by the same user
	@PreAuthorize("#myuserdetails?.myuser?.name == authentication?.name")
	void delete(@Param("myuserdetails") MyUserDetail myuserdetails);

}