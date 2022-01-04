package br.com.treinamento.controllers;

import br.com.treinamento.dto.PerfilDto;
import br.com.treinamento.entity.Perfil;
import br.com.treinamento.exception.BadRequestException;
import br.com.treinamento.service.PerfilService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/v1/perfil")
public class PerfilController extends BaseController {

    @Autowired
    private PerfilService perfilService;

    @GetMapping
    public ResponseEntity<Iterable<Perfil>> listar(@RequestParam(required = false) Boolean ordenado) {
        return ResponseEntity.ok().body(perfilService.listar(ordenado));
    }

    @PostMapping
    public ResponseEntity<Perfil> salvar(@RequestBody PerfilDto perfilDto) throws BadRequestException {
        return ResponseEntity.ok().body(perfilService.salvar(perfilDto));
    }

    @PutMapping
    public ResponseEntity<Perfil> editar(@RequestBody PerfilDto perfilDto) throws BadRequestException {
        return ResponseEntity.ok().body(perfilService.editar(perfilDto));
    }

    @DeleteMapping
    public ResponseEntity<?> deletar(@RequestBody PerfilDto perfilDto) throws BadRequestException {
        try {
            perfilService.deletar(perfilDto);
            return ResponseEntity.ok().body(perfilDto);
        } catch (BadRequestException e) {
            throw e;
        }
    }

}
