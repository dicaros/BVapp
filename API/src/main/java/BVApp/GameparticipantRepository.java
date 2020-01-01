package BVApp;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

@PreAuthorize("hasRole('ROLE_USER')")
public interface GameparticipantRepository extends PagingAndSortingRepository<Gameparticipant, Long> { // enable paging support

	@Override
	@PreAuthorize("#gameparticipant?.myuser == null or #gameparticipant?.myuser?.name == authentication?.name")
	Gameparticipant save(@Param("gameparticipant") Gameparticipant gameparticipant);

	@Override
	@PreAuthorize("@gameparticipantRepository.findById(#id)?.myuser?.name  == authentication?.name")
	void deleteById(@Param("id") Long id);

	@Override
	@PreAuthorize("#gameparticipant?.myuser?.name == authentication?.name")
	void delete(@Param("gameparticipant") Gameparticipant gameparticipant);

	List<Gameparticipant> findAllByGameId(Long id);
	
}