package br.com.treinamento.service;

import br.com.treinamento.dto.PerfilDto;
import br.com.treinamento.entity.Perfil;
import br.com.treinamento.entity.Usuario;
import br.com.treinamento.exception.BadRequestException;
import br.com.treinamento.repository.PerfilRepository;
import br.com.treinamento.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static java.util.Objects.nonNull;

@Service
public class PerfilService {

    @Autowired
    private PerfilRepository perfilRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Perfil salvar(PerfilDto perfilDto) throws BadRequestException {

        if(perfilRepository.findByNome(perfilDto.getNome()).isPresent()) {
            throw new BadRequestException("Já existe um perfil com este nome!");
        }

        return perfilRepository.save(perfilDto.toEntity());
    }

    public Perfil editar(PerfilDto perfilDto) throws BadRequestException {
        Optional<Perfil> perfilNoBanco = perfilRepository.findById(perfilDto.getId());
        if(!perfilNoBanco.isPresent()) {
            throw new BadRequestException("Não existe um perfil com este id!");
        }
        Optional<Perfil> cargoNoBancoMesmoNome = perfilRepository.findByNome(perfilDto.getNome());
        Perfil perfil = perfilNoBanco.get();
        perfil.setNome(perfilDto.getNome());
        if(!cargoNoBancoMesmoNome.isPresent() || cargoNoBancoMesmoNome.isPresent() && cargoNoBancoMesmoNome.get().getId().equals(perfilDto.getId())) {
            return perfilRepository.save(perfil);
        } else {
            throw new BadRequestException("Já existe um perfil com este nome!");
        }

    }

    public Iterable<Perfil> listar(Boolean ordenado) {
        if(nonNull(ordenado) && ordenado.booleanValue() == true) {
            return perfilRepository.findAllByOrderByNomeAsc();
        }
        return perfilRepository.findAll();
    }

    public void deletar(PerfilDto perfilDto) throws BadRequestException {
        Optional<Usuario> usuarioVinculadoPerfil = usuarioRepository.findAllByPerfis(perfilDto.toEntity());

        if(usuarioVinculadoPerfil.isPresent()) {
            throw new BadRequestException("Existem usuários vinculados a este perfil!");
        }

        perfilRepository.delete(perfilDto.toEntity());
    }

}
