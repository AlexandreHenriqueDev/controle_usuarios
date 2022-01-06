package br.com.treinamento.service;

import br.com.treinamento.dto.CadastroUsuarioDto;
import br.com.treinamento.entity.Pessoa;
import br.com.treinamento.entity.Usuario;
import br.com.treinamento.exception.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

@Service
public class CadastroUsuariosService {

    @Autowired
    private PessoaService pessoaService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private CargoService cargoService;

    @Autowired
    private PerfilService perfilService;

    public Iterable<Usuario> buscar() {
        Iterable<Usuario> usuarios = usuarioService.buscar();

        return usuarios;
    }

    @Transactional
    public Usuario cadastrar(CadastroUsuarioDto cadastroUsuarioDto) throws BadRequestException {

        Pessoa pessoa = pessoaService.salvar(cadastroUsuarioDto);

        cadastroUsuarioDto.getPerfis().stream().forEach(p -> {
            if(isNull(p.getId()) || !perfilService.buscarPorId(p.getId()).isPresent()) {
                throw new BadRequestException("Perfil " + (nonNull(p.getNome()) ? p.getNome() : "null")  + " não existe", new RuntimeException());
            }
        });

        if(isNull(cadastroUsuarioDto.getCargo())
                || isNull(cadastroUsuarioDto.getCargo().getId())
                || !cargoService.buscarPorId(cadastroUsuarioDto.getCargo().getId()).isPresent()) {
            throw new BadRequestException("Cargo " +
                    (nonNull(cadastroUsuarioDto.getCargo().getNome()) ? cadastroUsuarioDto.getCargo().getNome() : "null") +
                    " não existe", new RuntimeException());
        }

        return usuarioService.salvar(cadastroUsuarioDto, pessoa);
    }

}
