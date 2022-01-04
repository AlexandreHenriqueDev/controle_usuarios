package br.com.treinamento.service;

import br.com.treinamento.dto.CargoDto;
import br.com.treinamento.entity.Cargo;
import br.com.treinamento.exception.BadRequestException;
import br.com.treinamento.repository.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static java.util.Objects.nonNull;

@Service
public class CargoService {

    @Autowired
    private CargoRepository cargoRepository;

    public Cargo salvar(CargoDto cargoDto) throws BadRequestException {

        if(cargoRepository.findByNome(cargoDto.getNome()).isPresent()) {
            throw new BadRequestException("Já existe um cargo com este nome!");
        }

        return cargoRepository.save(cargoDto.toEntity());
    }

    public Cargo editar(CargoDto cargoDto) throws BadRequestException {
        Optional<Cargo> cargoNoBanco = cargoRepository.findById(cargoDto.getId());
        if(!cargoNoBanco.isPresent()) {
            throw new BadRequestException("Não existe um cargo com este id!");
        }
        Optional<Cargo> cargoNoBancoMesmoNome = cargoRepository.findByNome(cargoDto.getNome());
        Cargo cargo = cargoNoBanco.get();
        cargo.setNome(cargoDto.getNome());
        if(!cargoNoBancoMesmoNome.isPresent() || cargoNoBancoMesmoNome.isPresent() && cargoNoBancoMesmoNome.get().getId().equals(cargoDto.getId())) {
            return cargoRepository.save(cargo);
        } else {
            throw new BadRequestException("Já existe um cargo com este nome!");
        }

    }

    public Iterable<Cargo> listar(Boolean ordenado) {
        if(nonNull(ordenado) && ordenado.booleanValue() == true) {
            return cargoRepository.findAllByOrderByNomeAsc();
        }
        return cargoRepository.findAll();
    }

}
