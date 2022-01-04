package br.com.treinamento.controllers;

import br.com.treinamento.dto.CadastroUsuarioDto;
import br.com.treinamento.dto.CargoDto;
import br.com.treinamento.entity.Cargo;
import br.com.treinamento.exception.BadRequestException;
import br.com.treinamento.service.CadastroUsuariosService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping("/v1/usuario")
public class CadastroUsuarioController {

    @Autowired
    private CadastroUsuariosService cadastroUsuariosService;

    @PostMapping
    public ResponseEntity<?> cadastrar(@Valid @RequestBody CadastroUsuarioDto cadastroUsuarioDto) throws BadRequestException {
        return ResponseEntity.ok().body(cadastroUsuariosService.cadastrar(cadastroUsuarioDto));
    }

}
