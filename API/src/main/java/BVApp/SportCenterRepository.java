package BVApp;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
public interface SportCenterRepository extends PagingAndSortingRepository<Sportcenter, Long> { // enable paging support

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void deleteById(Long id);

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	void delete(Sportcenter sportcenter);
	
	@SuppressWarnings("unchecked")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	Sportcenter save(@Param("sportcenter") Sportcenter sportcenter);
	
	Optional<Sportcenter> findById(Long id);

}