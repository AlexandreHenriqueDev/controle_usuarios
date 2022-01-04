package br.com.treinamento.service;

import br.com.treinamento.dto.CadastroUsuarioDto;
import br.com.treinamento.entity.Pessoa;
import br.com.treinamento.entity.Usuario;
import br.com.treinamento.exception.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CadastroUsuariosService {

    @Autowired
    private PessoaService pessoaService;

    @Autowired
    private UsuarioService usuarioService;

    @Transactional
    public Usuario cadastrar(CadastroUsuarioDto cadastroUsuarioDto) throws BadRequestException {

        Pessoa pessoa = pessoaService.salvar(cadastroUsuarioDto);

        return usuarioService.salvar(cadastroUsuarioDto, pessoa);
    }

}
