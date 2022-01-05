package br.com.treinamento.service;

import br.com.treinamento.dto.CadastroUsuarioDto;
import br.com.treinamento.entity.Pessoa;
import br.com.treinamento.exception.BadRequestException;
import br.com.treinamento.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public Pessoa salvar(CadastroUsuarioDto cadastroUsuarioDto) throws BadRequestException {

        Optional<Pessoa> pessoaNoBanco = pessoaRepository.findByCpf(cadastroUsuarioDto.getCpf());

        if(pessoaNoBanco.isPresent()) {
            throw new BadRequestException("Já existe uma pessoa com este cpf!", new RuntimeException());
        }

        return pessoaRepository.save(cadastroUsuarioDto.toPessoa());
    }
}
