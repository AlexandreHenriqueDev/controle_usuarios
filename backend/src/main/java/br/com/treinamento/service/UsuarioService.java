package br.com.treinamento.service;

import br.com.treinamento.dto.CadastroUsuarioDto;
import br.com.treinamento.entity.Perfil;
import br.com.treinamento.entity.Pessoa;
import br.com.treinamento.entity.Usuario;
import br.com.treinamento.exception.BadRequestException;
import br.com.treinamento.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(CadastroUsuarioDto cadastroUsuarioDto, Pessoa pessoa) {
        Usuario usuarioCadastro = cadastroUsuarioDto.toUsuario();
        usuarioCadastro.setPessoa(pessoa);
        usuarioCadastro.setCargo(cadastroUsuarioDto.getCargo().toEntity());
        List<Perfil> perfis = cadastroUsuarioDto.getPerfis().stream().map(p -> p.toEntity()).collect(Collectors.toList());
        usuarioCadastro.setPerfis(perfis);
        return usuarioRepository.save(usuarioCadastro);
    }

    public Iterable<Usuario> buscar() {
        return usuarioRepository.findAll();
    }
}
