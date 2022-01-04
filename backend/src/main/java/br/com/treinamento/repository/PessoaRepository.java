package br.com.treinamento.repository;

import br.com.treinamento.entity.Pessoa;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PessoaRepository extends CrudRepository<Pessoa, String> {
    Optional<Pessoa> findByCpf(String cpf);
}
