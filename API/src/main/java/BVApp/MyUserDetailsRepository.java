package BVApp;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

@PreAuthorize("hasRole('ROLE_USER')")
public interface MyUserDetailsRepository extends PagingAndSortingRepository<MyUserDetails, Long> { // enable paging support

	@Override
	@PreAuthorize("#myuserdetails?.myuser == null or #myuserdetails?.myuser?.name == authentication?.name")
	MyUserDetails save(@Param("myuserdetails") MyUserDetails myuserdetails);

	@PreAuthorize("#myuserdetails?.myuser == null or #myuserdetails?.myuser?.name == authentication?.name")
	MyUserDetails get(@Param("myuserdetails") MyUserDetails myuserdetails);
	
	@Override
	@PreAuthorize("@myuserdetailsRepository.findById(#id)?.myuser?.name == authentication?.name")
	void deleteById(@Param("id") Long id);

	@Override
	@PreAuthorize("#myuserdetails?.myuser?.name == authentication?.name")
	void delete(@Param("myuserdetails") MyUserDetails myuserdetails);

}