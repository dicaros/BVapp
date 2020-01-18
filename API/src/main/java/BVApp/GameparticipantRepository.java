package BVApp;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

@PreAuthorize("hasRole('ROLE_USER')")
public interface GameparticipantRepository extends PagingAndSortingRepository<Gameparticipant, Long> { // enable paging support

	// only a game participant can delete or change its own activities
	@SuppressWarnings("unchecked")
	@Override
	@PreAuthorize("#gameparticipant?.myuser == null or #gameparticipant?.myuser?.name == authentication?.name")
	Gameparticipant save(@Param("gameparticipant") Gameparticipant gameparticipant);

	// custom query to prevent a user from signing out from a game within 24 hours from the game 
	@Override
	@PreAuthorize("@gameparticipantRepository.findById(#id)?.get().myuser?.name  == authentication?.name")
	@Modifying
	@Query(value = "delete from gameparticipant where gameparticipant.id = (select gp.id from gameparticipant gp left join game g on g.id = gp.game_id WHERE g.gamedate + g.gametime - (CURRENT_TIMESTAMP) > '24 hours' and gp.id = :id)", 
			nativeQuery = true)
	void deleteById(@Param("id") Long id);

	// find all game participants based on game id
	List<Gameparticipant> findAllByGameId(Long id);
	
	// find all games based on user id	
	List<Gameparticipant> findAllByMyuserId(Long id);
	
}