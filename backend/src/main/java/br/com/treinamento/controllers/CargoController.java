package br.com.treinamento.controllers;

import br.com.treinamento.dto.CargoDto;
import br.com.treinamento.entity.Cargo;
import br.com.treinamento.exception.BadRequestException;
import br.com.treinamento.service.CargoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/v1/cargo")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CargoController extends BaseController {

    @Autowired
    private CargoService cargoService;

    @GetMapping
    public ResponseEntity<Iterable<Cargo>> listar(@RequestParam(required = false) Boolean ordenado) {
        return ResponseEntity.ok().body(cargoService.listar(ordenado));
    }

    @PostMapping
    public ResponseEntity<Cargo> salvar(@RequestBody CargoDto cargoDto) throws BadRequestException {
        return ResponseEntity.ok().body(cargoService.salvar(cargoDto));
    }

    @PutMapping
    public ResponseEntity<Cargo> editar(@RequestBody CargoDto cargoDto) throws BadRequestException {
        return ResponseEntity.ok().body(cargoService.editar(cargoDto));
    }

}
