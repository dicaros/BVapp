package BVApp;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.access.prepost.PreAuthorize;

@PreAuthorize("hasRole('ROLE_USER')")
public interface SportCenterRepository extends PagingAndSortingRepository<Sportcenter, Long> { // enable paging support

	void deleteById(Long id);

	void delete(Sportcenter sportcenter);
	
	Optional<Sportcenter> findById(Long id);

	
}