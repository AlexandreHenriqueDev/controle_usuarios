package br.com.treinamento.repository;

import br.com.treinamento.entity.Perfil;
import br.com.treinamento.entity.Usuario;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UsuarioRepository extends CrudRepository<Usuario, String> {

    Optional<Usuario> findAllByPerfis(Perfil perfil);

}
