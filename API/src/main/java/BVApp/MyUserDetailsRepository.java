package BVApp;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PostFilter;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.access.prepost.PreFilter;

/*@PreAuthorize("hasRole('ROLE_USER')")*/
public interface MyUserDetailsRepository extends CrudRepository<MyUserDetail, Long> { // enable paging support
	
/*	@Override
	@PreAuthorize("#myuserdetails?.myuser == null or #myuserdetails?.myuser?.name == authentication?.name")*/
	MyUserDetail save(/*@Param("myuserdetails")*/ MyUserDetail myuserdetails);

/*	@Override
	@Query(value = "select a.id, firstname, lastname, phone, gpsx, gpsy, playedcount, noshowcount, myuser_id, version from my_user_details a left join myuser b on b.id = a.myuser_id where b.name = " , nativeQuery = true)
	MyUserDetails findOne(ID id);*/
	
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