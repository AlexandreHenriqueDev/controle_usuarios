package br.com.treinamento.repository;

import br.com.treinamento.entity.Cargo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CargoRepository extends CrudRepository<Cargo, String> {

    Optional<Cargo> findByNome(String nome);
    List<Cargo> findAllByOrderByNomeAsc();

}
