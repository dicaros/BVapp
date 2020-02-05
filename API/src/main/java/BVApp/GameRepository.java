package BVApp;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PreAuthorize;

// define repository for games

// only users or admins can modify
@PreAuthorize("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
public interface GameRepository extends PagingAndSortingRepository<Game, Long> { // enable paging support

	// do not expose save method (use /api/newgame instead)
	@SuppressWarnings("unchecked")
//	@Override
//	@PreAuthorize("#game?.myuser == null or #game?.myuser?.name == authentication?.name"
//	@RestResource(exported = false) 
	Game save(@Param("game") Game game);
	
	// do not expose delete method for Games
/*	@Override
	@PreAuthorize("@gameRepository.findById(#id)?.myuser?.name  == authentication?.name")
	@RestResource(exported = false) 
	void deleteById(@Param("id") Long id);*/

	// do not expose delete my userid method
	@RestResource(exported = false) 
	@Transactional
	void deleteAllByMyuserId(@Param("id") Long id);
	
	// do not expose delete method for Games
/*	@Override
	@PreAuthorize("#game?.myuser?.name == authentication?.name")
	@RestResource(exported = false) 
	void delete(@Param("game") Game game);*/
	
	Optional<Game> findById(Long id);
		
}