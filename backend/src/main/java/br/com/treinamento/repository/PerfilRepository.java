package br.com.treinamento.repository;

import br.com.treinamento.entity.Cargo;
import br.com.treinamento.entity.Perfil;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface PerfilRepository extends CrudRepository<Perfil, String> {

    Optional<Perfil> findByNome(String nome);
    List<Perfil> findAllByOrderByNomeAsc();

}
