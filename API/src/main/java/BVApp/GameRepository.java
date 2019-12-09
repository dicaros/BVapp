package BVApp;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

@PreAuthorize("hasRole('ROLE_USER')")
public interface GameRepository extends PagingAndSortingRepository<Game, Long> { // enable paging support

	@Override
	@PreAuthorize("#game?.myuser == null or #game?.myuser?.name == authentication?.name")
	Game save(@Param("game") Game game);

	@Override
	@PreAuthorize("@gameRepository.findById(#id)?.myuser?.name  == authentication?.name")
	void deleteById(@Param("id") Long id);

	@Override
	@PreAuthorize("#game?.myuser?.name == authentication?.name")
	void delete(@Param("game") Game game);
	
}