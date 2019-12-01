package BVApp;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;



@PreAuthorize("hasRole('ROLE_USER')")
public interface MyUserDetailsRepository  { // enable paging support
	
	


}