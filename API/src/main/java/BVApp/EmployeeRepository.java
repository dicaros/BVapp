package BVApp;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

@PreAuthorize("hasRole('ROLE_USER')")
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> { // enable paging support

	@Override
	@PreAuthorize("#employee?.myuser == null or #employee?.myuser?.username == authentication?.name")
	Employee save(@Param("employee") Employee employee);

	@Override
	@PreAuthorize("@employeeRepository.findById(#id)?.myuser?.username == authentication?.name")
	void deleteById(@Param("id") Long id);

	@Override
	@PreAuthorize("#employee?.myuser?.username == authentication?.name")
	void delete(@Param("employee") Employee employee);

}